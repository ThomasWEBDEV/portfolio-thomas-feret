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
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-gray-600 mb-4">{project.role}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button asChild variant="default" size="sm">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Démo
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href={`/projets/${project.slug}`}>Détails</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
