"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    id: number;
    slug: string;
    title: string;
    description: string;
    stack: string[];
    role: string;
    github: string;
    demo: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="h-full"
    >
      <div className="h-full flex flex-col bg-[#fcfcfc] rounded-xl p-8 border border-[#050505]/10 hover:border-[#050505]/20 hover:shadow-lg transition-all duration-300">
        <h3 className="text-2xl font-medium text-[#050505] mb-3">
          {project.title}
        </h3>
        <p className="text-[#050505]/70 mb-3">
          {project.description}
        </p>
        <p className="text-sm text-[#050505]/50 mb-4">
          {project.role}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-[#f7f7f7] text-[#050505]/80 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-3">
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 bg-[#050505] text-[#fcfcfc] rounded-md hover:bg-[#050505]/90 transition-all text-sm"
          >
            Démo
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 border border-[#050505]/20 text-[#050505] rounded-md hover:border-[#050505]/40 hover:bg-[#f7f7f7] transition-all text-sm"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
