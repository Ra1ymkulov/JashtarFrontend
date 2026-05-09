import { useQuery } from "@tanstack/react-query";
import { getNewsPage, newsKeys } from "../api/newsApi";

export const useNewsPage = () => {
  return useQuery({
    queryKey: newsKeys.newsPage(),
    queryFn: getNewsPage,
  });
};
