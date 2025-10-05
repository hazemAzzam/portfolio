"use client";

import { Code, Lightbulb, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "../ui/card";
import React from "react";

export default function Highlights() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed, accessibility, and user experience",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Staying current with latest technologies and best practices",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively with designers, developers, and stakeholders",
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-8">
      {highlights.map((highlight, index) => (
        <motion.div
          key={highlight.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        >
          <Card className="h-full">
            <CardContent className="p-4 text-center">
              <highlight.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
