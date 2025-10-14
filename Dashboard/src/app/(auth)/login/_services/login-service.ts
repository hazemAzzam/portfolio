import apiClient from "@/lib/api";
import { cookieUtils } from "@/lib/cookies";

export const login = async (username: string, password: string) => {
  const response = await apiClient.post("/login/", { username, password });

  if (response.status === 200) {
    cookieUtils.setAuthToken(response.data.token);
  }
  return response.data;
};
