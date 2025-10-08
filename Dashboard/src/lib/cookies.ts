import Cookies from "js-cookie";

// Cookie utility functions
export const cookieUtils = {
  // Set API key in cookies
  setApiKey: (apiKey: string) => {
    Cookies.set("api-key", apiKey, {
      expires: 7, // 7 days
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
  },

  // Get API key from cookies
  getApiKey: (): string | undefined => {
    return Cookies.get("api-key");
  },

  // Remove API key from cookies
  removeApiKey: () => {
    Cookies.remove("api-key");
  },

  // Set auth token in cookies
  setAuthToken: (token: string) => {
    Cookies.set("authToken", token, {
      expires: 7, // 7 days
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
  },

  // Get auth token from cookies
  getAuthToken: (): string | undefined => {
    return Cookies.get("authToken");
  },

  // Remove auth token from cookies
  removeAuthToken: () => {
    Cookies.remove("authToken");
  },

  // Clear all auth-related cookies
  clearAuth: () => {
    Cookies.remove("authToken");
    Cookies.remove("api-key");
  },

  // Check if API key is set in cookies (overrides env)
  hasApiKeyOverride: (): boolean => {
    return !!Cookies.get("api-key");
  },

  // Get current API key source
  getApiKeySource: (): "cookie" | "env" | "none" => {
    if (Cookies.get("api-key")) return "cookie";
    if (process.env.NEXT_PUBLIC_API_KEY) return "env";
    return "none";
  },
};
