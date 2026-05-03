"use client";
import { CardMovement } from "@/src/shared/ui/cardMovement/CardMovement";
import scss from "./Movement.module.scss";

const Movement = () => {
  const data = [
    {
      id: 1,
      title: "Преимущество",
      description:
        "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности",
    },
    {
      id: 2,
      title: "Преимущество",
      description:
        "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности",
    },
    {
      id: 3,
      title: "Преимущество",
      description:
        "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности",
    },
    {
      id: 4,
      title: "Преимущество",
      description:
        "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности",
    },
  ];
  return (
    <div className={scss.movement}>
      <div className="container">
        <div className={scss.content}>
          <h1 className={scss.titleContent}>О движении</h1>
          <p className={scss.descriptionContent}>
            Внезапно, ключевые особенности структуры проекта являются только
            методом политического участия и в равной степени предоставлены сами
            себе.
          </p>
          <div className={scss.cardContent}>
            {data.map((movement, index) => (
              <CardMovement
                key={index}
                title={movement.title}
                description={movement.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movement;
