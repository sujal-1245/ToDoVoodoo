// components/KonamiCode.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI_SEQUENCE = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a"
];

const KonamiCode = () => {
  const [input, setInput] = useState([]);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setInput((prev) => {
        const next = [...prev, e.key].slice(-KONAMI_SEQUENCE.length);
        if (next.join("") === KONAMI_SEQUENCE.join("")) {
          setActivated(true);
          setTimeout(() => setActivated(false), 4000);
        }
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 text-3xl select-none pointer-events-none"
        >
          🧙‍♂️✨
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KonamiCode;
