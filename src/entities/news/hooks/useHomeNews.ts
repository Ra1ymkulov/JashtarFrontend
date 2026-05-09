import { useQuery } from "@tanstack/react-query";
import { getHomeNews, newsKeys } from "../api/newsApi";

export const useHomeNews = () => {
  return useQuery({
    queryKey: newsKeys.homePage(),
    queryFn: getHomeNews,
  });
};
