import TaskForm from "./TaskForm";
import TodoList from "./TodoList";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
} from "../api/tasks";

const FILTERS = {
  ALL: "All",
  COMPLETED: "Completed",
  PENDING: "Pending",
};

const THEME_STORAGE_KEY = "theme";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(FILTERS.ALL);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem(THEME_STORAGE_KEY) === "dark"
  );

  // Fetch from backend on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTasks();
        setTodos(data);
      } catch (error) {
        console.error("Failed to load tasks:", error);
      }
    };
    fetchData();
  }, []);

  // Theme toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem(THEME_STORAGE_KEY, darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleAdd = async (text) => {
    try {
      const newTodo = await addTask({ task: text, status: false });
      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.error("Add failed:", error);
    }
  };

  const handleToggle = async (id, status) => {
    try {
      const updated = await updateTask(id, { status });
      setTodos((prev) => prev.map((todo) => (todo._id === id ? updated : todo)));
    } catch (error) {
      console.error("Toggle failed:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTERS.COMPLETED) return todo.status;
    if (filter === FILTERS.PENDING) return !todo.status;
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

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="ml-4 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun className="text-yellow-300" /> : <FiMoon />}
          </button>
        </div>

        {/* Task Input */}
        <TaskForm onAdd={handleAdd} />

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
        <TodoList
          todos={filteredTodos}
          onToggle={(id, currentStatus) => handleToggle(id, !currentStatus)}
          onDelete={handleDelete}
        />
      </motion.div>
    </div>
  );
};

export default TodoApp;
