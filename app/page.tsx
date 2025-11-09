"use client";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Geometric3D from "@/components/Geometric3D";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900">
        <Geometric3D />
        <motion.div 
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center z-10"
        >
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight"
          >
            THOMAS
            <span className="block text-sky-400">FERET</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 text-sky-200 font-light"
          >
            Développeur Web Full-stack
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center"
          >
            <Link 
              href="#projets" 
              className="px-8 py-4 bg-sky-500 text-white rounded-full hover:bg-sky-400 transition-all hover:scale-105 font-medium shadow-lg shadow-sky-500/25"
            >
              Voir mes projets
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-4 border-2 border-sky-500/50 text-sky-300 rounded-full hover:border-sky-400 hover:text-sky-400 hover:bg-sky-950/30 transition-all font-medium"
            >
              Me contacter
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section id="projets" className="py-20 px-8 bg-slate-800/50 backdrop-blur">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Mes Projets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      <section id="about" className="py-20 px-8 bg-gradient-to-b from-slate-900 to-sky-950">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">À Propos</h2>
          <p className="text-sky-200 text-lg leading-relaxed">
            Diplômé du Wagon (RNCP niveau 6), je suis un développeur full-stack passionné par les technologies modernes. 
            Basé à Lamballe et mobile sur Rennes, je crée des applications web performantes et innovantes.
          </p>
        </motion.div>
      </section>

      <section id="contact" className="py-20 px-8 bg-slate-800/50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Contact</h2>
          <div className="flex gap-4 justify-center">
            <a 
              href="mailto:contact@thomasferet.dev" 
              className="px-8 py-4 bg-sky-500 text-white rounded-full hover:bg-sky-400 transition-all hover:scale-105 font-medium shadow-lg shadow-sky-500/25"
            >
              Email
            </a>
            <a 
              href="https://github.com/thomasferet" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 border-2 border-sky-500/50 text-sky-300 rounded-full hover:border-sky-400 hover:text-sky-400 hover:bg-sky-950/30 transition-all font-medium"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
