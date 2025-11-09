"use client";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      whileHover={{ y: -10, scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-slate-800/80 backdrop-blur border-sky-900/50 hover:border-sky-500/50 transition-all duration-300 shadow-xl">
        <CardHeader>
          <CardTitle className="text-white">{project.title}</CardTitle>
          <CardDescription className="text-sky-300/80">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-sky-400/60 mb-4">{project.role}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} className="bg-sky-500/20 text-sky-300 border-sky-500/30 backdrop-blur">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button asChild className="bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/25" size="sm">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Démo
            </a>
          </Button>
          <Button asChild variant="outline" className="border-sky-500/50 text-sky-300 hover:border-sky-400 hover:text-sky-400 hover:bg-sky-950/30" size="sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
