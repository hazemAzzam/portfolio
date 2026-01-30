import { ExperienceEntity } from "../../_domain/entites/Experience.entity";
import { ExperienceSchema } from "../schemas/experience.schema";

export function parseExperienceSchema(
  experienceSchema: ExperienceSchema,
): ExperienceEntity {
  return new ExperienceEntity({
    name: experienceSchema.name,
    position: experienceSchema.position,
    startDate: experienceSchema.startDate,
    endDate: experienceSchema.endDate ? experienceSchema.endDate : undefined,
    employementType: experienceSchema.employmentType,
    location: experienceSchema.location,
  });
}
