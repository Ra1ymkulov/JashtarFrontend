export interface Projects {
  id: number;
  title: string;
  image: string;
  full_text: string;
  short_text: string;
  goals_title: string;
  goals: Goals[];
  gallery_images: GoalsImage[];
}
export interface Goals {
  id: number;
  text: string;
}
export interface GoalsImage {
  id: number;
  image: string;
  order: number;
}
export interface ProjectsSection {
  id: number;
  title: string;
  goals_title: string;
  project_items: Projects[];
}
