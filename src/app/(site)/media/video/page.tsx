"use client";

import { useState } from "react";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";
import { VideoCard } from "../../../../pages/media/ui/VideoCard/VideoCard";
import styles from "./Video.module.scss";
import router from "next/router";

const ALL_VIDEOS = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  date: `${12 - (i % 5)}.0${(i % 3) + 1}.2025`,
  title: `Название фото "Наз..."`,
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
}));

const ITEMS_PER_PAGE = 9;

export default function VideoPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(ALL_VIDEOS.length / ITEMS_PER_PAGE);
  const pageItems = ALL_VIDEOS.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 3) pages.push(1, 2, 3, 4, "...", totalPages);
      else if (page >= totalPages - 2)
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      else pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
    }
    return pages;
  };

  const handlePageChange = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      {/* Хлебные крошки */}
      <nav className={styles.breadcrumbs}>
        <Link href="/" className={styles.clickable}>
          Главная
        </Link>
        <ChevronRight size={14} />
        <Link href="/media" className={styles.clickable}>
          Медиа
        </Link>
        <ChevronRight size={14} />
        <span className={styles.current}>Видеотека</span>
      </nav>

      {/* Заголовок */}
      <div className={styles.header}>
        <h1 className={styles.title}>Видеотека</h1>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <span className={styles.buttonText}>Выбрать дату</span>
            <CalendarDays className={styles.buttonIcon} />
          </button>
          <button className={styles.button} onClick={() => router.back()}>
            <span className={styles.buttonText}>Вернуться назад</span>
            <ArrowLeft className={styles.buttonIcon} />
          </button>
        </div>
      </div>

      {/* Грид видео */}
      <div className={styles.gallery}>
        {pageItems.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            date={video.date}
            title={video.title}
            videoUrl={video.videoUrl}
          />
        ))}
      </div>

      {/* Пагинация */}
      <div className={styles.pagination}>
        <button
          className={`${styles.navButton} ${page === 1 ? styles.disabled : ""}`}
          onClick={() => handlePageChange(Math.max(1, page - 1))}
          disabled={page === 1}
        >
          <ArrowLeft className={styles.icon} />
        </button>

        <div className={styles.pageNumbers}>
          {getVisiblePages().map((p, i) => (
            <button
              key={i}
              className={`${styles.pageButton} ${p === page ? styles.active : ""} ${typeof p === "string" ? styles.ellipsis : ""}`}
              onClick={() => typeof p === "number" && handlePageChange(p)}
              disabled={typeof p === "string"}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          className={`${styles.navButton} ${styles.next} ${page === totalPages ? styles.disabled : ""}`}
          onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
        >
          <ArrowRight className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
