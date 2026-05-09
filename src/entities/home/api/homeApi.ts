import { axiosInstance } from "@/src/shared/api";
import { HomeSecton } from "../model/types";

export const homeKeys = {
  all: ["home"] as const,
  list: () => [...homeKeys.all, "list"] as const,
};
export const getHomePage = async (): Promise<HomeSecton> => {
  const { data } = await axiosInstance.get("/home/");
  return data;
};
