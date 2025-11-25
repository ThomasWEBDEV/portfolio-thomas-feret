"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Home() {
  const codeSnippets = [
    "const portfolio = { passion: 'infinite' };",
    "function createSolution() { return innovation; }",
    "app.use(creativity).deploy(excellence);",
    "<Component style={{ modern: true }} />",
    "SELECT * FROM skills WHERE level = 'expert';",
  ];

  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-8">
        {/* Animations de code flottant */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
          {codeSnippets.map((code, index) => (
            <motion.div
              key={index}
              initial={{ x: Math.random() * window.innerWidth, y: -50 }}
              animate={{
                y: window.innerHeight + 50,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: index * 2,
                ease: "linear",
              }}
              className="absolute text-[#050505] text-xs md:text-sm font-mono whitespace-nowrap"
            >
              {code}
            </motion.div>
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
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl mb-4 text-[#050505]/80"
          >
            Développeur Web Full-stack
          </motion.p>
          
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
            className="flex gap-4 justify-center"
          >
            <Link
              href="#projets"
              className="px-6 py-3 bg-[#050505] text-[#fcfcfc] text-base rounded-lg hover:bg-[#050505]/90 transition-all font-normal"
            >
              Voir mes projets
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border border-[#050505]/20 text-[#050505] text-base rounded-lg hover:border-[#050505]/40 hover:bg-[#f7f7f7] transition-all font-normal"
            >
              Me contacter
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section id="projets" className="py-20 px-8 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-center mb-16 text-[#050505]">
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
                className="bg-[#fcfcfc] rounded-xl p-8 border border-[#050505]/10 hover:border-[#050505]/20 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium text-[#050505]">
                    {project.title}
                  </h3>
                  <p className="text-[#050505]/70 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-[#050505]/50">
                    {project.role}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#f7f7f7] text-[#050505]/80 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[#050505] hover:text-[#050505]/70 underline underline-offset-4 text-sm">
                      Voir le projet
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#050505]/60 hover:text-[#050505] underline underline-offset-4 text-sm">
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-8 bg-[#fcfcfc]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 text-[#050505]">
            À Propos
          </h2>
          <p className="text-[#050505]/70 text-lg leading-relaxed mb-6">
            Diplômé du Wagon (RNCP niveau 6), je suis un développeur full-stack passionné par les technologies modernes.
          </p>
          <p className="text-[#050505]/70 text-lg leading-relaxed">
            Basé à Lamballe et mobile sur Rennes, je crée des applications web performantes et innovantes.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-8 bg-[#f7f7f7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 text-[#050505]">
            Contact
          </h2>
          <p className="text-lg text-[#050505]/70 mb-8">
            Vous avez un projet ? Discutons-en.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:contact@thomasferet.dev" className="px-6 py-3 bg-[#050505] text-[#fcfcfc] rounded-lg hover:bg-[#050505]/90 transition-all">
              Email
            </a>
            <a href="https://github.com/thomasferet" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-[#050505]/20 text-[#050505] rounded-lg hover:border-[#050505]/40 hover:bg-[#fcfcfc] transition-all">
              GitHub
            </a>
            <a href="https://linkedin.com/in/thomasferet" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-[#050505]/20 text-[#050505] rounded-lg hover:border-[#050505]/40 hover:bg-[#fcfcfc] transition-all">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
