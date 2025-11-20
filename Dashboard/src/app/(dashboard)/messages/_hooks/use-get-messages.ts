"use client";

import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../_services/fetch-messages";

export const useGetMessages = () => {
  return useQuery({
    queryKey: ["messages"],
    queryFn: () => getMessages(),
  });
};
