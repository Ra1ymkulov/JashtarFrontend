import scss from "./CardMovement.module.scss";

interface ICardMovementProps {
  title: string;
  description: string;
}

export const CardMovement: React.FC<ICardMovementProps> = ({
  title,
  description,
}) => {
  return (
    <div className={scss.cardMovement}>
      <h4 className={scss.title}>{title}</h4>
      <p className={scss.description}>{description}</p>
      <div className={scss.circleBorder}>
        <div className={scss.circle}></div>
      </div>
    </div>
  );
};
