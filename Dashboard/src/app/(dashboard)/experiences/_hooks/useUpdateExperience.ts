import { useMutation } from "@tanstack/react-query";
import { updateExperienceUseCase } from "../_di";
import { ExperienceEntity } from "../_domain/entites/Experience.entity";
import { queryClient } from "@/lib/query-client";
import { toast } from "sonner";

export const useUpdateExperience = () => {
  return useMutation({
    mutationFn: async ({
      id,
      experience,
    }: {
      id: string;
      experience: ExperienceEntity;
    }) => {
      try {
        const updatedExperience = await updateExperienceUseCase.excute(
          id,
          experience,
        );
        queryClient.invalidateQueries({ queryKey: ["experiences"] });
        toast.success(`Update: ${updatedExperience.name}`);
        return JSON.parse(JSON.stringify(updatedExperience));
      } catch (error) {
        console.log(error);
      }
    },
  });
};
