import apiClient from "@/lib/api";
import { cookieUtils } from "@/lib/cookies";

export const getCurrentUser = async () => {
  const response = await apiClient.get("/validate-token", {
    headers: {
      Authorization: `Bearer ${cookieUtils.getAuthToken()}`,
    },
  });
  return response.data;
};
