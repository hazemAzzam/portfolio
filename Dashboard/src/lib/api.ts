import axios from "axios";
import { config } from "./config";

// Create axios instance with base configuration
export const apiClient = axios.create({
  baseURL: config.apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token if available
// apiClient.interceptors.request.use(
//   (config) => {
//     // Add auth token from localStorage or context if available
//     const token =
//       typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login or clear token
      if (typeof window !== "undefined") {
        localStorage.removeItem("authToken");
        // You can add redirect logic here
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
