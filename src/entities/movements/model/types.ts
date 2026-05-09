interface MovementItems {
  id: number;
  image: string;
  order: number;
  is_active: boolean;
}
export interface AboutTheMovementSections {
  id: number;
  title: string;
  text: string;
  movement_items: MovementItems[];
}
interface MissionsItems {
  id: number;
  image: string;
  order: number;
  is_active: boolean;
}
export interface MissionsMovementsSections {
  id: number;
  title: string;
  text: string;
  missions_items: MissionsItems[];
}
interface LeadersItems {
  id: number;
  image: string;
  full_name: string;
  position: string;
  order: number;
  is_active: boolean;
}
export interface LeaderShip {
  id: number;
  title: string;
  leaders: LeadersItems[];
}
