import React, { useState, useEffect } from "react";

const ConfirmEdit = ({ taskToEdit, cancelEdit, confirmEdit }) => {
  if (!taskToEdit) return null;

  // Local state to edit the text
  const [editedText, setEditedText] = useState(taskToEdit.text);

  // Update local state if task changes
  useEffect(() => {
    setEditedText(taskToEdit.text);
  }, [taskToEdit]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e) => {
            if (e.key === "Enter") {
                confirmEdit(taskToEdit.id, editedText);
            }
            }}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={cancelEdit}
            className="px-4 py-2 rounded-xl bg-list hover:bg-task hover:cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => confirmEdit(taskToEdit.id, editedText)}
            className="px-4 py-2 rounded-xl bg-input text-white hover:bg-pink-300 hover:cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEdit;
