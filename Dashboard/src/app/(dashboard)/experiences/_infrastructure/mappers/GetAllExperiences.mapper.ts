import { ExperienceEntity } from "../../_domain/entites/Experience.entity";
import { EmploymentType } from "../../_domain/value-objects/EmploymentTypes.type";
import { GetAllExperiencesDto } from "../dtos/GetAllExperiences.dto";

export class GetAllExperiencesMapper {
  static toDomain(dto: GetAllExperiencesDto): ExperienceEntity {
    console.log("dto", dto);
    return new ExperienceEntity({
      id: dto.id,
      name: dto.name,
      position: dto.position,
      startDate: dto.startDate,
      endDate: dto.endDate,
      employementType: dto.employment_type as EmploymentType,
      location: dto.location,
    });
  }
  static toDomainArray(dtos: GetAllExperiencesDto[]): ExperienceEntity[] {
    return dtos.map(this.toDomain);
  }
}
