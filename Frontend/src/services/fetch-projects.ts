"use server";

import { ProjectType } from "@/types";
import { cookies } from "next/headers";

export const fetchProjects = async (): Promise<ProjectType[]> => {
  cookies();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/?format=json&showInPortfolio=true`,
      {
        headers: {
          "Content-Type": "application/json",
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
