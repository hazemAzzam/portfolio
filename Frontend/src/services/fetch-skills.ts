import { SkillType } from "@/types";

export const fetchSkills = async (): Promise<SkillType[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills/`, {
    next: {
      revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME || "3600"),
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log("err fetching skills", err);
      return [] as SkillType[];
    });
  return response;
};
