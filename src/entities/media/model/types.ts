export interface MediaSection {
  id: number;
  photo_title: string;
  albums: Albums[];
  video_title: string;
  videos: Videos[];
}
export interface MediaSectionAlbums {
  count: number;
  next: null;
  previous: null;
  results: Albums[];
}
export interface MediaSectionVideos {
  count: number;
  next: null;
  previous: null;
  results: Videos[];
}
export interface Videos {
  id: number;
  title: string;
  date: Date;
  thumbnail: string;
  video_url: string;
}
export interface Albums {
  id: number;
  title: string;
  cover_image: string;
  date: Date;
  photos_count: number;
}
