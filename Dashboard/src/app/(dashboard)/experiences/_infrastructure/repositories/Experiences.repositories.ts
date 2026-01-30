import apiClient from "@/lib/api";
import { ExperienceEntity } from "../../_domain/entites/Experience.entity";
import { GetAllExperiencesMapper } from "../mappers/GetAllExperiences.mapper";
import { ApiError } from "next/dist/server/api-utils";
import { ExperienceMutationMapper } from "../mappers/ExperienceMutation.mapper";

export class ExperiencesRepository {
  async getAllExperiences(): Promise<ExperienceEntity[]> {
    const experiences = await apiClient.get("/experiences");

    if (experiences.status !== 200) {
      throw new ApiError(experiences.status, "Failed to fetch experiences");
    }

    return GetAllExperiencesMapper.toDomainArray(experiences.data);
  }

  async createNewExperience(
    exprience: ExperienceEntity,
  ): Promise<ExperienceEntity> {
    const response = await apiClient.post(
      "/experiences/",
      JSON.stringify(exprience),
    );

    console.log("response", response);

    if (response.status !== 201) {
      throw new ApiError(response.status, "error");
    }

    return GetAllExperiencesMapper.toDomain(response.data);
  }

  async updateExperience(
    id: string,
    experience: ExperienceEntity,
  ): Promise<ExperienceEntity> {
    const updateExperienceDto = ExperienceMutationMapper.toDto(experience);

    const response = await apiClient.put(
      `/experiences/${id}/`,
      JSON.stringify(updateExperienceDto),
    );

    if (response.status !== 200) {
      throw new ApiError(response.status, "error");
    }

    return GetAllExperiencesMapper.toDomain(response.data);
  }
}
