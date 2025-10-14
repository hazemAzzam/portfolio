import apiClient from "@/lib/api";

export const isAuthenticated = async () => {
  const response = await apiClient.get("/is-authenticated/");
  return response.data;
};
