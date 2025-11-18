"use client";
import Link from "next/link";
import Geometric3D from "@/components/Geometric3D";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black"></div>
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
            className="text-7xl md:text-9xl font-bold mb-6 text-white tracking-tighter"
          >
            THOMAS
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">FERET</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl mb-4 text-gray-400 font-light"
          >
            Développeur Web Full-stack
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl mb-12 text-gray-500 max-w-2xl mx-auto"
          >
            Créateur d&apos;expériences web modernes et performantes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link
              href="#projets"
              className="px-8 py-4 bg-white text-black text-lg rounded-full hover:bg-gray-200 transition-all hover:scale-105 font-medium"
            >
              Voir mes projets
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border border-gray-700 text-white text-lg rounded-full hover:border-white hover:bg-white/10 transition-all font-medium"
            >
              Me contacter
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="py-20 px-8 bg-gradient-to-b from-black to-gray-950">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white">
            Projets <span className="text-gray-500">sélectionnés</span>
          </h2>
          <p className="text-center text-gray-500 mb-16 text-lg">
            Une sélection de mes meilleures réalisations
          </p>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {project.description}
                  </p>
                  <p className="text-gray-500">
                    {project.role}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm border border-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                                    <div className="flex gap-4 pt-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-medium"
                    >
                      Voir le projet &rarr;
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-gray-700 text-white rounded-full hover:border-white hover:bg-white/10 transition-all font-medium"
                    >
                      Code source
                    </a>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div className="relative bg-gray-900 rounded-2xl p-8 h-80 flex items-center justify-center border border-gray-800">
                      <span className="text-6xl font-bold text-gray-700">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section À Propos */}
      <section id="about" className="py-20 px-8 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-white">
            À <span className="text-gray-500">Propos</span>
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed mb-8">
            Diplômé du Wagon (RNCP niveau 6), je suis un développeur full-stack passionné par les technologies modernes.
            Basé à Lamballe et mobile sur Rennes, je crée des applications web performantes et innovantes.
          </p>
          <p className="text-gray-500 text-lg">
            Spécialisé en Next.js, TypeScript, React et Ruby on Rails
          </p>
        </motion.div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 px-8 bg-gradient-to-b from-gray-950 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-white">
            Travaillons <span className="text-gray-500">Ensemble</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Vous avez un projet ? Discutons-en !
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:contact@thomasferet.dev"
              className="px-8 py-4 bg-white text-black text-lg rounded-full hover:bg-gray-200 transition-all hover:scale-105 font-medium"
            >
              Me contacter
            </a>
            <a
              href="https://github.com/thomasferet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-700 text-white text-lg rounded-full hover:border-white hover:bg-white/10 transition-all font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/thomasferet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-700 text-white text-lg rounded-full hover:border-white hover:bg-white/10 transition-all font-medium"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
