import { ExperienceEntity } from "../../_domain/entites/Experience.entity";
import { ExperienceMutationDto } from "../dtos/ExperienceMutation.dto";

export class ExperienceMutationMapper {
  static toDto(experience: ExperienceEntity): ExperienceMutationDto {
    return {
      employment_type: experience.employementType,
      endDate: experience.endDate,
      location: experience.location,
      name: experience.name,
      position: experience.position,
      startDate: experience.startDate,
    };
  }
}
