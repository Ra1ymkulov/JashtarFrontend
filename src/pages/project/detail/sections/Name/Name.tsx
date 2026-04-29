import scss from './Name.module.scss';
import Image from 'next/image';

interface Props {
  title: string;
  fullText: string;
  image: string;
}

export const Name = ({ title, fullText, image }: Props) => {
  return (
    <section className={scss.projectNameSection}>
      <div className={scss.projectHeader}>
        <h1 className={scss.title}>Проект {title}</h1>
      </div>

      <div className={scss.projectDesc}>
        <p>{fullText}</p>
      </div>

      <div className={scss.imageWrapper}>
        <Image src={image} alt={title} layout="fill" style={{ objectFit: 'cover' }} />
      </div>
    </section>
  );
};
