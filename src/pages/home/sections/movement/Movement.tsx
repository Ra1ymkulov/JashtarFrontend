"use client";
import { CardMovement } from "@/src/shared/ui/cardMovement/CardMovement";
import scss from "./Movement.module.scss";
import SectionHeader from "@/src/shared/ui/sectionHeader/SectionHeader";
import { useHomePage } from "@/src/entities/home";
import { Loading } from "@/src/shared/ui/loading/Loading";

const Movement = () => {
  const { data: home, isLoading, isError, error } = useHomePage();
  if (isLoading) return <Loading />;
  if (isError) return <div>{error.message}</div>;
  return (
    <div className={scss.movement}>
      <div className="container">
        <div className={scss.content}>
          <SectionHeader
            title={home?.about_movent}
            description={home?.about_blocks[0].description}
            layout="center"
            descriptionWidth="small"
          />
          <div className={scss.cardContent}>
            {home?.about_blocks[0].advantages.map((movement, index) => (
              <CardMovement
                key={index}
                title={movement.title}
                description={movement.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movement;
