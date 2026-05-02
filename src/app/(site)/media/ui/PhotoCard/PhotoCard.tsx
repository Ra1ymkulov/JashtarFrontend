import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PhotoCard.module.scss";

interface PhotoCardProps {
  id: number;
  date?: string | null;
  title?: string | null;
  cover_image?: string;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  id,
  date,
  title,
  cover_image,
}) => {
  return (
    <Link href={`/media/photo-gallery/${id}`}>
      <article className={styles.card}>
        <div className={styles.relative}>
          <Image
            src={cover_image || "https://picsum.photos/seed/photo/400/317"}
            alt={title || "Фото"}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.dateContainer}>
            <CalendarIcon className={styles.calendarIcon} />
            <time className={styles.date}>{date || "—"}</time>
          </div>
          <h2 className={styles.title}>{title || "Без названия"}</h2>
        </div>
      </article>
    </Link>
  );
};
