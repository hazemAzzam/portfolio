import z from "zod";
import { EmploymentTypes } from "../../_domain/value-objects/EmploymentTypes.type";

export const experienceSchema = z.object({
  name: z.string().min(1),
  position: z.string().min(1),
  startDate: z.string(),
  endDate: z.string().optional(),
  employmentType: z.enum(EmploymentTypes),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
    details: z.string(),
  }),
});

export type ExperienceSchema = z.infer<typeof experienceSchema>;
