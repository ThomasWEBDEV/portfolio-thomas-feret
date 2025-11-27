"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function ContactPage() {
  const contactLinks = [
    {
      name: "Email",
      href: "mailto:contact@thomasferet.dev",
      icon: Mail,
      description: "contact@thomasferet.dev"
    },
    {
      name: "GitHub",
      href: "https://github.com/thomasferet",
      icon: Github,
      description: "github.com/thomasferet"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/thomasferet",
      icon: Linkedin,
      description: "linkedin.com/in/thomasferet"
    },
    {
      name: "CV",
      href: "/cv-thomas-feret.pdf",
      icon: FileText,
      description: "Télécharger mon CV"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fcfcfc] pt-20">
      <section className="py-20 px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-[#050505]">
            Contact
          </h1>
          <p className="text-center text-[#050505]/60 mb-12 text-lg">
            Vous avez un projet ? Discutons-en !
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "CV" ? "_blank" : undefined}
                  rel={link.name !== "CV" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-[#050505]/10 rounded-xl p-6 hover:border-[#050505]/20 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#f7f7f7] rounded-lg group-hover:bg-[#050505] transition-colors">
                      <Icon className="w-6 h-6 text-[#050505] group-hover:text-[#fcfcfc]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-[#050505] mb-1">
                        {link.name}
                      </h3>
                      <p className="text-sm text-[#050505]/60">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center bg-[#f7f7f7] rounded-xl p-8"
          >
            <h2 className="text-2xl font-medium mb-4 text-[#050505]">
              Disponible pour vos projets
            </h2>
            <p className="text-[#050505]/70 max-w-2xl mx-auto">
              Je suis actuellement à la recherche de nouvelles opportunités. 
              N'hésitez pas à me contacter pour discuter de votre projet ou 
              pour toute collaboration potentielle.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
