"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] flex items-center justify-center">
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-8">
        {/* Arrière-plan 3D */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="perspective-1000">
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
              className="transform-style-3d relative w-64 h-64"
            >
              {/* Faces du cube */}
              <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-[#050505]/5 to-[#050505]/10 border border-[#050505]/10 rotate-y-0"></div>
              <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-[#050505]/5 to-[#050505]/10 border border-[#050505]/10 rotate-y-90"></div>
              <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-[#050505]/5 to-[#050505]/10 border border-[#050505]/10 rotate-x-90"></div>
            </motion.div>
          </div>
          
          {/* Particules flottantes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#050505]/10 rounded-full"
              animate={{
                x: [0, 100, 0, -100, 0],
                y: [0, -100, 0, 100, 0],
                z: [0, 50, 0, -50, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#050505]">
            Thomas Feret
          </h1>
          
          <div className="text-xl md:text-2xl mb-4 text-[#050505]/80 h-8">
            <Typewriter
              options={{
                strings: [
                  'Développeur Web Full-stack',
                  'Expert Next.js & TypeScript',
                  'Créateur d\'interfaces modernes',
                  'Passionné Ruby on Rails',
                  'Architecte d\'applications web'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                pauseFor: 2000,
              }}
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-[#050505]/60 mb-8 max-w-2xl mx-auto"
          >
            Créateur d'applications modernes avec Next.js, TypeScript et Ruby on Rails
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link
              href="/projets"
              className="px-6 py-3 bg-[#050505] text-[#fcfcfc] text-base rounded-lg hover:bg-[#050505]/90 transition-all font-normal"
            >
              Voir mes projets
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-[#050505]/20 text-[#050505] text-base rounded-lg hover:border-[#050505]/40 hover:bg-[#f7f7f7] transition-all font-normal"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-[#050505]/20 text-[#050505] text-base rounded-lg hover:border-[#050505]/40 hover:bg-[#f7f7f7] transition-all font-normal"
            >
              Me contacter
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
