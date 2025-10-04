"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import useScrollToSection from "@/hooks/useScroll";

export default function AnimatedScrollToButton() {
  const { scrollToSection } = useScrollToSection();
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={() => scrollToSection("#about")}
      className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
    >
      <ArrowDown className="h-6 w-6" />
    </motion.button>
  );
}
