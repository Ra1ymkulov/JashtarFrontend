import { useMissionsMovements } from "@/src/entities/movements";
import scss from "./Mission.module.scss";
import { Loading } from "@/src/shared/ui/loading/Loading";

const Mission = () => {
  const { data, isError, isLoading, error } = useMissionsMovements();
  if (isLoading) return <Loading />;
  if (isError) return <div>{error.message}</div>;
  const about = data?.[0];

  return (
    <section className={scss.mission}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1 className={scss.title}>{about?.title}</h1>
            <p className={scss.description}>{about?.text}</p>
          </div>
          <div className={scss.mission}>
            {about?.missions_items.map((img, index) => (
              <div key={index} className={scss[`p${index + 1}`]}>
                <img
                  key={index}
                  src={img.image}
                  alt={`i${index + 1}`}
                  className={scss[`p${index + 1}`]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
