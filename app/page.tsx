import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Thomas Feret
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-700 dark:text-gray-300">
            Développeur Web Full-stack
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionné par la création d&apos;applications web modernes et performantes avec Next.js, TypeScript et Ruby on Rails
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#projets"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir mes projets
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Mes Projets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <p className="col-span-full text-center text-gray-600 dark:text-gray-400">
              Projets en cours de préparation...
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">À Propos</h2>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Diplômé du Wagon (RNCP niveau 6), je suis développeur full-stack
              passionné par les technologies modernes. Basé à Lamballe et mobile sur Rennes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Contact</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Intéressé par mon profil ? Contactez-moi !
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:contact@thomasferet.dev"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/thomasferet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/thomasferet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
