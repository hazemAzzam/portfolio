"use server";

import { SkillType } from "@/types";
import { cookies } from "next/headers";

export const fetchSkills = async (): Promise<SkillType[]> => {
  cookies();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills/`)
    .then((res) => res.json())
    .catch((err) => {
      console.log("err fetching skills", err);
      return [] as SkillType[];
    });
  return response;
};
