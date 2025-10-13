import { ProjectType } from "@/types";

export const fetchProjects = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/`, {
    next: {
      revalidate:
        parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME || "3600") || 3600,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return [] as ProjectType[];
    });
  return response;
};
