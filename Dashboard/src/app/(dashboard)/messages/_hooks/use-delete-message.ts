"use client";

import { useMutation } from "@tanstack/react-query";
import { deleteMessage } from "../_services/delete-message";
import { queryClient } from "@/lib/query-client";

export const useDeleteMessage = () => {
  return useMutation({
    mutationFn: deleteMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });
};
