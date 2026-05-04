"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  CalendarIcon,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PhotoGallery.module.scss";

const mockAlbums = Array.from({ length: 32 }, (_, i) => ({
  id: i + 1,
  albumName: "Название альбома",
  eventName: "Название события",
  count: Math.floor(Math.random() * 60) + 10,
  cover_image: `https://picsum.photos/400/300?random=${i + 1}`,
}));
const ITEMS_PER_PAGE = 16;

export default function PhotoGalleryPage() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(mockAlbums.length / ITEMS_PER_PAGE);
  const pageItems = mockAlbums.slice(
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
        <span className={styles.current}>Фотогалерея</span>
      </nav>

      {/* Заголовок */}
      <div className={styles.header}>
        <h1 className={styles.title}>Фотогалерея</h1>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <span className={styles.buttonText}>Выбрать дату</span>
            <CalendarIcon className={styles.buttonIcon} />
          </button>
          <button className={styles.button} onClick={() => router.back()}>
            <span className={styles.buttonText}>Вернуться назад</span>
            <ArrowLeft className={styles.buttonIcon} />
          </button>
        </div>
      </div>

      {/* Грид альбомов */}
      <div className={styles.gallery}>
        {pageItems.map((album) => (
          <Link
            key={album.id}
            href={`/media/photo-gallery/${album.id}`}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <span className={styles.count}>
                <ImageIcon size={12} />
                {album.count}
              </span>
              <Image
                src={album.cover_image}
                alt={album.albumName}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className={styles.cardContent}>
              <p className={styles.albumName}>{album.albumName}</p>
              <p className={styles.eventName}>&quot;{album.eventName}&quot;</p>
            </div>
          </Link>
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
