import apiClient from "@/lib/api";

export const isAuthenticated = async () => {
  try {
    const response = await apiClient.get("/is-authenticated/");
    return response.data;
  } catch (error: unknown) {
    if (error && typeof error === "object" && "response" in error) {
      const axiosError = error as { response?: { status?: number } };
      if (axiosError.response?.status === 401) {
        return { is_authenticated: false };
      }
    }
    throw error;
  }
};
