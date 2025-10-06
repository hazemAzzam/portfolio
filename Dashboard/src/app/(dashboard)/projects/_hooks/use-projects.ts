import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import { handleApiError } from "@/lib/error-handler";
import { toast } from "sonner";
import { CreateProjectType, ProjectType } from "../_types/project-types";

// Types

// API functions
const projectsApi = {
  getAll: async (): Promise<ProjectType[]> => {
    const response = await apiClient.get("/projects");
    return response.data;
  },

  getById: async (id: string): Promise<ProjectType> => {
    const response = await apiClient.get(`/projects/${id}`);
    return response.data;
  },

  create: async (data: CreateProjectType): Promise<ProjectType> => {
    const response = await apiClient.post("/projects/", data);
    return response.data;
  },

  update: async (data: Partial<ProjectType>): Promise<ProjectType> => {
    const response = await apiClient.put(`/projects/${data.id}/`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/projects/${id}/`);
  },

  toggleFeatured: async (id: string): Promise<ProjectType> => {
    const response = await apiClient.post(`/projects/${id}/toggle-featured/`);
    return response.data;
  },
};

// React Query hooks
export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: projectsApi.getAll,
  });
};

export const useProject = (id: string) => {
  return useQuery({
    queryKey: ["projects", id],
    queryFn: () => projectsApi.getById(id),
    enabled: !!id,
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }: { data: CreateProjectType }) =>
      projectsApi.create(data),
    onSuccess: (newProject) => {
      // Invalidate and refetch projects list
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Project created successfully");
    },
    onError: (error: any) => {
      handleApiError(error, "Failed to create project");
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }: { data: Partial<ProjectType> }) =>
      projectsApi.update(data),
    onSuccess: (updatedProject) => {
      // Invalidate and refetch projects list and specific project
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({
        queryKey: ["projects", updatedProject.id],
      });
      toast.success("Project updated successfully");
    },
    onError: (error: any) => {
      handleApiError(error, "Failed to update project");
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: projectsApi.delete,
    onSuccess: () => {
      // Invalidate and refetch projects list
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("Project deleted successfully");
    },
    onError: (error: any) => {
      handleApiError(error, "Failed to delete project");
    },
  });
};

export const useToggleFeaturedProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => projectsApi.toggleFeatured(id),
    onSuccess: (updatedProject: ProjectType) => {
      // Invalidate and refetch projects list and specific project
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({
        queryKey: ["projects", updatedProject.id],
      });
      toast.success("Project featured successfully");
    },
    onError: (error: any) => {
      handleApiError(error, "Failed to toggle featured project");
    },
  });
};
