import { z } from "zod";

export type SkillType = {
  name: string;
  progress: number;
};

export type TechStackType = {
  name: string;
};

export type ProjectType = {
  name: string;
  description: string;
  techStack: TechStackType[];
  image: string;
  link: string;
  github: string;
  starred: boolean;
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
