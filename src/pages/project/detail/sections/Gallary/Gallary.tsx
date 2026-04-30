import Image from "next/image";
import scss from "./Gallary.module.scss";

interface ImageItem {
  id: number;
  image: string;
}

interface Props {
  images?: ImageItem[];
}

export function Gallery({ images = [] }: Props) {
  const count = images.length;

  return (
    <section className={scss.photoGallery}>
      <div className={`${scss.gallery} ${scss[`gallery_${count}`]}`}>
        {images.map((image, index) => (
          <div key={image.id} className={scss[`p${index + 1}`]}>
            <Image
              src={image.image}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}