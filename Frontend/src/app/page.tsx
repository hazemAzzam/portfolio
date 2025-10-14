"use server";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import React from "react";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { fetchPersonalInfo } from "@/services/fetch-personal-info";
import { fetchProjects } from "@/services/fetch-projects";
import { fetchSkills } from "@/services/fetch-skills";

export default async function page() {
  const personalInfoData = await fetchPersonalInfo();
  const projectsData = await fetchProjects();
  const skillsData = await fetchSkills();

  const [personalInfo, projects, skills] = await Promise.all([
    personalInfoData,
    projectsData,
    skillsData,
  ]);

  return (
    <main>
      <Hero personalInfo={personalInfo} />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contact={personalInfo} />
    </main>
  );
}
