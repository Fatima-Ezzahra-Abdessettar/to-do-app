import React from "react";

const ConfirmDelete = ({ taskToDelete, cancelDelete, confirmDelete }) => {
  if (!taskToDelete) return null; // modal only shows if there’s a task

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
        <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
        <p className="mb-6">Are you sure you want to delete this task?</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={cancelDelete}
            className="px-4 py-2 rounded-xl bg-task hover:bg-list hover:cursor-pointer"
          >
            No
          </button>
          <button
            onClick={confirmDelete}
            className="px-4 py-2 rounded-xl bg-input text-white hover:bg-pink-300 hover:cursor-pointer"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
