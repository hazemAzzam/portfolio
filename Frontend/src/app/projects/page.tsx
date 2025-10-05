import { Section } from "@/components/ui/section";
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuMail, LuGithub, LuLinkedin } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { PROJECTS_DATA } from "@/lib/data";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" className="bg-muted/30">
      <div className="grid lg:grid-cols-4 gap-8 w-full">
        <div className={cn("lg:col-span-1", " space-y-6 self-start")}>
          <Card>
            <Avatar className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h1 className="text-2xl font-bold">Hazem Azzam</h1>
              <p className="text-muted-foreground">Frontend Developer</p>
            </div>
          </Card>
          <Card className="text-start">
            <CardHeader>About</CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Passionate frontend developer with 5+ years of experience
                creating modern, responsive web applications. I specialize in
                React, TypeScript, and modern CSS frameworks.
              </p>
            </CardContent>
          </Card>
          <Card className="text-start">
            <CardHeader>Contact</CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center text-sm  leading-relaxed">
                <LuMail className="size-4 mr-2 text-muted-foreground" />
                <a href="mailto:hazemmohamed9194@gmail.com">hazemmohamed9194</a>
              </p>
              <p className="flex items-center text-sm  leading-relaxed">
                <FaWhatsapp className="size-4 mr-2 text-muted-foreground" />
                <a href="https://wa.me/+201142221039">+201142221039</a>
              </p>
              <p className="flex items-center text-sm  leading-relaxed">
                <LuGithub className="size-4 mr-2 text-muted-foreground" />
                <a href="https://github.com/hazemAzzam">hazemAzzam</a>
              </p>
              <p className="flex items-center text-sm  leading-relaxed">
                <LuLinkedin className="size-4 mr-2 text-muted-foreground" />
                <a href="https://www.linkedin.com/in/hazemAzzam/">hazemAzzam</a>
              </p>
            </CardContent>
          </Card>
          <Card className="text-start">
            <CardHeader>Skills</CardHeader>
            <CardContent className="flex flex-wrap gap-1">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind",
                "MySQL",
                "Git",
                "PostgreSQL",
                "GitHub",
                "Figma",
                "React Query",
                "Zustand",
                "REST APIs",
              ].map((skill) => (
                <Badge variant="secondary" key={skill}>
                  {skill}
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
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
