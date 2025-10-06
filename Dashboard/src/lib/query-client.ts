import { QueryClient } from "@tanstack/react-query";

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: (failureCount, error: unknown) => {
        // Don't retry on 4xx errors except 408, 429
        if (error && typeof error === "object" && "response" in error) {
          const apiError = error as { response?: { status?: number } };
          if (
            apiError.response?.status &&
            apiError.response.status >= 400 &&
            apiError.response.status < 500
          ) {
            if (
              apiError.response.status === 408 ||
              apiError.response.status === 429
            ) {
              return failureCount < 2;
            }
            return false;
          }
        }
        // Retry up to 3 times for other errors
        return failureCount < 3;
      },
    },
    mutations: {
      retry: false,
    },
  },
});
