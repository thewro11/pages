import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";

export default function ErrorModal(errorModalProps: {
  openModal: boolean,
  onCloseModal: Function,
  errMsg: string
}) {
  
  return <>
    <Modal
      show={errorModalProps.openModal}
      onClose={() => {
        errorModalProps.onCloseModal();
      }}  
    >

      <ModalHeader>
        Error!
      </ModalHeader>

      <ModalBody>
        <p className="text-sm font-medium text-gray-900">
          {errorModalProps.errMsg}
        </p>
      </ModalBody>

      <ModalFooter>
        <div className="grow"></div>
        <div>
          <button 
            type="button" 
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            onClick={() => {
              errorModalProps.onCloseModal();
            }}
          >
            Done
          </button>
        </div>
      </ModalFooter>

    </Modal>
  </>;

}