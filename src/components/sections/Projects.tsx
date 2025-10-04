"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Calendar, ExternalLink, Eye } from "lucide-react";
import { ImageWithFallBack } from "../ui/ImageWithFallBack";
import { Section } from "../ui/section";
import { LuArrowRight, LuGithub } from "react-icons/lu";
import { ProjectDetail } from "../ProjectDetail";
import { PROJECTS_DATA } from "@/lib/data";
import { BorderBeam } from "../ui/border-beam";

export default function Projects() {
  const featuredProjects = PROJECTS_DATA.filter((project) => project.featured);
  const otherProjects = PROJECTS_DATA.filter((project) => !project.featured);

  const formatProjectDate = (startDate: string, endDate?: string) => {
    const start = new Date(startDate).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
    const end = endDate
      ? new Date(endDate).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })
      : "Present";
    return `${start} - ${end}`;
  };

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
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative group overflow-hidden rounded-lg">
                  <ImageWithFallBack
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <LuGithub className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`space-y-4 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {formatProjectDate(project.startDate, project.endDate)}
                  </span>
                  <span>•</span>
                  <span>{project.category}</span>
                </div>

                <h3 className="text-2xl">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech: string) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <ProjectDetail project={project}>
                    <Button>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </ProjectDetail>

                  {project.liveUrl && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}

                  {project.githubUrl && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LuGithub className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="relative flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-md px-4 py-2">
            <span>View All Projects</span>
            <LuArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}
