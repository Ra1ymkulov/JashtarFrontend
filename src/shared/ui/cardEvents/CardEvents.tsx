import scss from "./CardEvents.module.scss";

interface ICardEventsProps {
  id: string | number;
  title: string;
  description?: string;
  date?: string;
  image?: string;
  onClick?: (id: string | number) => void;
}

export const CardEvents: React.FC<ICardEventsProps> = ({
  id,
  title,
  description,
  date,
  image,
  onClick,
}) => {
  return (
    <div className={scss.card} onClick={() => onClick?.(id)}>
      <div className={scss.imageWrap}>
        {image && <img src={image} alt={title} className={scss.image} />}
      </div>
      <div className={scss.body}>
        <div className={scss.dateBadge}>{date ?? "—"}</div>
        <div className={scss.info}>
          <p className={scss.title}>{title}</p>
          {description && <p className={scss.description}>{description}</p>}
        </div>
      </div>
    </div>
  );
};
