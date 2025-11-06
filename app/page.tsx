import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Thomas Feret
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-700">
            Développeur Web Full-stack
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="#projets" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Voir mes projets
            </Link>
            <Link href="#contact" className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      <section id="projets" className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Mes Projets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">À Propos</h2>
          <p className="text-gray-600">
            Diplômé du Wagon, développeur full-stack passionné. Basé à Lamballe, mobile sur Rennes.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Contact</h2>
          <div className="flex gap-4 justify-center">
            <a href="mailto:contact@thomasferet.dev" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
              Email
            </a>
            <a href="https://github.com/thomasferet" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-gray-600 text-gray-600 rounded-lg">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
