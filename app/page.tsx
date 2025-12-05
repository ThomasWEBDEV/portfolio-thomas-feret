"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navLinks = [
    { href: "#about", label: "ABOUT", description: "En savoir plus sur moi" },
    { href: "#experience", label: "EXPERIENCE", description: "Mon parcours professionnel" },
    { href: "#projects", label: "PROJECTS", description: "Mes réalisations" },
  ];

  const projects = [
    {
      id: 1,
      title: "Plateforme SaaS Éducative",
      description: "Développement full-stack d'une application d'apprentissage avec gestion des utilisateurs et API RESTful. Interface moderne avec Next.js et TypeScript.",
      image: "https://placehold.co/400x200/203270/eae8da?text=SaaS+Platform",
      link: "#",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      stars: "1.2k"
    },
    {
      id: 2,
      title: "Application E-commerce",
      description: "Site e-commerce complet avec panier, paiement Stripe, et gestion des commandes. Design responsive et optimisé pour les mobiles.",
      image: "https://placehold.co/400x200/203270/eae8da?text=E-commerce",
      link: "#",
      tags: ["React", "Node.js", "Stripe"],
      stars: "856"
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Dashboard de visualisation de données en temps réel avec graphiques interactifs et filtres avancés.",
      image: "https://placehold.co/400x200/203270/eae8da?text=Dashboard",
      link: "#",
      tags: ["Vue.js", "D3.js", "Firebase"],
      stars: "634"
    },
  ];

  const socialLinks = [
    { href: "https://github.com/ThomasWEBDEV", icon: "github", label: "GitHub" },
    { href: "https://www.linkedin.com/in/thomas-feret-dev", icon: "linkedin", label: "LinkedIn" },
    { href: "mailto:thomas.feret@hotmail.fr", icon: "mail", label: "Email" }, // C'est ici que l'icône mail est liée
  ];

  return (
    <div className="min-h-screen bg-[#203270] flex justify-center max-w-7xl mx-auto px-8">

      {/* COLONNE GAUCHE - FIXE */}
      <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between pt-16 lg:pt-32 py-12 lg:pr-12 relative overflow-hidden px-4 lg:px-0">

        {/* Cube 3D en arrière-plan */}
        <div className="absolute top-1/4 left-1/4 pointer-events-none opacity-30 hidden lg:block">
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
            className="relative w-32 h-32 [transform-style:preserve-3d]"
          >
            <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-[#e15e4c]/5 to-[#e15e4c]/10 border border-[#e15e4c]/10 [transform:rotateY(0deg)_translateZ(64px)]"></div>
            <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-[#e15e4c]/5 to-[#e15e4c]/10 border border-[#e15e4c]/10 [transform:rotateY(90deg)_translateZ(64px)]"></div>
            <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-[#e15e4c]/5 to-[#e15e4c]/10 border border-[#e15e4c]/10 [transform:rotateY(180deg)_translateZ(64px)]"></div>
            <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-[#e15e4c]/5 to-[#e15e4c]/10 border border-[#e15e4c]/10 [transform:rotateY(-90deg)_translateZ(64px)]"></div>
            <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-[#e15e4c]/5 to-[#e15e4c]/10 border border-[#e15e4c]/10 [transform:rotateX(90deg)_translateZ(64px)]"></div>
            <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-[#e15e4c]/5 to-[#e15e4c]/10 border border-[#e15e4c]/10 [transform:rotateX(-90deg)_translateZ(64px)]"></div>
          </motion.div>
        </div>

        {/* Contenu principal */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-[#eae8da] mb-2 font-vend-sans">
              Thomas Feret
            </h1>
            <h2 className="text-xl text-[#eae8da] mb-6 font-roboto font-medium">
              Développeur Full-stack
            </h2>
            <p className="text-[#eae8da]/70 text-base mb-12 max-w-sm font-roboto leading-relaxed">
              Je crée des expériences web accessibles et élégantes qui vivent sur internet.
            </p>
          </motion.div>

          {/* Navigation avec tirets */}
          <nav className="space-y-6 mb-16">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-center gap-4 cursor-pointer"
                >
                  {/* Tiret qui s'agrandit */}
                  <motion.div
                    className="h-px bg-[#eae8da]"
                    animate={{
                      width: hoveredLink === link.href ? "4rem" : "2rem"
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div>
                    <span className={`text-sm font-bold tracking-widest font-roboto transition-colors duration-300 ${
                      hoveredLink === link.href ? "text-[#eae8da]" : "text-[#eae8da]/50"
                    }`}>
                      {link.label}
                    </span>

                    {/* Mini description */}
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredLink === link.href ? 1 : 0,
                        height: hoveredLink === link.href ? "auto" : 0
                      }}
                      className="text-xs text-[#eae8da]/60 mt-1 font-roboto overflow-hidden"
                    >
                      {link.description}
                    </motion.p>
                  </div>
                </motion.div>
              </a>
            ))}
          </nav>

          {/* Réseaux sociaux */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#eae8da]/50 hover:text-[#e15e4c] transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon === "github" && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )}
                {social.icon === "linkedin" && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                )}
                {social.icon === "mail" && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Image en bas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 mt-8 w-full h-64 lg:h-96"
        >
          <Image
            src="/images/logo1.jpg"
            alt="Thomas Feret"
            fill
            className="rounded-2xl object-cover opacity-60"
          />
        </motion.div>
      </div>

      {/* COLONNE DROITE - SCROLLABLE */}
      <div className="w-full lg:w-1/2 lg:ml-auto overflow-y-auto px-4 lg:pl-12 pt-8 lg:pt-32 pb-16 relative">

        {/* Effet de lueur qui suit la souris - uniquement sur la partie droite */}
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(225, 94, 76, 0.15), transparent 80%)`,
            clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
          }}
        />

        {/* Section About */}
        <section id="about" className="mb-32 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[#eae8da]/70 text-base leading-relaxed mb-4 font-roboto">
              Développeur web passionné, je me consacre chaque jour à la création d’applications performantes et intuitives. Mon aventure a commencé avec une formation intensive au Wagon (RNCP niveau 6), un bootcamp de 6 mois que j’ai suivi à temps plein, bien au-delà des attentes, pour maîtriser les fondamentaux et me perfectionner.
            </p>
            <p className="text-[#eae8da]/70 text-base leading-relaxed mb-4 font-roboto">
              Depuis près d’un an, j’approfondis mes compétences sur l’ensemble de la stack moderne : React, Next.js, TypeScript, Ruby on Rails et Node.js. Toujours en quête d’apprentissage, j’explore sans cesse de nouveaux frameworks et outils, poussé par une curiosité insatiable pour chaque facette du monde numérique.
            </p>
            <p className="text-[#eae8da]/70 text-base leading-relaxed mb-4 font-roboto">
              Mon engagement et ma rigueur me permettent de livrer des interfaces élégantes, accessibles et optimisées. Basé en Bretagne et mobile sur Rennes et sa périphérie, je suis disponible pour des projets ambitieux en freelance ou en CDI, au service d’équipes dynamiques et motivées.
            </p>
            <p className="text-[#eae8da]/70 text-base leading-relaxed font-roboto">
              En dehors des écrans, je cultive mon équilibre en pratiquant divers sports, en profitant de moments complices avec ma conjointe et en emmenant souvent mon chien découvrir les plages bretonnes.
            </p>
          </motion.div>
        </section>


        {/* Section Experience */}
        <section id="experience" className="mb-32 scroll-mt-32">
          <h3 className="text-[#eae8da] text-sm font-bold tracking-widest mb-8 font-roboto">PARCOURS</h3>
          <div className="space-y-12">
            {[
              {
                year: "SEPT — DÉC 2025",
                title: "Spécialisation Back-End Autonome",
                company: "Formation Continue",
                description: "Approfondissement des technologies back-end modernes avec Node.js, TypeScript et Express. Développement d'applications web full-stack et architecture serveur.",
                tags: ["Node.js", "TypeScript", "Express"]
              },
              {
                year: "AOÛT 2025",
                title: "Titre RNCP Niveau 6",
                company: "Concepteur Développeur d'Applications",
                description: "Certification professionnelle validant les compétences en conception et développement d'applications web complètes.",
                tags: ["RNCP 6", "Full-stack", "Architecture"]
              },
              {
                year: "FÉV — AOÛT 2025",
                title: "Formation Développeur Web Full-stack",
                company: "Le Wagon",
                description: "Bootcamp intensif de développement web. Apprentissage des fondamentaux du développement full-stack et réalisation de projets concrets en équipe.",
                tags: ["Ruby on Rails", "JavaScript", "React"]
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-1">
                    <p className="text-xs text-[#eae8da]/50 font-roboto font-semibold tracking-wide">
                      {exp.year}
                    </p>
                  </div>
                  <div className="col-span-3">
                    <h4 className="text-[#eae8da] font-medium mb-1 group-hover:text-[#e15e4c] transition-colors font-roboto">
                      {exp.title} · {exp.company}
                    </h4>
                    <p className="text-[#eae8da]/60 text-sm mb-3 font-roboto leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#e15e4c]/10 text-[#e15e4c] border border-[#e15e4c]/20 font-roboto">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section Projects */}
          <section id="projects" className="scroll-mt-32">
            <h3 className="text-[#eae8da] text-sm font-bold tracking-widest mb-8 font-roboto">PROJECTS</h3>
            <div className="space-y-12">
              {[
                {
                  id: 1,
                  title: "GardenBnB",
                  description: "Clone d'Airbnb développé en équipe pendant la formation Le Wagon. Lead développeur sur ce projet collaboratif. Gestion complète des annonces, utilisateurs et réservations avec carte interactive.",
                  image: "/images/logo2.jpg",
                  link: "https://gardenbnb-thomaswebdev-cb5b63913774.herokuapp.com/",
                  tags: ["Ruby on Rails", "PostgreSQL", "Mapbox", "Lead Dev"],
                  stars: "Projet collaboratif"
                },
                {
                  id: 2,
                  title: "Dream Journal & Analyzer",
                  description: "Projet de fin de formation développé en équipe de 3 développeurs. Lead technique du projet. Application d'analyse et de suivi de rêves avec intelligence artificielle pour interpréter et catégoriser les rêves automatiquement.",
                  image: "/images/logo3.jpg",
                  link: "https://dreamlog-45cf91224f2e.herokuapp.com/",
                  tags: ["Ruby on Rails", "API", "IA", "Lead Dev"],
                  stars: "Projet de fin"
                },
                {
                  id: 3,
                  title: "Agrégateur d'Actualités IA",
                  description: "Agrégateur d'actualités IA avec Next.js 15, TypeScript, Docker et OpenAI. Interface moderne avec résumés automatiques d'articles Reddit/HackerNews.",
                  image: "/images/logo4.jpg",
                  link: "https://actu-ia-da62affe5174.herokuapp.com/",
                  tags: ["Next.js 15", "TypeScript", "OpenAI", "Docker", "Supabase"],
                  stars: "En développement"
                },
                {
                  id: 4,
                  title: "Recettes de Cuisine",
                  description: "Application de gestion de recettes de cuisine avec création, modification et recherche de recettes. Interface conviviale et intuitive.",
                  image: "/images/logo5.jpg",
                  link: "https://recettes-cuisine-thomas-714e2391e369.herokuapp.com/",
                  tags: ["Ruby on Rails", "Active Record", "CRUD"],
                  stars: "Application web"
                },
                {
                  id: 5,
                  title: "Manga Watchlist",
                  description: "Exercice simple réalisé pendant la formation Le Wagon. Application basique de gestion de liste de mangas avec fonctionnalités CRUD. Projet pédagogique pour maîtriser les fondamentaux.",
                  image: "/images/logo6.jpg",
                  link: "https://manga-watch-list-103932ca0caf.herokuapp.com/",
                  tags: ["Ruby on Rails", "CRUD", "Exercice"],
                  stars: "Projet d'apprentissage"
                },
                {
                  id: 6,
                  title: "E-commerce avec Paiement Intégré",
                  description: "Site de vente en ligne complet avec système de paiement sécurisé. Gestion du catalogue produits, panier d'achat et processus de commande.",
                  image: "/images/logo7.jpg",
                  link: "https://vente-en-ligne-thomas-33c780989c1d.herokuapp.com/",
                  tags: ["Ruby on Rails", "Stripe", "PostgreSQL"],
                  stars: "Full-stack"
                },

              ].map((project, index) => (
                <motion.a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group block"
                >
                  <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded border-2 border-[#eae8da]/10 group-hover:border-[#e15e4c]/30 transition-all duration-300"
                      />
                    </div>
                    <div className="col-span-3">
                      <h4 className="text-[#eae8da] font-medium mb-2 group-hover:text-[#e15e4c] transition-colors flex items-center gap-2 font-roboto">
                        {project.title}
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </h4>
                      <p className="text-[#eae8da]/60 text-sm mb-3 font-roboto leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#e15e4c]/10 text-[#e15e4c] border border-[#e15e4c]/20 font-roboto">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-[#eae8da]/40 text-xs font-roboto">{project.stars}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Lien vers archive complète */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Link
                href="/projets"
                className="inline-flex items-center gap-2 text-[#eae8da] hover:text-[#e15e4c] transition-colors group font-roboto font-medium"
              >
                Voir tous les projets
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </section>
        {/* Footer */}
        <footer className="mt-32 pb-16">
          <p className="text-[#eae8da]/40 text-xs font-roboto">
            Pensé et développé dans Visual Studio Code. Construit avec Next.js et Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
}
