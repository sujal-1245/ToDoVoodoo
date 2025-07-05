import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

const TaskForm = ({ setTodos }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    setTodos((prev) => [
      {
        id: crypto.randomUUID(),
        text: trimmed,
        completed: false,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
    setText("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex gap-3 mt-4 p-4 rounded-xl backdrop-blur-md border border-white/10 bg-white/20 dark:bg-white/5 shadow-lg"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind Today?"
        className="flex-1 px-4 py-2 rounded-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border border-violet-500/50 focus:border-french_violet-500 focus:outline-none transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      />

      <motion.button
        type="submit"
        disabled={!text.trim()}
        className="bg-french_violet-500 hover:bg-tekhelet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-4 py-2 rounded-lg shadow-md transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Add Task"
      >
        <FiPlus size={20} />
      </motion.button>
    </motion.form>
  );
};

export default TaskForm;
