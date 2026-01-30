"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/lib/query-client";
import { LoadScript } from "@react-google-maps/api";

interface QueryProviderProps {
  children: React.ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_GOOGLE_MAPS_API_KEY!}
        libraries={["places"]}
      >
        {children}
      </LoadScript>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
