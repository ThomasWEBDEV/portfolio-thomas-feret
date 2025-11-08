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
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-white">{project.title}</CardTitle>
          <CardDescription className="text-slate-400">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-slate-500 mb-4">{project.role}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} className="bg-blue-600/20 text-blue-400 border-blue-600/50">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button asChild className="bg-blue-600 hover:bg-blue-500" size="sm">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Démo
            </a>
          </Button>
          <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-500" size="sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
