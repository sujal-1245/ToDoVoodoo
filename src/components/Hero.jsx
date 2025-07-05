import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToTodo = () => {
    const section = document.getElementById("todo");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative text-center max-w-4xl mx-auto px-4 sm:px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-light_green-400 to-verdigris-400 text-white  bg-clip-text drop-shadow-[0_4px_20px_rgba(88,255,200,0.4)]"
      >
        Tame Your Chaos with <span className="whitespace-nowrap">TodoVoodoo </span> 🧿
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto"    >
        Beautifully designed. Magically organized. Your tasks, your world — under your spell.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10 px-8 py-10 bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-[0_10px_60px_rgba(88,255,200,0.15)] dark:shadow-[0_10px_60px_rgba(88,255,200,0.08)]"
      >
        <p className="text-md sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
          Whether you're slaying deadlines or dodging distractions, TodoVoodoo is the enchanted canvas
          for your productivity. Light. Dark. Glass. Magic — all at your fingertips.
        </p>

        <motion.button
          onClick={scrollToTodo}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-block px-8 py-3 text-white font-bold text-lg rounded-full transition-all backdrop-blur-md shadow-lg bg-gradient-to-r from-emerald-400 via-light_green-400 to-verdigris-400 hover:brightness-125"
        >
          Cast Your First Task 🪄
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
