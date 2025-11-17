"use client";
import Link from "next/link";
import Geometric3D from "@/components/Geometric3D";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900">
      {/* Hero Section Plein Écran */}
      <section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
        <Geometric3D />
        
        <motion.div 
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center z-10"
        >
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-7xl md:text-9xl font-bold mb-6 text-white tracking-tight"
          >
            THOMAS
            <span className="block text-sky-400">FERET</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl mb-4 text-sky-200 font-light"
          >
            Développeur Web Full-stack
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl mb-12 text-sky-300/70 max-w-2xl mx-auto"
          >
            Créateur d'expériences web modernes et performantes
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 justify-center flex-wrap"
          >
            <Link 
              href="/projets" 
              className="px-10 py-5 bg-sky-500 text-white text-lg rounded-full hover:bg-sky-400 transition-all hover:scale-105 font-medium shadow-lg shadow-sky-500/25"
            >
              Découvrir mes projets
            </Link>
            <Link 
              href="#about" 
              className="px-10 py-5 border-2 border-sky-500/50 text-sky-300 text-lg rounded-full hover:border-sky-400 hover:text-sky-400 hover:bg-sky-950/30 transition-all font-medium"
            >
              En savoir plus
            </Link>
          </motion.div>

          {/* Indicateur scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1 },
              y: { repeat: Infinity, duration: 2 }
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Section À Propos */}
      <section id="about" className="min-h-screen flex items-center justify-center p-8 bg-slate-900/50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-white">
            À <span className="text-sky-400">Propos</span>
          </h2>
          <p className="text-sky-200 text-xl leading-relaxed mb-8">
            Diplômé du Wagon (RNCP niveau 6), je suis un développeur full-stack passionné par les technologies modernes. 
            Basé à Lamballe et mobile sur Rennes, je crée des applications web performantes et innovantes.
          </p>
          <p className="text-sky-300/70 text-lg mb-12">
            Spécialisé en Next.js, TypeScript, React et Ruby on Rails
          </p>
          <Link 
            href="/projets" 
            className="inline-block px-8 py-4 bg-sky-500/20 border border-sky-500/50 text-sky-300 rounded-full hover:bg-sky-500/30 hover:border-sky-400 transition-all"
          >
            Voir mes réalisations →
          </Link>
        </motion.div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-slate-900 to-sky-950">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-white">
            Travaillons <span className="text-sky-400">Ensemble</span>
          </h2>
          <p className="text-xl text-sky-200 mb-12">
            Vous avez un projet ? Discutons-en !
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href="mailto:contact@thomasferet.dev" 
              className="px-10 py-5 bg-sky-500 text-white text-lg rounded-full hover:bg-sky-400 transition-all hover:scale-105 font-medium shadow-lg shadow-sky-500/25"
            >
              Me contacter par email
            </a>
            <a 
              href="https://github.com/thomasferet" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-10 py-5 border-2 border-sky-500/50 text-sky-300 text-lg rounded-full hover:border-sky-400 hover:text-sky-400 hover:bg-sky-950/30 transition-all font-medium"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/thomasferet" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-10 py-5 border-2 border-sky-500/50 text-sky-300 text-lg rounded-full hover:border-sky-400 hover:text-sky-400 hover:bg-sky-950/30 transition-all font-medium"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
