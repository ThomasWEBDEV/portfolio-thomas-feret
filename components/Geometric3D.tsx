"use client";
import { motion } from "framer-motion";

export default function Geometric3D() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Cube 3D rotatif principal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 perspective-1000">
        <motion.div
          animate={{ 
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="transform-style-3d w-64 h-64"
        >
          <div className="absolute w-64 h-64 border-2 border-sky-400/30 bg-sky-500/10 transform rotate-y-0" />
          <div className="absolute w-64 h-64 border-2 border-sky-400/30 bg-sky-500/10 transform rotate-y-90" />
          <div className="absolute w-64 h-64 border-2 border-sky-400/30 bg-sky-500/10 transform rotate-x-90" />
        </motion.div>
      </div>

      {/* Pyramides flottantes */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4"
      >
        <div className="w-32 h-32 border-l-[60px] border-r-[60px] border-b-[100px] border-l-transparent border-r-transparent border-b-sky-400/20" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [360, 180, 0],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4"
      >
        <div className="w-32 h-32 border-l-[60px] border-r-[60px] border-b-[100px] border-l-transparent border-r-transparent border-b-sky-400/20" />
      </motion.div>

      {/* Grille de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
  );
}
