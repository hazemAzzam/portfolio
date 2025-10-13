import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createSkill,
  deleteSkill,
  getAllSkills,
  updateSkill,
} from "../_services";
import { toast } from "sonner";

export const useSkills = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: getAllSkills,
  });
};

export const useSkillOptions = () => {
  return useQuery({
    queryKey: ["skill-options"],
    queryFn: getAllSkills,
    select: (data) => {
      return data.map((skill) => ({
        value: skill.id,
        label: skill.name,
      }));
    },
  });
};

export const useCreateSkill = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createSkill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["skills"] });
      toast.success("Skill created successfully");
    },
  });
};

export const useDeleteSkill = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteSkill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["skills"] });
      toast.success("Skill deleted successfully");
    },
  });
};

export const useUpdateSkill = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateSkill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["skills"] });
      toast.success("Skill updated successfully");
    },
  });
};
