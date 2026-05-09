import { useQuery } from "@tanstack/react-query";
import { getProjectsPage, projectsKeys } from "../api/projectsApi";

export const useProjectsPage = () => {
  return useQuery({
    queryKey: projectsKeys.projectsPage(),
    queryFn: getProjectsPage,
  });
};
