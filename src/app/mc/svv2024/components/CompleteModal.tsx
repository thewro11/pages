import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";

export default function CompleteModal(completeModalProps: {
  openModal: boolean,
  onCloseModal: Function,
}) {
  
  return <>
    <Modal
      show={completeModalProps.openModal}
      onClose={() => {
        completeModalProps.onCloseModal();
      }}  
    >

      <ModalHeader>
        Form Submitted!
      </ModalHeader>

      <ModalBody>
        <p className="text-sm font-medium text-gray-900">
          Your form has been successfully submitted. In this period before the server starts, feel free to check out the server info here.
        </p>
      </ModalBody>

      <ModalFooter>
        <div className="grow"></div>
        <div>
          <button 
            type="button" 
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            onClick={() => {
              completeModalProps.onCloseModal();
            }}
          >
            Done
          </button>
        </div>
      </ModalFooter>

    </Modal>
  </>;

}
