import { z } from "zod";

export type PersonalInfoType = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  proffessionalTitle?: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  github?: string;
  skills?: SkillType[];
};

export type SkillType = {
  name?: string;
  proficiency?: number;
  category?: string;
};

export type SkillOptionType = {
  value: string;
  label: string;
};

export type TechStackType = {
  name: string;
};

export type ProjectType = {
  id: string;
  title: string;
  overview: string;
  description: string;
  detailedDescription: string;
  technologies?: SkillOptionType[];
  startDate: string;
  endDate?: string;
  images_list: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  role: string;
  teamSize: number;
  challenges_list: string[];
  achievements_list: string[];
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
  email?: string;
  phone?: string;
  address?: string;
  linkedin?: string;
  github?: string;
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
