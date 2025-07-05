// src/components/SortableItem.jsx
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { motion } from "framer-motion";
import { CSS } from "@dnd-kit/utilities";
import { FiEdit2, FiTrash2, FiCheck } from "react-icons/fi";

export function SortableItem({
  todo,
  editingId,
  editedText,
  setEditingId,
  setEditedText,
  toggleComplete,
  handleEditSubmit,
  handleDelete,
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <motion.li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <motion.div
        layout
        className={`flex items-center justify-between gap-4 p-4 rounded-xl border backdrop-blur-lg shadow-md transition-all ${
          todo.completed
            ? "bg-white/10 dark:bg-white/5 border-tekhelet-600/30 text-gray-400"
            : "bg-white/20 dark:bg-white/10 border-amethyst/40 text-gray-900 dark:text-white"
        }`}
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-center gap-3 flex-1">
          <motion.input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="h-5 w-5 accent-amethyst cursor-pointer"
            whileTap={{ scale: 0.9 }}
          />

          {editingId === todo.id ? (
            <motion.input
              type="text"
              className="flex-1 bg-transparent border-b border-amethyst focus:outline-none text-base text-gray-800 dark:text-white placeholder:text-gray-400"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onBlur={handleEditSubmit}
              onKeyDown={(e) =>
                e.key === "Enter" && handleEditSubmit()
              }
              autoFocus
              layout
            />
          ) : (
            <motion.span
              layout
              className={`flex-1 break-words font-medium transition-colors duration-300 ${
                todo.completed
                  ? "line-through text-gray-400"
                  : "text-orange_peel-500 dark:text-orange_peel-600"
              }`}
            >
              {todo.text}
            </motion.span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {editingId === todo.id ? (
            <motion.button
              onClick={handleEditSubmit}
              className="text-green-500 hover:text-green-400 transition"
              whileTap={{ scale: 0.9 }}
              title="Save"
            >
              <FiCheck size={18} />
            </motion.button>
          ) : (
            <motion.button
              onClick={() => {
                setEditingId(todo.id);
                setEditedText(todo.text);
              }}
              className="text-yellow-400 hover:text-yellow-300 transition"
              whileTap={{ scale: 0.9 }}
              title="Edit"
            >
              <FiEdit2 size={18} />
            </motion.button>
          )}

          <motion.button
            onClick={handleDelete}
            className="text-red-400 hover:text-red-300 transition"
            whileTap={{ scale: 0.9 }}
            title="Delete"
          >
            <FiTrash2 size={18} />
          </motion.button>
        </div>
      </motion.div>
    </motion.li>
  );
}
