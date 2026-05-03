"use client";
import Image from "next/image";
import scss from "./CardProject.module.scss";
import { Button } from "../button/Button";
import { useRouter } from "next/navigation";

interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const CardProject = ({ id, image, title, description }: CardProps) => {
  const router = useRouter();
  return (
    <div className={scss.card__container}>
      <div className={scss.ImageWrapper}>
        <Image src={image} alt="card Image" fill className={scss.image} />
      </div>

      <div className={scss.mainContent}>
        <h1 className={scss.title}>{title}</h1>
        <p className={scss.description}>{description}</p>
        <Button
          text="Узнать больше"
          variant="primary"
          onClick={() => router.push(`/projects/${id}`)}
        />
      </div>
    </div>
  );
};
