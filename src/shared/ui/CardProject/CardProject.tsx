import Image from "next/image";
import Link from "next/link";
import scss from "./CardProject.module.scss";

interface CardProps {
    title: string;
    id:number;
    desc: string;
    image:string;
    className?: string;
    ImageWrapperClassName?: string;
    mainContentClassName?: string;
}

export const CardProject = ({ image, title, desc, id }: CardProps) => {
  return (
    <div className={scss.card__container}>
      <div className={scss.ImageWrapper}>
        <Image
          src={image}
          alt="card Image"
          fill
          className={scss.image}
        />
      </div>

      <div className={scss.mainContent}>
        <h1 className={scss.title}>{title}</h1>

        <p className={scss.description}>{desc}</p>

        <Link href={`/projects/${id}`} className={scss.learnMoreButton}>
          Узнать больше
        </Link>
      </div>
    </div>
  );
};