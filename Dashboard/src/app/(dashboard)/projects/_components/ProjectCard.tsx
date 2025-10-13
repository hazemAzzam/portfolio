import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  useDeleteProject,
  useToggleFeaturedProject,
} from "@/app/(dashboard)/projects/_hooks/use-projects";
import React from "react";
import { Briefcase, Edit, ExternalLink, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LuGithub } from "react-icons/lu";
import { ProjectType } from "../_types/project-types";
import ProjectDialog from "./ProjectDialog";

export default function ProjectCard({ project }: { project: ProjectType }) {
  const { mutate: toggleFeatured } = useToggleFeaturedProject();
  const { mutate: deleteProject } = useDeleteProject();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row gap-2 items-center text-lg">
          <Briefcase size={24} />
          <span>{project.title}</span>
          {project.featured && <Badge>Featured</Badge>}
        </CardTitle>
        <CardDescription className="flex flex-row gap-2 items-center">
          <Badge variant={"outline"}>{project.status}</Badge>
          <span className="text-sm text-muted-foreground">
            {project.startDate}
            {project.endDate && ` - ${project.endDate}`}
          </span>
        </CardDescription>
        <CardAction className="flex flex-row gap-2 items-center">
          <Button variant="outline" onClick={() => toggleFeatured(project.id)}>
            {project.featured ? "Unfeature" : "Feature"}
          </Button>
          <ProjectDialog project={project}>
            <Button variant={"outline"}>
              <Edit />
            </Button>
          </ProjectDialog>
          <Button variant={"outline"} onClick={() => deleteProject(project.id)}>
            <Trash />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-lg text-muted-foreground">{project.overview}</p>
        <div className="flex flex-row gap-2 items-center">
          {project.technologies?.map((technology) => (
            <Badge variant={"outline"} key={technology.value}>
              {technology.label}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-row gap-2 items-center">
        <Button
          variant={"outline"}
          className="flex flex-row gap-2 items-center"
          asChild
        >
          <a href="">
            <ExternalLink />
            Live Demo
          </a>
        </Button>
        <Button
          variant={"outline"}
          className="flex flex-row gap-2 items-center"
          asChild
        >
          <a href="">
            <LuGithub />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
