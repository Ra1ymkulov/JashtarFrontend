import { useQuery } from "@tanstack/react-query";
import { getAlbums, mediaKeys } from "../api/mediaApi";

export const useAlbums = () => {
  return useQuery({
    queryKey: mediaKeys.albums(),
    queryFn: getAlbums,
  });
};
