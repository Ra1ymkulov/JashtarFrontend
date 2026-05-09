import { useQuery } from "@tanstack/react-query";
import { getProjectsDetail, projectsKeys } from "../api/projectsApi";

export const useNewsDetail = (id: number) => {
  return useQuery({
    queryKey: projectsKeys.details(id),
    queryFn: () => getProjectsDetail(id),
  });
};
