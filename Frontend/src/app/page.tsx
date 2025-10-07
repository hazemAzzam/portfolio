import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import React from "react";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { apiClient } from "@/lib/api-client";

export default async function page() {
  const personalInfoRes = await apiClient.get("/personal-info");
  const projectsRes = await apiClient.get("/projects");

  return (
    <div>
      <Hero personalInfo={personalInfoRes.data} />
      <About />
      <Skills />
      <Projects projects={projectsRes.data} />
      {/* <Experience /> */}
      <Contact contact={personalInfoRes.data} />
    </div>
  );
}
