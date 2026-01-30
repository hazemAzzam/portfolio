import { ExperienceEntity } from "../../_domain/entites/Experience.entity";
import { ExperiencesRepository } from "../../_infrastructure/repositories/Experiences.repositories";

export class UpdateExperienceUseCase {
  constructor(private readonly experiencesRepository: ExperiencesRepository) {}

  async excute(
    id: string,
    experience: ExperienceEntity,
  ): Promise<ExperienceEntity> {
    return await this.experiencesRepository.updateExperience(id, experience);
  }
}
