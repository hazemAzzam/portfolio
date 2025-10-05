import { z } from "zod";

export type SkillType = {
  name: string;
  progress: number;
};

export type TechStackType = {
  name: string;
};

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  images: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
  role: string;
  teamSize: number;
  challenges: string[];
  achievements: string[];
};

export type ExperienceType = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack: TechStackType[];
};

export type EducationType = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export type ContactType = {
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github: string;
};

export type ContactFormType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// create the contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
