"use client";
import { motion } from "framer-motion";

export default function FloatingCode() {
  const codeElements = [
    { text: "</>" , x: 10, y: 15 },
    { text: "{}" , x: 85, y: 25 },
    { text: "[]" , x: 20, y: 70 },
    { text: "()" , x: 60, y: 40 },
    { text: "//" , x: 45, y: 80 },
    { text: "git", x: 90, y: 10 },
    { text: "npm", x: 15, y: 50 },
    { text: "=>" , x: 70, y: 65 },
    { text: "async", x: 30, y: 30 },
    { text: "const", x: 75, y: 45 },
    { text: ".tsx", x: 50, y: 20 },
    { text: "@", x: 40, y: 60 },
    { text: "#", x: 35, y: 45 },
    { text: "&&", x: 55, y: 35 },
    { text: "return", x: 70, y: 20 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-3xl text-black opacity-10"
          style={{ left: `${el.x}%`, top: `${el.y}%` }}
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          {el.text}
        </motion.div>
      ))}
    </div>
  );
}
