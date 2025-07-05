import React, { useState } from "react";

const TodoInput = ({ setTodos }) => {
  const [task, setTask] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = task.trim();
    if (!trimmed) return;

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
    setTask("");
  };

  return (
    <form
      onSubmit={handleAdd}
      className="flex items-center gap-4 px-4 py-3 rounded-xl border bg-white/30 dark:bg-white/5 border-white/10 dark:border-white/10 backdrop-blur-lg shadow-lg transition"
    >
      <input
        type="text"
        placeholder="What needs to be done?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 bg-transparent placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white focus:outline-none text-base"
      />
      <button
        type="submit"
        className="px-5 py-2 rounded-lg font-semibold text-sm bg-french_violet-600 hover:bg-french_violet-700 text-white shadow transition"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
