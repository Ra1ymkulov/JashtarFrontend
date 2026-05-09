import { useQuery } from "@tanstack/react-query";
import { getMissionsMovements, movementKeys } from "../api/movementsApi";

export const useMissionsMovements = () => {
  return useQuery({
    queryKey: movementKeys.missionsMovements(),
    queryFn: getMissionsMovements,
  });
};
