import React from "react";
import { Section } from "../ui/section";
import DirectionalInView from "../ui/directional-in-view";
import { ImageWithFallBack } from "../ui/ImageWithFallBack";
import Highlights from "../ui/Highlights";

export default function About() {
  return (
    <Section id="about" className="bg-muted/30">
      <div>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate frontend developer with a keen eye for design and a
            love for creating exceptional digital experiences.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3"></div>
            <ImageWithFallBack
              src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NTk0MTgyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Developer workspace"
              className="w-full h-84  z-10 rounded-lg shadow-xl"
            />
          </div>
          <div>
            <p className="text-lg leading-relaxed">
              With over 5 years of experience in frontend development, I
              specialize in creating responsive, accessible, and performant web
              applications. My journey began with a curiosity about how websites
              work, and it has evolved into a passion for crafting digital
              experiences that make a difference.
            </p>

            <p className="text-lg leading-relaxed">
              I believe in the power of continuous learning and staying
              up-to-date with the latest technologies. Whether it's React,
              TypeScript, or the newest CSS features, I'm always exploring ways
              to improve my craft and deliver better solutions.
            </p>
          </div>
        </div>
        <Highlights />
      </div>
    </Section>
  );
}
