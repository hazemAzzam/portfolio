import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import React from "react";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { apiClient } from "@/lib/api-client";

export const revalidate = parseInt(
  process.env.NEXT_PUBLIC_REVALIDATE_TIME || "3600"
);
export default async function page() {
  let personalInfo = null;
  let projects = null;

  try {
    const personalInfoRes = await apiClient.get("/personal-info");
    const projectsRes = await apiClient.get("/projects");
    personalInfo = personalInfoRes.data;
    projects = projectsRes.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Continue with null values - components should handle this gracefully
  }

  return (
    <div>
      <Hero personalInfo={personalInfo} />
      <About />
      <Skills />
      <Projects projects={projects} />
      {/* <Experience /> */}
      <Contact contact={personalInfo} />
    </div>
  );
}
