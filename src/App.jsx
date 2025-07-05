import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import TodoApp from "./components/TodoApp";
import Footer from "./components/Footer";
import KonamiCode from "./components/KonamiCode";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
<div className="min-h-screen font-inter bg-gradient-to-br 
  from-emerald-300 via-light_green-300 to-tea_green-400 
  dark:from-emerald-100 dark:via-verdigris-200 dark:to-light_green-200 
  text-gray-900 dark:text-white transition-colors duration-500 relative overflow-x-hidden">

      
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="px-6 py-12 lg:px-16 space-y-24">
        <Hero />
        <TodoApp />
        <KonamiCode />
        <HowItWorks />
        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default App;
