import apiClient from "@/lib/api";

export const login = async (username: string, password: string) => {
  console.log("🔐 [LOGIN] Attempting login for:", username);

  try {
    const response = await apiClient.post("/login/", { username, password });
    console.log("✅ [LOGIN] Login successful for:", username);
    return response.data;
  } catch (error) {
    console.log("❌ [LOGIN] Login failed for:", username);
    throw error;
  }
};
