"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  const skills = {
    languages: ["JavaScript (ES6+)", "TypeScript", "Ruby", "Python", "SQL", "HTML5", "CSS3"],
    frontend: ["Next.js", "React", "Tailwind CSS", "Stimulus", "Bootstrap", "Framer Motion"],
    backend: ["Node.js", "Ruby on Rails", "Express.js", "API REST", "PostgreSQL"],
    tools: ["Git", "GitHub", "Docker", "Heroku", "Vercel", "Figma", "Notion", "VS Code", "Linux"]
  };

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
      <section className="max-w-4xl mx-auto px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#203270] mb-6 font-roboto">
            À propos de moi
          </h1>
          <p className="text-[#203270]/70 text-xl font-roboto leading-relaxed">
            Développeur Full-Stack passionné, 33 ans, basé en Bretagne et prêt à relever de nouveaux défis.
          </p>
        </motion.div>
      </section>

      {/* Contenu principal */}
      <section className="max-w-4xl mx-auto px-8 pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Parcours */}
          <div className="bg-white border-2 border-[#203270]/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-[#203270] mb-6 font-roboto">Mon Parcours</h2>

            <div className="space-y-4 text-[#203270]/80 font-roboto leading-relaxed">
              <p>
                Ma passion pour l'informatique remonte à l'âge de 9 ans avec mon premier ordinateur.
                Déjà à cette époque, je manipulais des scripts Java pour personnaliser mes jeux vidéo.
                Cette fascination pour la technologie m'a toujours accompagné, même si mon parcours
                a emprunté des chemins détournés avant de revenir à cette vocation première.
              </p>

              <p>
                Mes capacités au football m'ont d'abord orienté vers une carrière sportive : Ligue de
                Bretagne puis l'En Avant de Guingamp jusqu'à mes 16 ans. Par la suite, j'ai entrepris
                des études de médecine par tradition familiale, mais une expérience professionnelle au
                CHU de Rennes m'a révélé que ce milieu ne correspondait pas à mes aspirations. Je me
                suis alors réorienté vers deux années en faculté d'économie.
              </p>

              <p>
                Pendant 5 ans, j'ai exercé en tant que cooperateur technique, où j'ai eu mes premiers
                contacts avec le développement : requêtes SQL et scripts d'automatisation. Ces premières
                immersions techniques ont confirmé mon intérêt pour la programmation, sans toutefois
                m'offrir la structure d'apprentissage nécessaire.
              </p>

              <p>
                Le véritable tournant s'est produit avec ma formation au Wagon, que j'ai financée
                personnellement (8 500€). Cette immersion intensive a révélé une passion que je
                n'aurais pas soupçonnée aussi forte. Depuis, je consacre l'essentiel de mon temps
                à perfectionner mes compétences : lecture technique (Python, Ruby, éco-conception web),
                projets personnels, veille technologique constante.
              </p>

              <p className="font-medium text-[#203270] bg-[#203270]/5 p-4 rounded-lg border-l-4 border-[#e15e4c]">
                À 33 ans, je suis aujourd'hui pleinement investi dans cette reconversion.
                Je travaille dans un environnement Linux et cherche une entreprise où mettre
                ma rigueur, ma capacité d'apprentissage rapide et mon engagement au service
                de projets ambitieux. Mon objectif : atteindre un niveau senior dans les
                meilleurs délais grâce à un travail constant et méthodique.
              </p>
            </div>
          </div>

          {/* Engagement - VERSION OPTIMISÉE */}
          <div className="bg-gradient-to-br from-[#e15e4c]/5 to-[#203270]/5 border-2 border-[#e15e4c]/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-[#203270] mb-4 font-roboto">Ce que j'apporte</h2>
            <div className="space-y-3 text-[#203270]/80 font-roboto leading-relaxed">
              <p>
                <span className="font-semibold text-[#203270]">Rigueur et méthode :</span> Issue de mon parcours sportif de haut niveau et de mes expériences professionnelles variées.
              </p>
              <p>
                <span className="font-semibold text-[#203270]">Apprentissage accéléré :</span> Capacité démontrée à assimiler rapidement de nouvelles technologies et frameworks.
              </p>
              <p>
                <span className="font-semibold text-[#203270]">Engagement total :</span> Investissement personnel conséquent (formation autofinancée, apprentissage continu, projets personnels).
              </p>
              <p className="pt-2 border-t border-[#203270]/10">
                <span className="font-semibold text-[#203270]">Mobilité :</span> Ouvert à des opportunités sur Rennes et la région parisienne.
                Prêt à m'adapter à la culture et aux méthodes de l'entreprise qui me fera confiance.
              </p>
            </div>
          </div>

          {/* Localisation - VERSION CONDENSÉE */}
          <div className="bg-white border-2 border-[#203270]/10 rounded-xl p-6">
            <h2 className="text-xl font-bold text-[#203270] mb-3 font-roboto flex items-center gap-2">
              <svg className="w-5 h-5 text-[#e15e4c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Localisation
            </h2>
            <p className="text-[#203270]/80 font-roboto">
              <span className="font-semibold text-[#203270]">Basé à Lamballe, Bretagne</span> •
              Recherche active sur <span className="font-semibold text-[#203270]">Rennes et région parisienne</span> •
              Mobilité complète
            </p>
          </div>

          {/* Stack Technique */}
          <div className="bg-white border-2 border-[#203270]/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-[#203270] mb-6 font-roboto">Stack Technique</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#203270] font-roboto">Langages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-[#203270]/5 text-[#203270] rounded-lg text-sm border border-[#203270]/20 font-roboto font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#203270] font-roboto">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-[#e15e4c]/10 text-[#e15e4c] rounded-lg text-sm border border-[#e15e4c]/20 font-roboto font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#203270] font-roboto">Backend & Bases de données</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-[#203270]/5 text-[#203270] rounded-lg text-sm border border-[#203270]/20 font-roboto font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#203270] font-roboto">Outils & Environnement</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-[#e15e4c]/10 text-[#e15e4c] rounded-lg text-sm border border-[#e15e4c]/20 font-roboto font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Formation */}
          <div className="bg-white border-2 border-[#203270]/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-[#203270] mb-4 font-roboto">Formation & Certification</h2>
            <div className="space-y-3 text-[#203270]/80 font-roboto">
              <p className="leading-relaxed">
                <span className="font-semibold text-[#203270]">Le Wagon</span> - Bootcamp Développeur Web Full-Stack
                <br />
                <span className="text-sm">Certification RNCP Niveau 6 (Concepteur Développeur d'Applications)</span>
                <br />
                <span className="text-sm text-[#203270]/60">Formation intensive de 6 mois - 2025</span>
              </p>
              <p className="text-sm italic">
                Formation autofinancée (8 500€), avec possibilité de programmes complémentaires pour continuer ma montée en compétences.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
