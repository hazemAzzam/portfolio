import { ExperienceEntity } from "../../_domain/entites/Experience.entity";
import { ExperiencesRepository } from "../../_infrastructure/repositories/Experiences.repositories";

export class CreateNewExperienceUseCase {
  constructor(private readonly experiencesRepository: ExperiencesRepository) {}

  async execute(experience: ExperienceEntity): Promise<ExperienceEntity> {
    return this.experiencesRepository.createNewExperience(experience);
  }
}
