import { Section } from "@/components/ui/section";
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuMail, LuGithub, LuLinkedin } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "./components/ProjectCard";
import { apiClient } from "@/lib/api-client";
import { AxiosResponse } from "axios";
import { PersonalInfoType, ProjectType, SkillType } from "@/types";

export const revalidate = parseInt(
  process.env.NEXT_PUBLIC_REVALIDATE_TIME || "3600"
);

export default async function Projects() {
  let projects: ProjectType[] = [];
  let personalInfo: PersonalInfoType = {} as PersonalInfoType;

  try {
    const projectsRes = (await apiClient.get("/projects")) as AxiosResponse<
      ProjectType[]
    >;
    const personalInfoRes = (await apiClient.get(
      "/personal-info"
    )) as AxiosResponse<PersonalInfoType>;

    projects = projectsRes.data;
    personalInfo = personalInfoRes.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Continue with empty arrays/objects - components should handle this gracefully
  }

  return (
    <Section id="projects" className="bg-muted/30">
      <div className="grid lg:grid-cols-4 gap-8 w-full">
        <div className={cn("lg:col-span-1", " space-y-6 self-start")}>
          <Card>
            <Avatar className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <AvatarImage src={personalInfo.image} />
              <AvatarFallback>{personalInfo.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
              <p className="text-muted-foreground">
                {personalInfo.proffessionalTitle}
              </p>
            </div>
          </Card>
          <Card className="text-start">
            <CardHeader>About</CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
            </CardContent>
          </Card>
          <Card className="text-start">
            <CardHeader>Contact</CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center text-sm  leading-relaxed">
                <LuMail className="size-4 mr-2 text-muted-foreground" />
                <a href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email?.split("@")[0]}
                </a>
              </p>
              <p className="flex items-center text-sm  leading-relaxed">
                <FaWhatsapp className="size-4 mr-2 text-muted-foreground" />
                <a href={`https://wa.me/${personalInfo.phone}`}>
                  {personalInfo.phone}
                </a>
              </p>
              <p className="flex items-center text-sm  leading-relaxed">
                <LuGithub className="size-4 mr-2 text-muted-foreground" />
                <a href={`${personalInfo.github}`}>{personalInfo.github}</a>
              </p>
              <p className="flex items-center text-sm  leading-relaxed">
                <LuLinkedin className="size-4 mr-2 text-muted-foreground" />
                <a href={`${personalInfo.linkedin}`}>{personalInfo.linkedin}</a>
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
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
