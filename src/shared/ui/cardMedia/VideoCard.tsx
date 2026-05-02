import Image from "next/image";
import Link from "next/link";
import "./VideoCard.module.scss";

interface VideoCardProps {
  id: string | number;
  src: string;
  alt: string;
  title: string;
  date: string;
  href?: string;
}

export default function VideoCard({
  id,
  src,
  alt,
  title,
  date,
  href,
}: VideoCardProps) {
  const card = (
    <div className="video-card">
      <div className="video-card__image-wrapper">
        <Image
          src={src}
          alt={alt}
          fill
          className="video-card__img"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="video-card__play">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.85" />
            <polygon points="20,15 36,24 20,33" fill="#1a56db" />
          </svg>
        </div>
      </div>
      <div className="video-card__info">
        <p className="video-card__date">
          <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            style={{ marginRight: 5, verticalAlign: "middle" }}
          >
            <rect
              x="1"
              y="2"
              width="12"
              height="11"
              rx="2"
              stroke="#6b7280"
              strokeWidth="1.2"
            />
            <path
              d="M4 1v2M10 1v2"
              stroke="#6b7280"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path d="M1 5h12" stroke="#6b7280" strokeWidth="1.2" />
          </svg>
          {date}
        </p>
        <p className="video-card__title">{title}</p>
      </div>
    </div>
  );

  if (href) return <Link href={href}>{card}</Link>;
  return card;
}
