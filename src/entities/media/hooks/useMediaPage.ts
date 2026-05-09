import { useQuery } from "@tanstack/react-query";
import { getMediaPage, mediaKeys } from "../api/mediaApi";

export const useMediaPage = () => {
  return useQuery({
    queryKey: mediaKeys.mediaPage(),
    queryFn: getMediaPage,
  });
};
