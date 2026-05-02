import Image from "next/image";
import Link from "next/link";
import styles from "./PhotoCard.module.scss";
interface PhotoCardProps {
  id: string | number;
  src: string;
  alt: string;
  albumName: string;
  eventName: string;
  count?: number;
  href?: string;
}

export default function PhotoCard({
  id,
  src,
  alt,
  albumName,
  eventName,
  count,
  href,
}: PhotoCardProps) {
  const card = (
    <div className="photo-card">
      <div className="photo-card__image-wrapper">
        {count !== undefined && (
          <span className="photo-card__count">{count}</span>
        )}
        <Image
          src={src}
          alt={alt}
          fill
          className="photo-card__img"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="photo-card__info">
        <p className="photo-card__album">{albumName}</p>
        <p className="photo-card__event">&quot;{eventName}&quot;</p>
      </div>
    </div>
  );

  if (href) return <Link href={href}>{card}</Link>;
  return card;
}
