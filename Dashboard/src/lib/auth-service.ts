import apiClient from "./api";

export const isAuthenticated = async () => {
  console.log("🔍 [AUTH] Checking authentication...");

  try {
    const response = await apiClient.get("/is-authenticated/");
    console.log("✅ [AUTH] User authenticated:", response.data?.username);
    return response.data;
  } catch (error: unknown) {
    console.log("❌ [AUTH] Authentication failed");

    if (error && typeof error === "object" && "response" in error) {
      const axiosError = error as { response?: { status?: number } };
      if (axiosError.response?.status === 401) {
        console.log("🔒 [AUTH] 401 - Not authenticated");
        return { is_authenticated: false };
      }
    }
    throw error;
  }
};
