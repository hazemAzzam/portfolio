
import { ExperienceEntity } from "../../_domain/entites/Experience.entity";
import { ExperiencesRepository } from "../../_infrastructure/repositories/Experiences.repositories";

export class GetAllExperiencesUseCase {
    constructor(private readonly experiencesRepository: ExperiencesRepository) {}

    async execute(): Promise<ExperienceEntity[]> {
        return this.experiencesRepository.getAllExperiences();
    }
}