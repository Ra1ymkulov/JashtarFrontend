import { useQuery } from "@tanstack/react-query";
import { getHomePage, homeKeys } from "../api/homeApi";

export const useHomePage = () => {
  return useQuery({
    queryKey: homeKeys.list(),
    queryFn: getHomePage,
  });
};
