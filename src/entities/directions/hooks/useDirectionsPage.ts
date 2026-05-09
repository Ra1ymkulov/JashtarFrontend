import { useQuery } from "@tanstack/react-query";
import { directionsKeys, getDirectionsPage } from "../api/directionsApi";

export const useDirectionPage = () => {
  return useQuery({
    queryKey: directionsKeys.directionsPage(),
    queryFn: getDirectionsPage,
  });
};
