import Modal from "react-modal";
import css from "./DeleteConfirmationModal.module.css";


Modal.setAppElement("#root");

const DeleteConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Delete"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <h2>Are you sure you want to delete this contact?</h2>
      <div className={css.buttons}>
        <button onClick={onConfirm} className={css.confirmButton}>
          Yes
        </button>
        <button onClick={onRequestClose} className={css.cancelButton}>
          No
        </button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
