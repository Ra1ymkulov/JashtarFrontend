import { useQuery } from "@tanstack/react-query";
import { getMissionsMovements, movementKeys } from "../api/movementsApi";
import { MissionsMovementsSections } from "../model/types";

export const useMissionsMovements = () => {
  return useQuery<MissionsMovementsSections[]>({
    queryKey: movementKeys.missionsMovements(),
    queryFn: getMissionsMovements,
  });
};
