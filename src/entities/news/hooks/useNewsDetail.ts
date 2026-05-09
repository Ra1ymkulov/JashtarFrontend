import { useQuery } from "@tanstack/react-query";
import { getNewsDetail, newsKeys } from "../api/newsApi";

export const useNewsDetail = (id: number) => {
  return useQuery({
    queryKey: newsKeys.detail(id),
    queryFn: () => getNewsDetail(id),
  });
};
