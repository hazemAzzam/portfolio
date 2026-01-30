"use client";

import { useMutation } from "@tanstack/react-query";
import { ExperienceEntity } from "../_domain/entites/Experience.entity";
import { createNewExperienceUseCase } from "../_di";
import { toast } from "sonner";
import { queryClient } from "@/lib/query-client";

export const useCreateNewExperience = () => {
  return useMutation({
    mutationFn: async (experience: ExperienceEntity) => {
      try {
        const newExperience =
          await createNewExperienceUseCase.execute(experience);
        toast.success(
          `New Experience: ${newExperience.name} - ${newExperience.position}`,
        );
        queryClient.invalidateQueries({ queryKey: ["experiences"] });
        return JSON.parse(JSON.stringify(newExperience));
      } catch (err: unknown) {
        console.error(err);
        throw err;
      }
    },
  });
};
