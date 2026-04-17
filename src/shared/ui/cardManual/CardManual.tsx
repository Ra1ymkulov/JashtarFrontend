"use client";
import scss from "./CardManual.module.scss";

interface ICardManualProps {
  item: any;
}

export const CardManual: React.FC<ICardManualProps> = ({ item }) => {
  return (
    <div className={scss.card}>
      <img src={item.image} alt={item.image} />
      <h4>{item.name}</h4>
      <p>{item.position}</p>
    </div>
  );
};
