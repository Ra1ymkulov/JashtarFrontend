"use client";

import { useState } from "react";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import styles from "./Album.module.scss";

const albumNames: { [key: string]: string } = {
  "1": "Природа Казахстана",
  "2": "Городские пейзажи",
  "3": "Культурное наследие",
  "4": "Спортивные события",
  "5": "Научные достижения",
  "6": "Молодежные форумы",
};

const ITEMS_PER_PAGE = 8;

export default function AlbumPage() {
  const params = useParams();
  const albumId = params?.albumId as string;
  const albumTitle = albumNames[albumId] || `Альбом ${albumId}`;
  const [page, setPage] = useState(1);

  const allItems = Array.from({ length: 48 }, (_, i) => ({
    id: i + 1,
    src: `https://picsum.photos/seed/${albumId}-${i}/400/300`,
    alt: `Фото ${i + 1}`,
    title: `Фото ${i + 1}`,
  }));

  const totalPages = Math.ceil(allItems.length / ITEMS_PER_PAGE);
  const pageItems = allItems.slice(
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
        <Link href="/media/photo-gallery" className={styles.clickable}>
          Фотогалерея
        </Link>
        <ChevronRight size={14} />
        <span className={styles.current}>Альбом &quot;{albumTitle}&quot;</span>
      </nav>

      {/* Заголовок */}
      <h1 className={styles.title}>&quot;{albumTitle}&quot;</h1>

      {/* Грид фото */}
      <div className={styles.gallery}>
        {pageItems.map((photo) => (
          <div key={photo.id} className={styles.galleryItem}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className={styles.galleryImage}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className={styles.galleryOverlay}>
              <p className={styles.galleryTitle}>{photo.title}</p>
            </div>
          </div>
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
