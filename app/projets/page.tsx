"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f5' }}>
      {/* Header simple */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-black hover:text-gray-600 transition-colors">
            TF
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-600 hover:text-black transition-colors">
              Accueil
            </Link>
            <Link href="/projets" className="text-black font-medium">
              Projets
            </Link>
            <Link href="/#contact" className="text-gray-600 hover:text-black transition-colors">
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
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-black">
            Mes Projets
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
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
