import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import ConfirmDelete from "./components/ConfirmDelete";
import ConfirmEdit from "./components/ConfirmEdit";
import Empty from "./components/Empty";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  
  const [darkMode, setDarkMode] = useState(() => {
  const saved = localStorage.getItem("darkMode");
  return saved ? JSON.parse(saved) : false;
  });


  // Input change
  const handleInputChange = (e) => setNewTask(e.target.value);

  // Add task
  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask("");
  };

  // Toggle done
  const handleDoneClick = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  // Open delete modal
  const handleDeleteRequest = (id) => setTaskToDelete(id);

  // Confirm delete
  const confirmDelete = () => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete));
    setTaskToDelete(null);
  };

  // Cancel delete
  const cancelDelete = () => setTaskToDelete(null);

  // Open edit modal
  const handleEditRequest = (task) => setTaskToEdit(task);

  // Confirm edit
  const confirmEdit = (id, newText) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText } : t)));
    setTaskToEdit(null);
  };

  // Cancel edit
  const cancelEdit = () => setTaskToEdit(null);

  // Dark mode toggle
  const toggleDarkMode = () => setDarkMode(!darkMode);
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="min-h-screen min-w-screen bg-lightBg dark:bg-darkBg p-6">
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-4">
        <button
          className="rounded-full bg-input px-1 w-8 h-8 sm:w-10 sm:h-10 hover:shadow-lg hover:shadow-pink-200 active:bg-rose-300 hover:cursor-pointer"
          onClick={toggleDarkMode}
        >
          <i className={`ri-${darkMode ? "sun" : "moon-clear"}-line text-xl`}></i>
        </button>
      </div>

      {/* Title */}
      <h1 className="text-titleLight text-4xl md:text-5xl text-center dark:text-lightBg">
        To do list:
      </h1>

      {/* Input & Add */}
      <div className="flex mx-auto justify-center items-center space-x-3 sm:space-x-8 mt-8">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Enter a task..."
          className="w-60 h-8 sm:w-100 rounded-full bg-input text-text placeholder:text-shadow-text
                     shadow-[inset_0_1px_3px_rgba(228,150,178,0.9),0_4px_6px_rgba(0,0,0,0.1)]
                     px-4 focus:ring-2 focus:ring-shadow focus:outline-none"
        />
        <button
          className="bg-doneBtn rounded-xl h-8 px-4 text-text flex items-center shadow-md dark:shadow-neutral-900 hover:cursor-pointer active:bg-input hover:shadow-xl"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      {/* Tasks or Empty */}
      {tasks.length === 0 ? (
        <Empty />
      ) : (
        <div className="mt-8 sm:mt-20 mx-5">
          <TodoList
            tasks={tasks}
            handleDoneClick={handleDoneClick}
            handleDelete={handleDeleteRequest}
            handleEdit={handleEditRequest}
          />
        </div>
      )}

      {/* Modals */}
      <ConfirmDelete
        taskToDelete={taskToDelete}
        cancelDelete={cancelDelete}
        confirmDelete={confirmDelete}
      />
      <ConfirmEdit
        taskToEdit={taskToEdit}
        cancelEdit={cancelEdit}
        confirmEdit={confirmEdit}
      />
    </div>
  );
};

export default App;
