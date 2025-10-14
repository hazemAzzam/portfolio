import apiClient from "@/lib/api";

export const isAuthenticated = async () => {
  console.log("🔍 [IS-AUTHENTICATED] Starting authentication check...");

  try {
    console.log("🔍 [IS-AUTHENTICATED] Making request to /is-authenticated/");
    const response = await apiClient.get("/is-authenticated/");

    console.log("✅ [IS-AUTHENTICATED] Authentication successful:", {
      isAuthenticated: response.data?.is_authenticated,
      username: response.data?.username,
      isSuperuser: response.data?.is_superuser,
      timestamp: new Date().toISOString(),
    });

    return response.data;
  } catch (error: unknown) {
    console.log("❌ [IS-AUTHENTICATED] Authentication failed:", {
      error: error,
      timestamp: new Date().toISOString(),
    });

    if (error && typeof error === "object" && "response" in error) {
      const axiosError = error as { response?: { status?: number } };
      if (axiosError.response?.status === 401) {
        console.log(
          "🔒 [IS-AUTHENTICATED] 401 Unauthorized - returning not authenticated"
        );
        return { is_authenticated: false };
      }
    }
    throw error;
  }
};
