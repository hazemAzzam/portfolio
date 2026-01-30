import { CreateNewExperienceUseCase } from "../_application/use-cases/CreateNewExperience.UseCase";
import { GetAllExperiencesUseCase } from "../_application/use-cases/GetAllExperiences.UseCase";
import { UpdateExperienceUseCase } from "../_application/use-cases/UpdateExperience.UseCase";
import { ExperiencesRepository } from "../_infrastructure/repositories/Experiences.repositories";

export const experiencesRepository = new ExperiencesRepository();

export const getAllExperiencesUseCase = new GetAllExperiencesUseCase(
  experiencesRepository,
);
export const createNewExperienceUseCase = new CreateNewExperienceUseCase(
  experiencesRepository,
);
export const updateExperienceUseCase = new UpdateExperienceUseCase(
  experiencesRepository,
);
