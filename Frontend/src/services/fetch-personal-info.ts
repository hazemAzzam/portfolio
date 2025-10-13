import { PersonalInfoType } from "@/types";

export const fetchPersonalInfo = async (): Promise<PersonalInfoType> => {
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

  // Fallback data
  return {
    name: "Hazem Azzam",
    proffessionalTitle: "Full Stack Developer",
    image: "/placeholder-avatar.jpg",
    email: "hazem@example.com",
    github: "hazemAzzam",
    linkedin: "hazemazzam",
    phone: "+1234567890",
    address: "Cairo, Egypt",
    bio: "Passionate developer with expertise in modern web technologies.",
    skills: []
  };
};
