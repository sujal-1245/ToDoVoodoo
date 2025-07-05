import React from "react";
import { motion } from "framer-motion";

export default function Blobs() {
  return (
    <motion.div className="absolute inset-0 -z-10">
      {[
        { size:200, blur:50, x:-100, y:-50, color:"orange_peel/50" },
        { size:300, blur:80, x:200, y:100, color:"french_violet/60" },
      ].map((b,i) => (
        <motion.div key={i}
          style={{filter:`blur(${b.blur}px)`}}
          className={`absolute bg-${b.color} rounded-full`}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:i*0.5, repeat:Infinity, repeatType:"reverse", duration:4}}
          
          variants={{}}
          // tailwind doesn't support dynamic styles; embed inline:
          // would need inline style for background
        />
      ))}
    </motion.div>
  );
}
