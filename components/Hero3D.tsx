"use client";
import { motion } from "framer-motion";

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </motion.div>
      <motion.div
        animate={{ 
          rotate: -360,
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
      </motion.div>
    </div>
  );
}
