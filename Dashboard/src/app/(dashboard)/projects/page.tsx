"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import ProjectDialog from "./_components/ProjectDialog";
import { useProjects } from "@/app/(dashboard)/projects/_hooks/use-projects";
import ProjectCard from "./_components/ProjectCard";
import ProjectsEmptyState from "./_components/ProjectsEmptyState";

export default function Projects() {
  const projects = useProjects();

  return (
    <div className="p-4">
      <div className="space-y-4 flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Projects</h2>
            <p className="text-muted-foreground">
              Showcase my work and achievements
            </p>
          </div>
          <ProjectDialog>
            <Button>Add Project</Button>
          </ProjectDialog>
        </div>
        <div className="flex flex-col gap-4">
          {projects.data?.length === 0 ? (
            <ProjectsEmptyState />
          ) : (
            projects.data?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
