import React from "react";
import css from "./SaveConfirmationModal.module.css";

const SaveConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modal}>
      <h2>Confirm Save</h2>
      <p>Are you sure you want to save the changes?</p>
      <div className={css.buttonContainer}>
        <button onClick={onConfirm}>Yes, Save</button>
        <button onClick={onRequestClose}>No, Cancel</button>
      </div>
    </div>
  );
};

export default SaveConfirmationModal;
