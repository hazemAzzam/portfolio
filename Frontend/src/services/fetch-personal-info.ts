import { PersonalInfoType } from "@/types";

export const fetchPersonalInfo = async (): Promise<PersonalInfoType | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/personal-info/?format=json`,
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
    console.error("Error fetching personal info:", error);
  }

  // Return null when API is unavailable
  return null;
};
