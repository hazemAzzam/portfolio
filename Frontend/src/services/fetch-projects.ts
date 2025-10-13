import { ProjectType } from "@/types";

export const fetchProjects = async (): Promise<ProjectType[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/?format=json`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate:
            parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME || "3600") || 3600,
        },
      }
    );

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  // Return empty array when API is unavailable
  return [];
};
