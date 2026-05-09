import { useQuery } from "@tanstack/react-query";
import { getVideosDetail, mediaKeys } from "../api/mediaApi";

export const useVideosDetail = (id: number) => {
  return useQuery({
    queryKey: mediaKeys.videosDetail(id),
    queryFn: () => getVideosDetail(id),
  });
};
