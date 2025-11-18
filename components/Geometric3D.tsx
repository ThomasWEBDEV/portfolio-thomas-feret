"use client";
import { motion } from "framer-motion";

export default function Geometric3D() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grille de points animés */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Lignes géométriques animées */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1="10%" y1="10%" x2="30%" y2="30%"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="70%" y1="20%" x2="90%" y2="40%"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        <motion.line
          x1="20%" y1="70%" x2="40%" y2="90%"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
      </svg>

      {/* Cercles concentriques */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-96 h-96 border border-white/5 rounded-full" />
        <div className="absolute inset-8 border border-white/10 rounded-full" />
        <div className="absolute inset-16 border border-white/5 rounded-full" />
      </motion.div>
    </div>
  );
}
