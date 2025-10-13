import { Section } from "@/components/ui/section";
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuMail, LuGithub, LuLinkedin } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "./components/ProjectCard";
import { ProjectType, SkillType } from "@/types";
import { fetchPersonalInfo } from "@/services/fetch-personal-info";
import { fetchProjects } from "@/services/fetch-projects";

export default async function Projects() {
  const personalInfoData = await fetchPersonalInfo();
  const projectsData = await fetchProjects();

  const [personalInfo, projects] = await Promise.all([
    personalInfoData,
    projectsData,
  ]);
  return (
    <Section id="projects" className="bg-muted/30">
      <div className="grid lg:grid-cols-4 gap-8 w-full">
        <div className={cn("lg:col-span-1", " space-y-6 self-start")}>
          <Card>
            <Avatar className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <AvatarImage src={personalInfo?.image} />
              <AvatarFallback>{personalInfo?.name?.charAt(0) || "D"}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h1 className="text-2xl font-bold">{personalInfo?.name || "Developer"}</h1>
              <p className="text-muted-foreground">
                {personalInfo?.proffessionalTitle || "Full Stack Developer"}
              </p>
            </div>
          </Card>
          <Card className="text-start">
            <CardHeader>About</CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {personalInfo?.bio || "Passionate developer with expertise in modern web technologies."}
              </p>
            </CardContent>
          </Card>
          <Card className="text-start">
            <CardHeader>Contact</CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center text-sm  leading-relaxed">
                <LuMail className="size-4 mr-2 text-muted-foreground" />
                <a href={`mailto:${personalInfo?.email || "contact@example.com"}`}>
                  {personalInfo?.email?.split("@")[0] || "contact"}
                </a>
              </p>
              <p className="flex items-center text-sm  leading-relaxed">
                <FaWhatsapp className="size-4 mr-2 text-muted-foreground" />
                <a href={`https://wa.me/${personalInfo?.phone || "+1234567890"}`}>
                  {personalInfo?.phone || "+1234567890"}
                </a>
              </p>
              <p className="flex items-center text-sm  leading-relaxed">
                <LuGithub className="size-4 mr-2 text-muted-foreground" />
                <a href={`${personalInfo?.github || "#"}`}>{personalInfo?.github || "github"}</a>
              </p>
              <p className="flex items-center text-sm  leading-relaxed">
                <LuLinkedin className="size-4 mr-2 text-muted-foreground" />
                <a href={`${personalInfo?.linkedin || "#"}`}>{personalInfo?.linkedin || "linkedin"}</a>
              </p>
            </CardContent>
          </Card>
          <Card className="text-start">
            <CardHeader>Skills</CardHeader>
            <CardContent className="flex flex-wrap gap-1">
              {personalInfo?.skills?.map((skill: SkillType) => (
                <Badge variant="secondary" key={skill.name}>
                  {skill.name}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-3 space-y-6">
          <div className="space-y-2 text-left">
            <h2 className="text-2xl font-bold">All Projects</h2>
            <p className="text-muted-foreground">
              A comprehensive collection of my work in frontend development,
              showcasing various technologies and approaches.
            </p>
          </div>
          <div className="space-y-8 mb-20">
            {projects.map((project: ProjectType, index: number) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
