import apiClient from "@/lib/api";

export const login = async (username: string, password: string) => {
  try {
    const response = await apiClient.post("/login/", { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
