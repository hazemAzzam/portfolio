"use server";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import React from "react";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { PersonalInfoType, ProjectType } from "@/types";

export default async function page() {
  let personalInfo: PersonalInfoType | null = null;
  let projects: ProjectType[] = [];

  try {
    const personalInfoRes = await fetch(
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
    );
    
    if (personalInfoRes.ok) {
      personalInfo = await personalInfoRes.json();
    }
    
    const projectsRes = await fetch(
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
    );
    
    if (projectsRes.ok) {
      projects = await projectsRes.json();
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    // Use fallback data when API is unavailable
    const { PROJECTS_DATA } = await import("@/lib/data");
    projects = PROJECTS_DATA;
    personalInfo = {
      name: "Hazem Azzam",
      proffessionalTitle: "Full Stack Developer",
      image: "/placeholder-avatar.jpg",
      email: "hazem@example.com",
      github: "hazemAzzam",
      linkedin: "hazemazzam",
      phone: "+1234567890",
      address: "Cairo, Egypt"
    };
  }

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
