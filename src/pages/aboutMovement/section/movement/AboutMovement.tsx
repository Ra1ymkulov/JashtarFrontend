import { useAboutTheMovements } from "@/src/entities/movements";
import scss from "./AboutMovement.module.scss";
import SectionHeader from "@/src/shared/ui/sectionHeader/SectionHeader";
import { Loading } from "@/src/shared/ui/loading/Loading";
import { encodeUrl, onImageError } from "@/src/shared/lib";
import { SectionError } from "@/src/shared/ui/sectionError/SectionError";

const AboutMovement = () => {
  const { data, isError, isLoading, error } = useAboutTheMovements();
  if (isLoading) return <Loading />;
  if (isError) return <SectionError message={error.message} />;
  const about = data?.[0];
  return (
    <section className={scss.movement}>
      <div className="container">
        <div className={scss.content}>
          <SectionHeader
            title={about?.title}
            description={about?.text}
            layout="center"
          />
          <div className={scss.gallery}>
            {about?.movement_items.map((image, index) => (
              <img
                key={index}
                src={encodeUrl(image.image)}
                onError={onImageError}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMovement;
