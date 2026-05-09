import { axiosInstance } from "@/src/shared/api";
import {
  Albums,
  MediaSection,
  MediaSectionAlbums,
  MediaSectionVideos,
  Videos,
} from "../model/types";

export const mediaKeys = {
  all: ["media"] as const,
  mediaPage: () => [...mediaKeys.all, "list"] as const,
  albums: () => [...mediaKeys.all, "albums"] as const,
  albumsDetail: (id: number) =>
    [...mediaKeys.all, "albums", "detail", id] as const,
  videos: () => [...mediaKeys.all, "videos"] as const,
  videosDetail: (id: number) =>
    [...mediaKeys.all, "videos", "detail", id] as const,
};

export const getMediaPage = async (): Promise<MediaSection> => {
  const { data } = await axiosInstance.get("/media/");
  return data;
};
export const getAlbums = async (): Promise<MediaSectionAlbums> => {
  const { data } = await axiosInstance.get("/media/albums/");
  return data;
};
export const getAlbumsDetail = async (id: number): Promise<Albums> => {
  const { data } = await axiosInstance.get(`/media/albums/${id}/`);
  return data;
};
export const getVideos = async (): Promise<MediaSectionVideos> => {
  const { data } = await axiosInstance.get("/media/videos/");
  return data;
};
export const getVideosDetail = async (id: number): Promise<Videos> => {
  const { data } = await axiosInstance.get(`/media/videos/${id}`);
  return data;
};
