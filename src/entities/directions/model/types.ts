export interface Directions {
  id: number;
  title: string;
  short_description: string;
  full_description: string;
  image: string;
  telegram_url: string;
  instagram_url: string;
}
export interface DirectionsSections {
  id: number;
  title: string;
  items: Directions[];
}
