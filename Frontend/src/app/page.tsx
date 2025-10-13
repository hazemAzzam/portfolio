"use server";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import React from "react";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { fetchPersonalInfo } from "@/services/fetch-personal-info";
import { fetchProjects } from "@/services/fetch-projects";

export default async function page() {
  const personalInfoData = await fetchPersonalInfo();
  const projectsData = await fetchProjects();

  const [personalInfo, projects] = await Promise.all([
    personalInfoData,
    projectsData,
  ]);

  return (
    <main>
      <Hero personalInfo={personalInfo} />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact contact={personalInfo} />
    </main>
  );
}
