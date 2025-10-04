import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import React from "react";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function page() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Contact />
    </div>
  );
}
