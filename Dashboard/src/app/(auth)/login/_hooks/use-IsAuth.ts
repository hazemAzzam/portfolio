import { useQuery } from "@tanstack/react-query";
import { isAuthenticated } from "../_services/is-authenticated";

export const useIsAuth = () => {
  return useQuery({
    queryKey: ["isAuthenticated"],
    queryFn: isAuthenticated,
  });
};
