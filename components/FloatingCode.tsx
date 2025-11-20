"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingCode() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const codeElements = [
    { text: "</>" , size: "text-3xl", duration: 20, x: "10%", y: "20%" },
    { text: "{...}", size: "text-2xl", duration: 25, x: "80%", y: "30%" },
    { text: "const", size: "text-xl", duration: 30, x: "70%", y: "70%" },
    { text: "=>" , size: "text-2xl", duration: 22, x: "20%", y: "60%" },
    { text: "[ ]", size: "text-3xl", duration: 28, x: "90%", y: "10%" },
    { text: "async", size: "text-lg", duration: 35, x: "30%", y: "80%" },
    { text: "()", size: "text-2xl", duration: 24, x: "60%", y: "40%" },
    { text: "import", size: "text-xl", duration: 32, x: "15%", y: "35%" },
    { text: ".tsx", size: "text-lg", duration: 26, x: "85%", y: "55%" },
    { text: "@", size: "text-3xl", duration: 30, x: "40%", y: "15%" },
    { text: "//", size: "text-2xl", duration: 27, x: "25%", y: "45%" },
    { text: "git", size: "text-xl", duration: 33, x: "75%", y: "85%" }
  ];

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute font-mono text-gray-200/20 ${element.size}`}
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -30, 0],
            rotateY: [0, 360],
            rotateZ: [-5, 5, -5],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        >
          {element.text}
        </motion.div>
      ))}

      {/* Particules de code subtiles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-gray-300/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-100, -200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear",
          }}
        />
      ))}

      {/* Grille perspective 3D */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          transform: "perspective(500px) rotateX(60deg) scale(2)",
          transformOrigin: "center bottom",
        }}
      />
    </div>
  );
}
