"use client";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import FloatingCode from "@/components/FloatingCode";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#faf9f5" }}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden" style={{ backgroundColor: "#faf9f5" }}>
        <FloatingCode />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center z-10"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-7xl md:text-8xl font-medium mb-6 text-black tracking-tight"
          >
            Thomas Feret
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl mb-8 text-gray-700 font-light"
          >
            Développeur Web Full-stack
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link
              href="#projets"
              className="px-6 py-3 bg-black text-white text-base rounded-lg hover:bg-gray-800 transition-all font-normal"
            >
              Voir mes projets
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border border-gray-400 text-black text-base rounded-lg hover:border-gray-600 hover:bg-white/50 transition-all font-normal"
            >
              Me contacter
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="py-20 px-8" style={{ backgroundColor: "#faf9f5" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-center mb-16 text-black">
            Projets
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium text-black">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {project.role}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4">
                    
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-600 underline underline-offset-4 text-sm"
                    >
                      Voir le projet
                    </a>
                    
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black underline underline-offset-4 text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section À Propos */}
      <section id="about" className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 text-black">
            À Propos
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Diplômé du Wagon (RNCP niveau 6), je suis un développeur full-stack passionné par les technologies modernes.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Basé à Lamballe et mobile sur Rennes, je crée des applications web performantes et innovantes.
          </p>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 px-8" style={{ backgroundColor: "#faf9f5" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 text-black">
            Contact
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Vous avez un projet ? Discutons-en.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            
              href="mailto:contact@thomasferet.dev"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
            >
              Email
            </a>
            
              href="https://github.com/thomasferet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-400 text-black rounded-lg hover:border-gray-600 hover:bg-white/50 transition-all"
            >
              GitHub
            </a>
            
              href="https://linkedin.com/in/thomasferet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-400 text-black rounded-lg hover:border-gray-600 hover:bg-white/50 transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
