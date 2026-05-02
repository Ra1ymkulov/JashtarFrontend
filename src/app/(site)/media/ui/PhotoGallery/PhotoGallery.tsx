"use client";

import { ArrowRightIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PhotoCard } from "../PhotoCard/PhotoCard";
import styles from "./PhotoGallery.module.scss";

const mockImages = [
  {
    id: 1,
    title: 'Название фото "Название"',
    date: "12.03.2025",
    cover_image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400",
  },
  {
    id: 2,
    title: 'Название фото "Название"',
    date: "12.03.2025",
    cover_image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400",
  },
  {
    id: 3,
    title: 'Название фото "Название"',
    date: "12.03.2025",
    cover_image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
  },
  {
    id: 4,
    title: 'Название фото "Название"',
    date: "12.03.2025",
    cover_image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400",
  },
];

export const PhotoGallery: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Link href="/" className={styles.clickable}>
          Главная
        </Link>
        <ChevronRight size={14} />
        <span
          className={styles.clickable}
          onClick={() => router.push("/media")}
        >
          Медиа
        </span>
        <ChevronRight size={14} />
        {/* <span className={styles.current}>Фотогалерея</span> */}
      </div>

      <div className={styles.headerWrapper}>
        <h1 className={styles.title}>Фотогалерея</h1>
        <button
          onClick={() => router.push("/media/photo-gallery")}
          className={styles.button}
        >
          <span className={styles.buttonText}>Все фото</span>
          <ArrowRightIcon className={styles.buttonIcon} />
        </button>
      </div>

      <main className={styles.gallery}>
        {mockImages.map((item) => (
          <PhotoCard
            key={item.id}
            id={item.id}
            date={item.date}
            title={item.title}
            cover_image={item.cover_image}
          />
        ))}
      </main>
    </div>
  );
};
