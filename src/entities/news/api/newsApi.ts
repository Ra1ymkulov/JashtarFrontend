import { axiosInstance } from "@/src/shared/api";
import type { News, NewsSection } from "../model/types";

export const newsKeys = {
  all: ["news"] as const,
  homePage: () => [...newsKeys.all, "home"] as const,
  newsPage: () => [...newsKeys.all, "list"] as const,
  detail: (id: number) => [...newsKeys.all, "detail", id] as const,
};
export const getHomeNews = async (): Promise<News[]> => {
  const { data } = await axiosInstance.get("/news/home_news/");
  return data;
};
export const getNewsPage = async (): Promise<NewsSection[]> => {
  const { data } = await axiosInstance.get("/news/news_page/");
  return data;
};
export const getNewsDetail = async (id: number): Promise<News> => {
  const { data } = await axiosInstance.get(`/news/${id}/`);
  return data;
};
