// components/HowItWorks.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiPlusCircle, FiFilter, FiMove } from "react-icons/fi";

const steps = [
  {
    icon: <FiPlusCircle />,
    title: "Add Your Tasks",
    description: "Start by capturing your thoughts. Add new tasks effortlessly with a beautiful, animated input.",
  },
  {
    icon: <FiFilter />,
    title: "Organize & Filter",
    description: "Switch views — All, Completed, Pending — and keep your workflow clear and focused.",
  },
  {
    icon: <FiMove />,
    title: "Drag, Drop, Done",
    description: "Reorder your list on the fly. Powered by @dnd-kit for ultra-smooth rearrangement.",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-extrabold mb-10 text-white"
      >
        How It Works
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white/60 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-black/10 dark:border-white/10 shadow-[0_0_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)]"
          >
            <div className="text-3xl mb-4 text-tekhelet-600 dark:text-pumpkin-500">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
              {step.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
