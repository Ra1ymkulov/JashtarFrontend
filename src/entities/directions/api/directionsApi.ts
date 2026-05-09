import { DirectionsSections } from "../model/types";
import { axiosInstance } from "@/src/shared/api";

export const directionsKeys = {
  all: ["directions"],
  directionsPage: () => [...directionsKeys.all, "list"] as const,
};
export const getDirectionsPage = async (): Promise<DirectionsSections> => {
  const { data } = await axiosInstance.get("/directions/");
  return data;
};
