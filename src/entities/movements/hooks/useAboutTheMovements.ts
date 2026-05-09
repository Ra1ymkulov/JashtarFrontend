import { useQuery } from "@tanstack/react-query";
import { getAboutTheMovements, movementKeys } from "../api/movementsApi";

export const useAboutTheMovements = () => {
  return useQuery({
    queryKey: movementKeys.aboutTheMovements(),
    queryFn: getAboutTheMovements,
  });
};
