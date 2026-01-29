export interface ProjectType {
  id: string;
  title: string;
  status: "Active" | "Completed" | "On Hold" | "Cancelled";
  overview: string;
  description: string;
  achievements_list: string[];
  challenges_list: string[];
  technologies?: SkillSelectType[];
  startDate?: string;
  endDate?: string;
  role: string;
  category?: string;
  teamSize?: number;
  liveUrl?: string;
  githubUrl?: string;
  images_list: string[];
  featured: boolean;
  showInPortfolio: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectType
  extends Omit<
    ProjectType,
    | "achievements_list"
    | "challenges_list"
    | "images_list"
    | "id"
    | "createdAt"
    | "updatedAt"
  > {
  achievements?: string[];
  challenges?: string[];
  images?: string[];
}

export interface SkillSelectType {
  value: string;
  label: string;
}
