"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900">
      {/* Header simple */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-sky-900/50">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-sky-400 transition-colors">
            TF<span className="text-sky-400">.</span>
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-sky-300 hover:text-sky-400 transition-colors">
              Accueil
            </Link>
            <Link href="/projets" className="text-sky-400 font-medium">
              Projets
            </Link>
            <Link href="/#contact" className="text-sky-300 hover:text-sky-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Section Projets */}
      <section className="pt-24 pb-20 px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white">
            Mes <span className="text-sky-400">Projets</span>
          </h1>
          <p className="text-center text-sky-200 mb-12 text-lg">
            Découvrez mes réalisations et projets personnels
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
