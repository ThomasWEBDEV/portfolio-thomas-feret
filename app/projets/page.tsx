"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "GardenBnB",
      description: "Clone d'Airbnb développé en équipe pendant la formation Le Wagon. Lead développeur sur ce projet collaboratif. Gestion complète des annonces, utilisateurs et réservations avec carte interactive.",
      image: "/images/logo2.jpg",
      link: "https://gardenbnb-thomaswebdev-cb5b63913774.herokuapp.com/",
      tags: ["Ruby on Rails", "PostgreSQL", "Mapbox", "Lead Dev"],
      year: "2025"
    },
    {
      id: 2,
      title: "Dream Journal & Analyzer",
      description: "Projet de fin de formation développé en équipe de 3 développeurs. Lead technique du projet. Application d'analyse et de suivi de rêves avec intelligence artificielle pour interpréter et catégoriser les rêves automatiquement.",
      image: "/images/logo3.jpg",
      link: "https://dreamlog-45cf91224f2e.herokuapp.com/",
      tags: ["Ruby on Rails", "API", "IA", "Lead Dev"],
      year: "2025"
    },
    {
      id: 3,
      title: "Agrégateur d'Actualités IA",
      description: "Agrégateur d'actualités IA avec Next.js 15, TypeScript, Docker et OpenAI. Interface moderne avec résumés automatiques d'articles Reddit/HackerNews.",
      image: "/images/logo4.jpg",
      link: "https://actu-ia-da62affe5174.herokuapp.com/",
      tags: ["Next.js 15", "TypeScript", "OpenAI", "Docker", "Supabase"],
      year: "2025"
    },
    {
      id: 4,
      title: "Recettes de Cuisine",
      description: "Application de gestion de recettes de cuisine avec création, modification et recherche de recettes. Interface conviviale et intuitive.",
      image: "/images/logo5.jpg",
      link: "https://recettes-cuisine-thomas-714e2391e369.herokuapp.com/",
      tags: ["Ruby on Rails", "Active Record", "CRUD"],
      year: "2025"
    },
    {
      id: 5,
      title: "Manga Watchlist",
      description: "Exercice simple réalisé pendant la formation Le Wagon. Application basique de gestion de liste de mangas avec fonctionnalités CRUD. Projet pédagogique pour maîtriser les fondamentaux.",
      image: "/images/logo6.jpg",
      link: "https://manga-watch-list-103932ca0caf.herokuapp.com/",
      tags: ["Ruby on Rails", "CRUD", "Exercice"],
      year: "2025"
    },
    {
      id: 6,
      title: "E-commerce avec Paiement Intégré",
      description: "Site de vente en ligne complet avec système de paiement sécurisé. Gestion du catalogue produits, panier d'achat et processus de commande.",
      image: "/images/logo7.jpg",
      link: "https://vente-en-ligne-thomas-33c780989c1d.herokuapp.com/",
      tags: ["Ruby on Rails", "Stripe", "PostgreSQL"],
      year: "2025"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header avec retour */}
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#203270] mb-6 font-roboto">
            Tous mes projets
          </h1>
          <p className="text-[#203270]/70 text-lg max-w-2xl font-roboto leading-relaxed mb-6">
            Une sélection de mes réalisations, du bootcamp Le Wagon à mes projets personnels.
            Du développement web full-stack aux intégrations d'intelligence artificielle.
          </p>

          {/* AJOUTE CE BLOC ICI */}
          <div className="bg-white/50 border-l-4 border-[#e15e4c] p-6 max-w-3xl rounded-r-lg">
            <p className="text-[#203270]/80 text-base font-roboto leading-relaxed mb-4">
              <span className="font-semibold text-[#203270]">À propos de ces projets :</span> Cette sélection regroupe des réalisations issues de ma formation au Wagon
              ainsi que des projets personnels développés en autonomie, <span className="font-medium text-[#203270]">actuellement en cours d'amélioration continue</span>.
              Bien que ces applications restent volontairement simples et aient été développées rapidement,
              elles m'ont permis de maîtriser les fondamentaux du développement web full-stack : architectures MVC, API RESTful, intégration de services tiers et bonnes pratiques de code.
            </p>
            <p className="text-[#203270]/80 text-base font-roboto leading-relaxed mb-4">
              À travers ces projets, j'ai notamment intégré <span className="font-medium text-[#e15e4c]">Mapbox</span> avec carte interactive, zoom et icônes personnalisées (GardenBnB),
              développé un <span className="font-medium text-[#e15e4c]">système d'analyse par IA</span> utilisant l'API OpenAI (GPT-4) pour interpréter automatiquement les rêves (Dream Journal),
              créé un <span className="font-medium text-[#e15e4c]">agrégateur intelligent</span> qui scanne et résume instantanément les articles IA des sites tech les plus reconnus via GPT-4,
              et mis en place un <span className="font-medium text-[#e15e4c]">système de paiement Stripe</span> complet avec gestion de panier et transactions sécurisées.
            </p>
            <p className="text-[#203270]/80 text-sm font-roboto leading-relaxed italic">
              Note : Le site e-commerce est uniquement à titre démonstratif - les paiements sont fonctionnels mais ne seront pas traités.
            </p>
            <p className="text-[#203owanie]/80 text-base font-roboto leading-relaxed mt-4">
              Ces bases techniques solides me permettent aujourd'hui d'aborder des projets bien plus complexes et ambitieux, avec une stack moderne et des défis techniques avancés.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { scale: { duration: 0 } } }}  // ← MODIFIE CETTE LIGNE
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.45,
                zIndex: 50,
                transition: { duration: 0.05 }
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-white rounded-lg overflow-hidden border-2 border-[#203270]/10 hover:border-[#e15e4c]/50 transition-all duration-300 shadow-sm hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-[#203270]/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay au hover */}
                <div className={`absolute inset-0 bg-[#203270]/80 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <span className="text-[#eae8da] font-roboto font-medium flex items-center gap-2">
                    Voir le projet
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#203270] group-hover:text-[#e15e4c] transition-colors font-roboto">
                    {project.title}
                  </h3>
                  <span className="text-xs text-[#203270]/40 font-roboto">{project.year}</span>
                </div>

                {/* Description */}
                <p className="text-[#203270]/70 text-sm mb-4 font-roboto leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* AJOUTE CETTE CONDITION ICI - pour Dream Journal uniquement */}
                {project.id === 2 && (
                  <p className="text-xs text-[#203270]/60 mb-3 font-roboto bg-[#203270]/5 p-2 rounded">
                    💡 Créez un compte pour tester l'analyse de rêves par IA
                  </p>
                )}

                {/* CONDITION */}
                {[1, 2, 5].includes(project.id) && (
                  <p className="text-xs text-[#e15e4c] mb-3 font-roboto italic">
                    ✦ Projet Le Wagon
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-[#e15e4c]/10 text-[#e15e4c] border border-[#e15e4c]/20 font-roboto"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
