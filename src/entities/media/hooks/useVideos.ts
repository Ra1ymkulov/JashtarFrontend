import { useQuery } from "@tanstack/react-query";
import { getVideos, mediaKeys } from "../api/mediaApi";

export const useVideos = () => {
  return useQuery({
    queryKey: mediaKeys.videos(),
    queryFn: getVideos,
  });
};
