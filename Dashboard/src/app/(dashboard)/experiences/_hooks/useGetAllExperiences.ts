import { useQuery } from "@tanstack/react-query";
import { getAllExperiencesUseCase } from "../_di";

export const useGetAllExperiences = () => {
    return useQuery({
        queryKey: ["experiences"],
        queryFn: async () => await getAllExperiencesUseCase.execute(),
    });
}