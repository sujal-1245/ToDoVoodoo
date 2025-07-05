import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TodoList from "./TodoList";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const FILTERS = {
  ALL: "All",
  COMPLETED: "Completed",
  PENDING: "Pending",
};

const TODO_STORAGE_KEY = "todo-voodoo-tasks";
const THEME_STORAGE_KEY = "theme";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    try {
      const stored = localStorage.getItem(TODO_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState(FILTERS.ALL);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem(THEME_STORAGE_KEY) === "dark"
  );

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // Toggle theme and store in localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem(THEME_STORAGE_KEY, darkMode ? "dark" : "light");
  }, [darkMode]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTERS.COMPLETED) return todo.completed;
    if (filter === FILTERS.PENDING) return !todo.completed;
    return true;
  });

  return (
    <div
      id="todo"
      className={`
        min-h-screen px-6 py-12 lg:px-16
        font-inter bg-gradient-to-br 
        from-emerald-300 via-light_green-300 to-tea_green-400 
        dark:from-emerald-100 dark:via-verdigris-200 dark:to-light_green-200 
        text-gray-900 dark:text-white transition-colors duration-500 relative overflow-x-hidden
        rounded-3xl
      `}
    >
      <motion.div
        layout
        className="max-w-2xl mx-auto backdrop-blur-lg bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl shadow-[0_0_50px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)] p-6 sm:p-8"
      >
        {/* Header */}
        <div className="flex justify-center md:justify-between items-center mb-10 px-4 md:px-8">
          <motion.h1
            layout
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-lg text-center md:text-left"
          >
            TodoVoodoo🧿
          </motion.h1>
        </div>

        {/* Task Input */}
        <TaskForm setTodos={setTodos} />

        {/* Filter Tabs */}
        <motion.div
          layout
          className="flex gap-3 mt-6 text-sm font-medium justify-center"
        >
          <AnimatePresence initial={false}>
            {Object.values(FILTERS).map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-1.5 rounded-full transition border font-semibold
                  ${
                    filter === f
                      ? "bg-tekhelet-600 dark:bg-tekhelet-500 text-white border-transparent shadow"
                      : "bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/20 border-transparent"
                  }`}
              >
                {f}
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Task List */}
        <TodoList todos={filteredTodos} setTodos={setTodos} />
      </motion.div>
    </div>
  );
};

export default TodoApp;
