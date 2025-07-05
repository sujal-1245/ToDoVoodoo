import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <motion.header
      layout
      className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-8 py-4
                 backdrop-blur-xl bg-white/60 dark:bg-black/20
                 border-b border-black/10 dark:border-white/10 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent 
                     bg-gradient-to-r from-lapis_lazuli-500 via-verdigris-500 to-emerald-500 
                     dark:from-light_green-400 dark:via-verdigris-300 dark:to-emerald-300 
                     drop-shadow-[0_2px_10px_rgba(56,163,165,0.4)]">
        ✔  TodoVoodo  
      </h1>

      <motion.button
        onClick={() => setDarkMode((prev) => !prev)}
        whileTap={{ scale: 0.85 }}
        className="text-xl p-2 rounded-full 
                   backdrop-blur-md bg-lapis_lazuli-100/20 dark:bg-white/10 
                   hover:ring-2 hover:ring-tea_green-300 dark:hover:ring-light_green-400 
                   transition duration-300"
        aria-label="Toggle Theme"
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </motion.button>
    </motion.header>
  );
};

export default Header;
