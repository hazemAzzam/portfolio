"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", proficiency: "Expert", experience: "3+ years" },
        { name: "TypeScript", proficiency: "Advanced", experience: "2+ years" },
        {
          name: "JavaScript (ES6+)",
          proficiency: "Expert",
          experience: "4+ years",
        },
        { name: "HTML5", proficiency: "Expert", experience: "5+ years" },
        { name: "CSS3", proficiency: "Expert", experience: "4+ years" },
        {
          name: "Tailwind CSS",
          proficiency: "Advanced",
          experience: "2+ years",
        },
      ],
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Next.js", proficiency: "Advanced", experience: "2+ years" },
        { name: "Vite", proficiency: "Intermediate", experience: "1+ years" },
        {
          name: "Webpack",
          proficiency: "Intermediate",
          experience: "2+ years",
        },
        { name: "Git", proficiency: "Advanced", experience: "3+ years" },
        { name: "Figma", proficiency: "Intermediate", experience: "2+ years" },
        { name: "VS Code", proficiency: "Expert", experience: "4+ years" },
      ],
    },
    {
      title: "Libraries & APIs",
      skills: [
        {
          name: "React Query",
          proficiency: "Intermediate",
          experience: "1+ years",
        },
        {
          name: "Zustand",
          proficiency: "Intermediate",
          experience: "1+ years",
        },
        {
          name: "Framer Motion",
          proficiency: "Advanced",
          experience: "2+ years",
        },
        {
          name: "React Hook Form",
          proficiency: "Advanced",
          experience: "2+ years",
        },
        { name: "REST APIs", proficiency: "Advanced", experience: "3+ years" },
        { name: "GraphQL", proficiency: "Beginner", experience: "6+ months" },
      ],
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Git",
    "Webpack",
    "Vite",
    "Figma",
    "React Query",
    "Zustand",
    "GraphQL",
    "REST APIs",
    "Responsive Design",
    "Accessibility",
    "Performance Optimization",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications with
            focus on performance, accessibility, and user experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const getProficiencyColor = (proficiency: string) => {
                      switch (proficiency) {
                        case "Expert":
                          return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
                        case "Advanced":
                          return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
                        case "Intermediate":
                          return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
                        case "Beginner":
                          return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
                        default:
                          return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
                      }
                    };

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-border transition-colors"
                      >
                        <div className="flex-1">
                          <div className="text-sm mb-1">{skill.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {skill.experience}
                          </div>
                        </div>
                        <Badge
                          className={`text-xs px-2 py-1 ${getProficiencyColor(
                            skill.proficiency
                          )}`}
                          variant="secondary"
                        >
                          {skill.proficiency}
                        </Badge>
                      </motion.div>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-xl mb-6">Technology Stack</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
