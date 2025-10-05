import React from "react";
import { Section } from "../ui/section";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { AnimatedGroup } from "../../../components/motion-primitives/animated-group";
import AnimatedScrollToButton from "../ui/animatedScrollToButton";

export default function Hero() {
  return (
    <Section id="home">
      <AnimatedGroup
        className="flex flex-col items-center justify-between"
        preset="scale"
      >
        <div>
          <Avatar className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Hazem Azzam - Frontend Developer"
            />
            <AvatarFallback>HA</AvatarFallback>
          </Avatar>
          <h1
            className={cn(
              "text-5xl font-bold text-center text-bold",
              "text-4xl md:text-6xl mb-6"
            )}
          >
            Frontend Developer
          </h1>
          <p
            className={cn(
              "text-center",
              "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            )}
          >
            Crafting beautiful, responsive, and user-friendly web experiences
            with modern technologies. Passionate about clean code, performance
            optimization, and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg">View my work</Button>
            <Button variant="outline" size="lg">
              Contact me
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/hazemazzam"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LuGithub className="size-6 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/hazem-azzam-049513250/"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LuLinkedin className="size-6 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="mailto:hazemmohamed9194@gmail.com"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LuMail className="size-6 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>
        <div>
          <AnimatedScrollToButton />
        </div>
      </AnimatedGroup>
    </Section>
  );
}
