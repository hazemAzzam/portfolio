import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getPersonalInfo,
  updatePersonalInfo,
} from "../_services/personal-info-services";
import { toast } from "sonner";
import { handleApiError, ApiError } from "@/lib/error-handler";

export const usePersonalInfo = () => {
  return useQuery({
    queryKey: ["personal-info"],
    queryFn: getPersonalInfo,
  });
};

export const useUpdatePersonalInfo = () => {
  return useMutation({
    mutationFn: updatePersonalInfo,
    onSuccess: () => {
      toast.success("Personal info updated successfully");
    },
    onError: (error: unknown) => {
      handleApiError(error as ApiError, "Failed to update personal info");
    },
  });
};
