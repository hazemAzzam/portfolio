"use server";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import React from "react";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { PersonalInfoType, ProjectType } from "@/types";

export default async function page() {
  const personalInfo: PersonalInfoType = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/personal-info/?format=json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate:
          parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME || "3600") || 3600,
      },
    }
  ).then((res) => res.json());
  const projects: ProjectType[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/?format=json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate:
          parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME || "3600") || 3600,
      },
    }
  ).then((res) => res.json());

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
