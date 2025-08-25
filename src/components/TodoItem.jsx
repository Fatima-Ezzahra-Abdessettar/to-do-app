import React from "react";

const TodoItem = ({ task, onDoneClick, onDelete, onEdit }) => {
  return (
    <div className="flex justify-between items-center bg-task p-2 rounded-xl w-full">
      <div className="flex space-x-2 overflow-hidden">
        <button
          className="bg-doneBtn w-6 h-6 rounded-md flex items-center justify-center hover:cursor-pointer"
          onClick={onDoneClick}
        >
          {task.done && <i className="ri-check-fill text-text"></i>}
        </button>
        <p
          className={`text-text truncate max-w-[100px] sm:max-w-[250px] lg:max-w-[400px] ${
            task.done ? "line-through opacity-60" : ""
          }`}
        >
          {task.text}
        </p>
      </div>
      <div className="flex flex-row gap-3">
        <button
          className="bg-CloseBtn rounded-full w-8 h-8 flex items-center justify-center hover:cursor-pointer hover:bg-input"
          onClick={onEdit}
        >
          <i className="ri-edit-line text-text"></i>
        </button>
        <button
          className="bg-CloseBtn rounded-full w-8 h-8 flex items-center justify-center hover:cursor-pointer hover:bg-input"
          onClick={onDelete}
        >
          <i className="ri-delete-bin-2-line text-text"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
