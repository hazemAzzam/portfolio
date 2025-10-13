import React from "react";
import { Section } from "../ui/section";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { AnimatedGroup } from "../../../components/motion-primitives/animated-group";
import AnimatedScrollToButton from "../ui/animatedScrollToButton";
import Link from "next/link";
import { PersonalInfoType } from "@/types";

export default function Hero({
  personalInfo,
}: {
  personalInfo: PersonalInfoType | null;
}) {
  return (
    <Section id="home">
      <AnimatedGroup
        className="flex flex-col items-center justify-between"
        preset="scale"
      >
        <div>
          <Avatar className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
            <AvatarImage
              src={personalInfo?.image}
              alt={`${personalInfo?.name || "Developer"} - ${personalInfo?.proffessionalTitle || "Full Stack Developer"}`}
            />
            <AvatarFallback>{personalInfo?.name?.charAt(0) || "D"}</AvatarFallback>
          </Avatar>
          <h1
            className={cn(
              "text-5xl font-bold text-center text-bold",
              "text-4xl md:text-6xl mb-6"
            )}
          >
            {personalInfo?.proffessionalTitle || "Full Stack Developer"}
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
            <Button size="lg">
              <Link href="/projects">View my work</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/#contact">Contact me</Link>
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href={personalInfo?.github || "#"}
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LuGithub className="size-6 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href={personalInfo?.linkedin || "#"}
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LuLinkedin className="size-6 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href={`mailto:${personalInfo?.email || "contact@example.com"}`}
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
