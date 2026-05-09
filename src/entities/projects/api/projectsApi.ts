import { axiosInstance } from "@/src/shared/api";
import type { Projects, ProjectsSection } from "../model/types";

export const projectsKeys = {
  all: ["projects"] as const,
  projectsPage: () => [...projectsKeys.all, "list"] as const,
  details: (id: number) => [...projectsKeys.all, "detail", id] as const,
};
export const getProjectsPage = async (): Promise<ProjectsSection[]> => {
  const { data } = await axiosInstance.get("/project/projects/");
  return data;
};
export const getProjectsDetail = async (id: number): Promise<Projects> => {
  const { data } = await axiosInstance.get(`/project/projects-detail/${id}`);
  return data;
};
