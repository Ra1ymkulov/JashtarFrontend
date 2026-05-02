"use client";

import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { VideoCard } from "../VideoCard/VideoCard";
import styles from "./VideoGallery.module.scss";

const mockVideos = [
  {
    id: 1,
    date: "12.03.2025",
    title: 'Название видео "Название"',
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    date: "10.03.2025",
    title: 'Название видео "Название"',
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    date: "08.03.2025",
    title: 'Название видео "Название"',
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export const VideoGallery: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Видеотека</h1>
        <button
          className={styles.button}
          onClick={() => router.push("/media/video")}
        >
          <span className={styles.buttonText}>Все видео</span>
          <ArrowRightIcon className={styles.buttonIcon} />
        </button>
      </header>

      <main className={styles.gallery}>
        {mockVideos.length > 0 ? (
          mockVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              date={video.date}
              title={video.title}
              videoUrl={video.videoUrl}
            />
          ))
        ) : (
          <p>Нет видео</p>
        )}
      </main>
    </div>
  );
};
