import React, { useState, useEffect } from "react";
import { FiEdit2, FiTrash2, FiCheck, FiMove } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ todo, children, dragOverlay = false }) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
    isOver,
  } = useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 999 : undefined,
    opacity: isDragging ? 0.5 : 1,
    scale: isOver ? 1.03 : 1,
  };

  return (
    <motion.li
      ref={setNodeRef}
      style={style}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      layout
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      {children({ listeners, attributes })}
    </motion.li>
  );
};

const TodoList = ({ todos, setTodos }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("todo-voodoo-tasks");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todo-voodoo-tasks", JSON.stringify(todos));
  }, [todos]);

  const sensors = useSensors(useSensor(PointerSensor));

  const toggleComplete = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditedText(currentText);
  };

  const handleEditSubmit = (id) => {
    const trimmed = editedText.trim();
    if (!trimmed) return;
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: trimmed } : t))
    );
    resetEdit();
  };

  const resetEdit = () => {
    setEditingId(null);
    setEditedText("");
  };

  const handleDelete = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;
    const oldIndex = todos.findIndex((t) => t.id === active.id);
    const newIndex = todos.findIndex((t) => t.id === over.id);
    setTodos((prev) => {
      const reordered = [...prev];
      const [moved] = reordered.splice(oldIndex, 1);
      reordered.splice(newIndex, 0, moved);
      return reordered;
    });
  };

  if (todos.length === 0) {
    return (
      <motion.p
        className="mt-8 text-center text-gray-500 dark:text-gray-400 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        No tasks yet. Add one to get started!
      </motion.p>
    );
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={todos.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        <ul className="mt-6 space-y-4">
          <AnimatePresence initial={false}>
            {todos.map((todo) => (
              <SortableItem key={todo.id} todo={todo}>
                {({ listeners, attributes }) => (
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
                          onBlur={() => handleEditSubmit(todo.id)}
                          onKeyDown={(e) => e.key === "Enter" && handleEditSubmit(todo.id)}
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
                      {/* Drag Handle */}
                      <motion.button
                        {...listeners}
                        {...attributes}
                        className="text-gray-500 hover:text-gray-400 cursor-grab active:cursor-grabbing transition"
                        whileTap={{ scale: 0.9 }}
                        title="Drag to reorder"
                      >
                        <FiMove size={18} />
                      </motion.button>

                      {editingId === todo.id ? (
                        <motion.button
                          onClick={() => handleEditSubmit(todo.id)}
                          className="text-green-500 hover:text-green-400 transition"
                          whileTap={{ scale: 0.9 }}
                          title="Save"
                        >
                          <FiCheck size={18} />
                        </motion.button>
                      ) : (
                        <motion.button
                          onClick={() => handleEdit(todo.id, todo.text)}
                          className="text-yellow-400 hover:text-yellow-300 transition"
                          whileTap={{ scale: 0.9 }}
                          title="Edit"
                        >
                          <FiEdit2 size={18} />
                        </motion.button>
                      )}

                      <motion.button
                        onClick={() => handleDelete(todo.id)}
                        className="text-red-400 hover:text-red-300 transition"
                        whileTap={{ scale: 0.9 }}
                        title="Delete"
                      >
                        <FiTrash2 size={18} />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </SortableItem>
            ))}
          </AnimatePresence>
        </ul>
      </SortableContext>
    </DndContext>
  );
};

export default TodoList;
