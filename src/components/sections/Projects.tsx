"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Section } from "../ui/section";
import { LuArrowRight } from "react-icons/lu";
import { PROJECTS_DATA } from "@/lib/data";
import Link from "next/link";
import ProjectCard from "@/app/projects/components/ProjectCard";

export default function Projects() {
  const featuredProjects = PROJECTS_DATA.filter((project) => project.featured);

  return (
    <Section id="projects" className="bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in frontend
            development, user experience design, and modern web technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="relative flex items-center gap-2"
            asChild
          >
            <Link href="/projects">
              View All Projects
              <LuArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
