import { apiClient } from "@/lib/api";
import { SkillType, SkillTypeWithId } from "../_types";

export const getAllSkills = async (): Promise<SkillTypeWithId[]> => {
  const response = await apiClient.get("/skills");
  return response.data;
};

export const createSkill = async (
  data: SkillType
): Promise<SkillTypeWithId> => {
  const response = await apiClient.post("/skills/", data);
  return response.data;
};

export const deleteSkill = async (id: string): Promise<void> => {
  await apiClient.delete(`/skills/${id}/`);
};

export const updateSkill = async (
  data: SkillTypeWithId
): Promise<SkillTypeWithId> => {
  const response = await apiClient.put(`/skills/${data.id}/`, data);
  return response.data;
};
