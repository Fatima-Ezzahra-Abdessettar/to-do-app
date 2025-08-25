import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, handleDoneClick, handleDelete, handleEdit }) => {
  return (
    <div className="flex flex-col space-y-3 bg-list rounded-4xl mb-10 p-2 sm:px-5 sm:py-7 mx-auto w-full sm:w-3/4 lg:w-1/2">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDoneClick={() => handleDoneClick(task.id)}
          onDelete={() => handleDelete(task.id)}
          onEdit={() => handleEdit(task)}
        />
      ))}
    </div>
  );
};

export default TodoList;
