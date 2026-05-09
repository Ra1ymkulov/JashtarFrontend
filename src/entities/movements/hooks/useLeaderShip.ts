import { useQuery } from "@tanstack/react-query";
import { getLeaderShip, movementKeys } from "../api/movementsApi";

export const useLeaderShip = () => {
  return useQuery({
    queryKey: movementKeys.leaderShip(),
    queryFn: getLeaderShip,
  });
};
