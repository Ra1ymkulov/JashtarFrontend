import { axiosInstance } from "@/src/shared/api";
import { Footer } from "../model/types";

export const footerKeys = {
  all: ["footer"] as const,
  info: () => [...footerKeys.all, "info"] as const,
};
export const getFooter = async (): Promise<Footer> => {
  const { data } = await axiosInstance.get("/footer/");
  return data;
};
