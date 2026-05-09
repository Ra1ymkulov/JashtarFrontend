import { useQuery } from "@tanstack/react-query";
import { getAlbumsDetail, mediaKeys } from "../api/mediaApi";

export const useAlbumsDetail = (id: number) => {
  return useQuery({
    queryKey: mediaKeys.albumsDetail(id),
    queryFn: () => getAlbumsDetail(id),
  });
};
