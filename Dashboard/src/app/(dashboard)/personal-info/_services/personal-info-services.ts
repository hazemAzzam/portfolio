import apiClient from "@/lib/api";
import { PersonalInfoType } from "../_types";

export const getPersonalInfo = async (): Promise<PersonalInfoType> => {
  const response = await apiClient.get(`/personal-info`);
  return response.data;
};

export const updatePersonalInfo = async (
  data: PersonalInfoType
): Promise<PersonalInfoType> => {
  const response = await apiClient.put(`/personal-info/`, data);
  return response.data;
};
