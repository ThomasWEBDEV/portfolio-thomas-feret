"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFA680] flex items-center justify-center pt-20">
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-8">

        {/* ARRIÈRE-PLAN 3D + PARTICULES */}
        <div className="absolute inset-0 pointer-events-none z-0">

          {/* ←←← SEULE LIGNE MODIFIÉE (décalage ÷ 2) */}
          <div className="absolute top-[50%] left-72 md:left-96 lg:left-128 perspective-1000">
            <motion.div
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative w-64 h-64 [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-[#24053A]/5 to-[#24053A]/10 border border-[#24053A]/10 [transform:rotateY(0deg)_translateZ(128px)]"></div>
              <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-[#24053A]/5 to-[#24053A]/10 border border-[#24053A]/10 [transform:rotateY(90deg)_translateZ(128px)]"></div>
              <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-[#24053A]/5 to-[#24053A]/10 border border-[#24053A]/10 [transform:rotateY(180deg)_translateZ(128px)]"></div>
              <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-[#24053A]/5 to-[#24053A]/10 border border-[#24053A]/10 [transform:rotateY(-90deg)_translateZ(128px)]"></div>
              <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-[#24053A]/5 to-[#24053A]/10 border border-[#24053A]/10 [transform:rotateX(90deg)_translateZ(128px)]"></div>
              <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-[#24053A]/5 to-[#24053A]/10 border border-[#24053A]/10 [transform:rotateX(-90deg)_translateZ(128px)]"></div>
            </motion.div>
          </div>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#24053A]/10 rounded-full"
              animate={{
                x: [0, 100, 0, -100, 0],
                y: [0, -100, 0, 100, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl w-full mx-auto lg:grid lg:grid-cols-2 lg:gap-12 items-center z-20">
          {/* Ton texte + photo → rien touché */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left p-4 lg:p-0">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-[#000000]">Thomas Feret</h1>
            <h2 className="text-xl md:text-2xl mb-6 text-[#420c65] lg:justify-start flex justify-center items-center">
              Développeur Full-stack | Next.js, TypeScript, Ruby on Rails
            </h2>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-[#000000]/70 mb-12 max-w-2xl mx-auto lg:mx-0">
              Je m'appelle Thomas Feret, développeur Full-stack passionné et basé en France. J'ai conçu et réalisé une large gamme d'applications web, allant de plateformes SaaS complexes à des interfaces utilisateurs élégantes, en utilisant principalement Next.js, TypeScript et Ruby on Rails. Mon objectif est de créer des architectures robustes et des expériences utilisateur fluides, pour des applications qui sont à la fois puissantes et agréables à utiliser.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
              className="flex gap-6 justify-center lg:justify-start flex-wrap">
              <Link href="/projets" className="px-10 py-5 bg-transparent text-[#24053A] border-2 border-[#24053A] text-lg md:text-xl rounded-2xl hover:bg-[#24053A] hover:text-[#EBB2FF] hover:scale-105 transition-all font-semibold whitespace-nowrap shadow-md">Voir mes projets</Link>
              <Link href="/about" className="px-10 py-5 bg-transparent text-[#24053A] border-2 border-[#24053A] text-lg md:text-xl rounded-2xl hover:bg-[#24053A] hover:text-[#EBB2FF] hover:scale-105 transition-all font-semibold whitespace-nowrap shadow-md">À propos</Link>
              <Link href="/contact" className="px-10 py-5 bg-transparent text-[#24053A] border-2 border-[#24053A] text-lg md:text-xl rounded-2xl hover:bg-[#24053A] hover:text-[#EBB2FF] hover:scale-105 transition-all font-semibold whitespace-nowrap shadow-md flex items-center gap-2 group">
                    <span>Me contacter</span>
                    {/* Icône enveloppe/message (SVG inline) */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#EBB2FF]"
                    >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block p-4">
            <img src="https://boldist.co/wp-content/uploads/2020/11/Laughing-Samurai-Pros-and-Cons-of-Using-Animations-in-Your-Web-Design-1024x711.jpg" alt="Thomas Feret"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition duration-500"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/1024x711/24053A/EBB2FF?text=Thomas+Feret'; }}
            />
          </motion.div>
        </div>

      </section>
    </main>
  );
}
