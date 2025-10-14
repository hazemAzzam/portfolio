import { useMutation } from "@tanstack/react-query";
import { getCurrentUser } from "../_services/get-current-user";

export const useCurrentUser = () => {
  return useMutation({
    mutationFn: getCurrentUser,
  });
};
