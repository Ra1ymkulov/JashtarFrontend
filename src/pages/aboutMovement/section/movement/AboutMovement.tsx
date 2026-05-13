import { useAboutTheMovements } from "@/src/entities/movements";
import scss from "./AboutMovement.module.scss";
import SectionHeader from "@/src/shared/ui/sectionHeader/SectionHeader";
import { Loading } from "@/src/shared/ui/loading/Loading";

const AboutMovement = () => {
  // const data = {
  //   id: 1,
  //   title: "О движении",
  //   text: "В целях реализации Закона КР «О молодежи» постановлением Кабинета Министров от 14 марта 2024 года №108 утверждено Положение о молодежном движении КР, определяющее его правовой статус, цели и порядок деятельности. Движение — добровольная, самоуправляемая некоммерческая организация. Идея создания предложена на форуме «Кыялымдагы Кыргызстан» (2023, Бишкек) и поддержана Президентом.",
  //   movement_items: [
  //     {
  //       id: 1,
  //       image: "/Rectangle 8.svg",
  //       order: 1,
  //       is_active: false,
  //     },
  //     {
  //       id: 2,
  //       image: "/Rectangle 8.svg",
  //       order: 2,
  //       is_active: false,
  //     },
  //   ],
  // };
  const { data, isError, isLoading, error } = useAboutTheMovements();
  if (isLoading) return <Loading />;
  if (isError) return <div>{error.message}</div>;
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
              <img key={index} src={image.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMovement;
