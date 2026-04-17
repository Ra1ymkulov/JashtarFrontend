import scss from "./CardMaterial.module.scss";

interface ICardMaterialProps {
  title: string;
  price: number;
  image: string;
  onClick: () => void;
}

export const CardMaterial: React.FC<ICardMaterialProps> = ({
  onClick,
  image,
  title,
  price,
}) => {
  return (
    <div onClick={() => onClick()} className={scss.card}>
      <img src={image} alt={image} />
      <h1>{title}</h1>
      <p>{price} KGS</p>
    </div>
  );
};
