import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";

export default function ConfirmationModal(confirmationModalProps: {
  openModal: boolean,
  onCloseModal: Function,
  onSubmitModal: Function,
  msg: string,
}) {
  
  return <>
    <Modal
      show={confirmationModalProps.openModal}
      onClose={() => {
        confirmationModalProps.onCloseModal();
      }}  
    >

      <ModalHeader>
        Duplicate Data
      </ModalHeader>

      <ModalBody>
        <p className="text-sm font-medium text-gray-900">
          {confirmationModalProps.msg}
          &nbsp;Would you like to continue?
        </p>
      </ModalBody>

      <ModalFooter>
        <div className="grow"></div>
        <div>
          <button 
            type="button" 
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => {
              confirmationModalProps.onCloseModal();
            }}
          >
            Cancel
          </button>
          <button 
            type="button" 
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            onClick={() => {
              confirmationModalProps.onSubmitModal();
            }}
          >
            Submit
          </button>
        </div>
      </ModalFooter>

    </Modal>
  </>;

}