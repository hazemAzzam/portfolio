import apiClient from "./api";

export const isAuthenticated = async () => {
  try {
    const response = await apiClient.get("/is-authenticated/");
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      return { is_authenticated: false };
    }
    throw error; // Re-throw other errors
  }
};
