export interface Projects {
  id: number;
  title: string;
  image: string;
  full_text: string;
  goals_title: string;
  goals: Goals[];
  gallery_images: GoalsImage[];
}
interface Goals {
  id: number;
  text: string;
}
interface GoalsImage {
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
