import { axiosInstance } from "@/src/shared/api";
import {
  AboutTheMovementSections,
  LeaderShip,
  MissionsMovementsSections,
} from "../model/types";

export const movementKeys = {
  all: ["movements"] as const,
  aboutTheMovements: () => [...movementKeys.all, "aboutTheMovements"] as const,
  missionsMovements: () => [...movementKeys.all, "missionsMovements"] as const,
  leaderShip: () => [...movementKeys.all, "leaderShip"] as const,
};
export const getAboutTheMovements =
  async (): Promise<AboutTheMovementSections> => {
    const { data } = await axiosInstance.get("/movement/movement/");
    return data;
  };
export const getMissionsMovements =
  async (): Promise<MissionsMovementsSections> => {
    const { data } = await axiosInstance.get("/movement/missions/");
    return data;
  };
export const getLeaderShip = async (): Promise<LeaderShip> => {
  const { data } = await axiosInstance.get("/movement/leadership/");
  return data;
};
