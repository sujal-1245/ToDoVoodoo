// components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative z-10 px-6 py-10 mt-20 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-black/10 dark:border-white/10 shadow-[0_0_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)] py-6 px-6 sm:px-12"
      >
        <p className="text-sm text-gray-700 dark:text-gray-300 flex justify-center items-center gap-1">
          Made with <FiHeart className="text-red-500 mx-1 inline" /> by&nbsp;
          <a
            href="https://github.com/sujalbhagat"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dashed underline-offset-4 hover:text-blue-500 transition"
          >
            Sujal Bhagat
          </a>
        </p>

        <div className="mt-4 flex justify-center space-x-4 text-lg text-gray-800 dark:text-white">
          <a
            href="https://github.com/sujal-1245"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} TodoVoodoo. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
