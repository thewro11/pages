import { Datepicker, Modal, ModalBody, ModalFooter, ModalHeader, Select } from "flowbite-react";
import TextInput from "./TextInput";
import Label from "./Label";
import Helper from "./Helper";

import colors from "../data/colors.json";
import words from "../data/words.json";
import { useEffect, useState } from "react";
import { Form } from "../interfaces/form";
import { getSelecteds, saveForm } from "../libs/FirebaseDb";
import ConfirmationModal from "./ConfirmationModal";
import { duplicatedColor, duplicatedPrefix, duplicatedUsername } from "../libs/ErrorMsg";
import ErrorModal from "./ErrorModal";
import { Color } from "../libs/Color";

export default function FormModal(formModalProps: {
  openModal: boolean,
  onCloseModal: Function,
  onComplete: Function,
}) {
  const minDate = new Date(2024, 5, 8);
  const maxDate = new Date(2024, 5, 30);

  const [username, setUsername] = useState("");
  const [color, setColor] = useState("");
  const [prefix, setPrefix] = useState("");
  const [startDateProposal, setStartDateProposal] = useState(minDate.toISOString());

  const [namePreview, setNamePreview] = useState("");

  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [msg, setMsg] = useState("");

  const [selectedColors, setSelectedColors] = useState([] as Color[]);
  const [selectedPrefixes, setSelectedPrefixes] = useState([] as string[]);

  const [isShowingAlert, setShowingAlert] = useState(false);
  const [alert, setAlert] = useState("");
  
  const onCloseConfirmationModal = () => {
    setOpenConfirmationModal(false);
  }
  const onCloseErrorModal = () => {
    setOpenErrorModal(false);
  }
  
  const onUsernameChange = (value: string) => {
    setUsername(value);
  };
  const onColorChange = (value: string) => {
    setColor(value);
  };
  const onPrefixChange = (value: string) => {
    setPrefix(value);
  };
  const onStartDateProposalChange = (value: string) => {
    setStartDateProposal(value);
  };

  const onSubmit = async (force?: boolean) => {
    setShowingAlert(false);

    if (!username) {
      setAlert("Please specify your Minecraft username.");
      setShowingAlert(true);
      return;
    }
    if (username.includes(" ")) {
      setAlert("Username should not have space.");
      setShowingAlert(true);
      return;
    }
    if (!prefix) {
      setAlert("Please select the name prefix.");
      setShowingAlert(true);
      return;
    }
    if (!color) {
      setAlert("Please select the name color.");
      setShowingAlert(true);
      return;
    }

    const form: Form = {
      username: username,
      color: color,
      prefix: prefix,
      startDateProposal: startDateProposal,
      updateTime: new Date().toISOString(),
    }

    try {
      if (await saveForm(form, force)) {
        setOpenConfirmationModal(false);
        formModalProps.onComplete();
      }
    } catch (e) {
      const error = e as Error;
      setMsg(error.message);
      handleGetSelecteds();

      if (error.message === duplicatedPrefix) {
        setOpenConfirmationModal(false);
        setOpenErrorModal(true);
      } else if (error.message === duplicatedColor || error.message === duplicatedUsername) {
        setOpenErrorModal(false);
        setOpenConfirmationModal(true);
      } else {
        setMsg("An error occurred. Please try again later.");
        setOpenConfirmationModal(false);
        setOpenErrorModal(true);
      }
    }
  };

  const handleGetSelecteds = () => {
    getSelecteds().then(selecteds => {
      setSelectedColors(selecteds.selectedColors);
      setSelectedPrefixes(selecteds.selectedPrefixes);
    })
  };
  useEffect(handleGetSelecteds, []);

  useEffect(() => {
    const namePreview = (prefix + " " + username).trim();
    setNamePreview(namePreview);
  }, [username, color, prefix]);

  return (
    <>
      <Modal 
        show={formModalProps.openModal} 
        onClose={() => {
          setUsername("");
          formModalProps.onCloseModal();
        }}
      >


        <ModalHeader>
          Minecraft Survival 2024 Registration Form
        </ModalHeader>



        <ModalBody>
          <form className="max-w-sm mx-auto space-y-5">
            <div>
              <Label id="username" required>Minecraft Username</Label>
              <TextInput id="username" data={username} onInputChange={onUsernameChange}></TextInput>
            </div>

            <div>
              <Label id="color" required>Select Name Color</Label>
              <Select id="color" theme={{field:{select:{colors:{gray:"bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-600 focus:ring-purple-600"}}}}} value={color} onChange={e => onColorChange(e.target.value)}>
                <option value="" disabled>Select Name Color →</option>
                {
                  colors.filter(color => {
                    return !selectedColors.includes(color);
                  }).map(color => {
                    return <option value={color.codeName} key={color.codeName}>{color.displayName}</option>
                  })
                }
                <option disabled>Selected</option>
                {
                  selectedColors.map(color => {
                    return <option value={color.codeName} key={color.codeName}>{color.displayName}</option>
                  })
                }
              </Select>
            </div>

            <div>
              <Label id="prefix" required>Select Name Prefix</Label>
              <Select id="prefix" theme={{field:{select:{colors:{gray:"bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-600 focus:ring-purple-600"}}}}} value={prefix} onChange={e => onPrefixChange(e.target.value)}>
                <option value="" disabled>Select Name Prefix →</option>
                {
                  words.filter(word => {
                    return !selectedPrefixes.includes(word);
                  }).map(word => {
                    return <option key={word}>{word}</option>
                  })
                }
                {
                  selectedPrefixes.map(word => {
                    return <option disabled key={word}>{word}</option>
                  })
                }
              </Select>
            </div>

            <div>
              <Label id="preview">Name Preview</Label>
              <TextInput id="preview" data={namePreview} onInputChange={() => {}} style={{color:colors.find(e => e.codeName === color)?.hexName}} disabled></TextInput>
              <Helper>
                <>
                  <p>
                    This is how your name would be shown in game.
                  </p>
                  <p>
                    Color may not display accurately. Please refer to <a className="underline text-blue-500" target="_blank" href="https://minecraft.fandom.com/wiki/Formatting_codes">Minecraft wiki</a>.
                  </p>
                </>
              </Helper>
            </div>

            <hr></hr>

            <div>
              <Label id="startDateProposal" required>Server Start Date</Label>
              <Datepicker
                id="startDateProposal"
                type="text" 
                minDate={minDate} 
                maxDate={maxDate} 
                defaultDate={minDate}
                onChange={e => onStartDateProposalChange(e.target.value)}
                theme={{
                  root: {
                    input: {
                      field: {
                        input: {
                          colors: {
                            gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-600 focus:ring-purple-600"
                          }
                        }
                      },
                    },
                  },
                  popup: {
                    header: {
                      selectors: {
                        button: {
                          next: "invisible",
                          prev: "invisible",
                          view: "disabled"
                        }
                      }
                    },
                    footer: {
                      base: "hidden"
                    }
                  }
                }}
              />
              <Helper>
                <b>Selectable between June 8th - 30th</b>
              </Helper>
              <Helper>
                This is the date that you wish to start your journey on this server.
                It may not be this date you selected as it will be taken to be considered along with others' responses.
              </Helper>
              <Helper>
                The exact server start date will be announced later.
              </Helper>
            </div>

            <hr></hr>

            <div>
              <Helper>
                <>
                  This form <b>does not collect</b> any additional data besides the ones you provided above.
                </>
              </Helper>
              <Helper>
                <>
                  Please contact Théo immediately if encounter any problems.
                </>
              </Helper>
            </div>

          </form>
        </ModalBody>



        <ModalFooter className="flex">
          <div className="grow">
            <p className="text-red-600 text-sm" hidden={!isShowingAlert}>
              {alert}
            </p>
          </div>
          <div>
            <button 
              type="button" 
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => {
                formModalProps.onCloseModal();
              }}
            >
              Cancel
            </button>
            <button 
              type="button" 
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              onClick={() => onSubmit()}
            >
              Submit
            </button>
          </div>
        </ModalFooter>


      </Modal>

      <ConfirmationModal msg={msg} openModal={openConfirmationModal} onCloseModal={onCloseConfirmationModal} onSubmitModal={() => onSubmit(true)}></ConfirmationModal>
      <ErrorModal errMsg={msg} openModal={openErrorModal} onCloseModal={onCloseErrorModal}></ErrorModal>
    </>
  );
}
