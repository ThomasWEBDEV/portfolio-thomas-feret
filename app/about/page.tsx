"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  const skills = {
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Ruby on Rails", "Node.js", "PostgreSQL", "API REST"],
    tools: ["Git", "GitHub", "Docker", "Vercel", "Heroku"]
  };

  return (
    <main className="min-h-screen bg-[#fcfcfc] pt-20">
      <section className="py-20 px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#050505]">
            À Propos
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-[#f7f7f7] rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-medium mb-4 text-[#050505]">Mon Parcours</h2>
              <p className="text-[#050505]/70 leading-relaxed mb-4">
                Diplômé du Wagon avec une certification RNCP niveau 6, je suis un développeur full-stack 
                passionné par la création d'applications web modernes et performantes.
              </p>
              <p className="text-[#050505]/70 leading-relaxed">
                Ma formation intensive m'a permis de maîtriser les technologies les plus demandées 
                du marché et de développer une approche pragmatique du développement web.
              </p>
            </div>

            <div className="bg-white border border-[#050505]/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-medium mb-4 text-[#050505]">Localisation</h2>
              <p className="text-[#050505]/70 leading-relaxed">
                Basé à <span className="font-medium text-[#050505]">Lamballe</span>, je suis également 
                mobile sur <span className="font-medium text-[#050505]">Rennes</span> et sa région pour 
                des opportunités professionnelles.
              </p>
            </div>

            <div className="bg-[#f7f7f7] rounded-xl p-8">
              <h2 className="text-2xl font-medium mb-6 text-[#050505]">Compétences</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-[#050505]">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-[#fcfcfc] text-[#050505]/80 rounded-lg text-sm border border-[#050505]/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 text-[#050505]">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-[#fcfcfc] text-[#050505]/80 rounded-lg text-sm border border-[#050505]/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 text-[#050505]">Outils</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-[#fcfcfc] text-[#050505]/80 rounded-lg text-sm border border-[#050505]/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
