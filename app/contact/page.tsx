"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  const contactLinks = [
    {
      name: "Email",
      href: "mailto:thomas.feret@hotmail.fr",
      icon: "mail",
      description: "thomas.feret@hotmail.fr"
    },
    {
      name: "GitHub",
      href: "https://github.com/ThomasWEBDEV",
      icon: "github",
      description: "github.com/ThomasWEBDEV"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/thomas-feret-dev",
      icon: "linkedin",
      description: "linkedin.com/in/thomas-feret-dev"
    },
    {
      name: "CV",
      href: "/cv/CV-Thomas-Feret.pdf",
      icon: "cv",
      description: "Télécharger mon CV",
      download: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-[#203270]/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#203270] hover:text-[#e15e4c] transition-colors font-roboto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Retour</span>
          </Link>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#203270] mb-6 font-roboto">
            Contactez-moi
          </h1>
          <p className="text-[#203270]/70 text-xl font-roboto leading-relaxed">
            Prêt à apporter mes compétences et mon engagement à votre entreprise.
          </p>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noopener noreferrer"}
              download={link.download}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border-2 border-[#203270]/10 rounded-xl p-6 hover:border-[#e15e4c]/50 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#203270]/5 rounded-lg group-hover:bg-[#e15e4c] transition-colors">
                  {link.icon === "mail" && (
                    <svg className="w-6 h-6 text-[#203270] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  )}
                  {link.icon === "github" && (
                    <svg className="w-6 h-6 text-[#203270] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {link.icon === "linkedin" && (
                    <svg className="w-6 h-6 text-[#203270] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )}
                  {link.icon === "cv" && (
                    <svg className="w-6 h-6 text-[#203270] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#203270] mb-1 group-hover:text-[#e15e4c] transition-colors font-roboto">
                    {link.name}
                  </h3>
                  <p className="text-sm text-[#203270]/60 font-roboto">
                    {link.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-8 pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-br from-[#e15e4c]/5 to-[#203270]/5 border-2 border-[#e15e4c]/20 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-[#203270] mb-4 font-roboto">
            Disponible immédiatement
          </h2>
          <p className="text-[#203270]/80 font-roboto leading-relaxed max-w-2xl mx-auto mb-6">
            En recherche active d'opportunités CDI ou freelance sur Rennes et la région parisienne.
            Je réponds généralement sous 24h à tous les messages professionnels.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#203270]/70 font-roboto">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#e15e4c]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Réponse rapide
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#e15e4c]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Disponibilité immédiate
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#e15e4c]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Mobile Rennes/Paris
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
