"use client";

import { ProjectDetail } from "@/components/ProjectDetail";
import { ImageWithFallBack } from "@/components/ui/ImageWithFallBack";
import { Calendar, Eye } from "lucide-react";
import { formatProjectDate } from "@/lib/formateProjectDate";
import React from "react";
import { ProjectType } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: ProjectType;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      key={project.id}
      className="grid md:grid-cols-5  bg-background overflow-hidden rounded-lg border border-border"
    >
      <div className="md:col-span-2">
        <ImageWithFallBack
          src={project?.images_list[0]}
          alt={`${project.title} - Project Screenshot`}
          fill
          className="w-full h-64 md:h-full object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 2}
        />
      </div>
      <div className="flex flex-col justify-between gap-4 md:col-span-3 text-start p-4">
        <p className="text-muted-foreground flex items-center gap-2 text-sm">
          <Calendar className="inline h-4 w-4" />
          {formatProjectDate(project.startDate, project.endDate)} •{" "}
          {project.category}
        </p>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground max-h-[100px] overflow-y-auto">
          {project.overview}
        </p>
        <div className="flex flex-wrap gap-2">
          {project?.technologies?.map((technology: string) => (
            <Badge key={technology} variant="outline">
              {technology}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ProjectDetail project={project}>
            <Button>
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </ProjectDetail>
        </div>
      </div>
    </motion.div>
  );
}
