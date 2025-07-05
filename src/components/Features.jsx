// components/Features.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiCheckSquare,
  FiFilter,
  FiMoon,
  FiSun,
  FiEdit3,
  FiZap,
} from "react-icons/fi";

const features = [
  {
    icon: <FiCheckSquare />,
    title: "Glass UI",
    description:
      "Aesthetic glassmorphism with smooth gradients and subtle blur effects — beautiful in light and dark.",
  },
  {
    icon: <FiFilter />,
    title: "Filter with Style",
    description:
      "Switch between All, Completed, or Pending tasks using animated tab filters. Organized chaos.",
  },
  {
    icon: <FiEdit3 />,
    title: "Add, Edit & Animate",
    description:
      "Every task interaction is wrapped in slick animations — from adding to editing and deleting.",
  },
  {
    icon: <FiZap />,
    title: "Drag to Reorder",
    description:
      "Move tasks around like magic with buttery-smooth drag-and-drop using @dnd-kit.",
  },
  {
    icon: <FiSun />,
    title: "Light Mode",
    description:
      "Crisp and clean with warm neutral tones and soft glass edges. Productivity never looked so calm.",
  },
  {
    icon: <FiMoon />,
    title: "Dark Mode",
    description:
      "Velvety shadows, vivid neons, and perfectly tuned contrast. For late nights and cool minds.",
  },
];

const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/60 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-black/10 dark:border-white/10 shadow-[0_0_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)]"
  >
    <div className="text-2xl text-tekhelet-600 dark:text-pumpkin-500 mb-3">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
    <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section className="max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-extrabold mb-10 text-white"
      >
        Features That Cast the Spell
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 sm:px-0">
        {features.map((feature, index) => (
          <FeatureCard key={index} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
