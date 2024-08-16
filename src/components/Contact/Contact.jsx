import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ImPhone } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";

export default function Contact({
  id,
  name: initialName,
  number: initialNumber,
}) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(initialName);
  const [newNumber, setNewNumber] = useState(initialNumber);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .then(() => toast.success("Contact deleted successfully"))
      .catch(() => toast.error("Failed to delete contact"));
    setIsModalOpen(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(
      editContact({ id, updatedContact: { name: newName, number: newNumber } })
    )
      .then(() => {
        toast.success("Contact updated successfully");
        setIsEditing(false);
      })
      .catch(() => toast.error("Failed to update contact"));
  };

  const handleGoBack = () => {
    // Implement the logic to navigate back to the previous window
    // For example, if you're using React Router, you might use `history.goBack()`
    window.history.back(); // Default browser back action
  };

  return (
    <>
      <li className={css.container}>
        <div className={css.list}>
          <div className={css.listItem}>
            <BsPeopleFill />
            {isEditing ? (
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            ) : (
              <span>{initialName}</span>
            )}
          </div>
          <div className={css.listItem}>
            <ImPhone />
            {isEditing ? (
              <input
                type="tel"
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)}
              />
            ) : (
              <span>{initialNumber}</span>
            )}
          </div>
        </div>
        <div className={css.buttonContainer}>
          {isEditing ? (
            <>
              <button
                className={`${css.button} ${css.saveButton}`}
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className={`${css.button} ${css.goBackButton}`}
                onClick={handleGoBack}
              >
                Back
              </button>
            </>
          ) : (
            <>
              <button
                className={`${css.button} ${css.deleteButton}`}
                onClick={() => setIsModalOpen(true)}
              >
                Delete
              </button>
              <button
                className={`${css.button} ${css.editButton}`}
                onClick={handleEdit}
              >
                Edit
              </button>
            </>
          )}
        </div>
      </li>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}
