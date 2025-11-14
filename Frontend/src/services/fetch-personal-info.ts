"use server";

import { PersonalInfoType } from "@/types";
import { cookies } from "next/headers";

export const fetchPersonalInfo = async (): Promise<PersonalInfoType | null> => {
  cookies();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/personal-info/?format=json`,
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
    console.error("Error fetching personal info:", error);
  }

  // Return null when API is unavailable
  return null;
};
