"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypeWriter() {
  const [text, setText] = useState("");
  const fullText = "Développeur Web Full-stack";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl md:text-2xl text-gray-700 font-light">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-7 bg-gray-700 ml-1"
      />
    </div>
  );
}
