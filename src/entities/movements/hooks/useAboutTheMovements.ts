import { useQuery } from "@tanstack/react-query";
import { getAboutTheMovements, movementKeys } from "../api/movementsApi";
import { AboutTheMovementSections } from "../model/types";

export const useAboutTheMovements = () => {
  return useQuery<AboutTheMovementSections[], Error>({
    queryKey: movementKeys.aboutTheMovements(),
    queryFn: getAboutTheMovements,
  });
};
