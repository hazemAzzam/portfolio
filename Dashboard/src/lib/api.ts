import axios from "axios";

// Create axios instance with base configuration
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable credentials for cookie transmission
});

// Add simple request/response logging
apiClient.interceptors.request.use(
  (config) => {
    console.log("🚀 [API]", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error("❌ [API REQUEST ERROR]", error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log("✅ [API]", response.status, response.config.url);
    return response;
  },
  (error) => {
    console.log("❌ [API]", error.response?.status, error.config?.url);
    return Promise.reject(error);
  }
);

export default apiClient;
