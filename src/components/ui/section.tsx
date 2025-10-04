// src/components/ui/section.tsx
import React from "react";
import { cn } from "@/lib/utils";
import { InView } from "./in-view";

interface SectionProps {
  id: string;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen flex items-center justify-center relative",
        className
      )}
    >
      <div className={cn("container py-20", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
