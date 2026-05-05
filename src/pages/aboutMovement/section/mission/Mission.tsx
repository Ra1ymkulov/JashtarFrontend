import scss from "./Mission.module.scss";

const Mission = () => {
  const data = {
    id: 1,
    title: "Цели и миссии",
    text: "Миссия — создание единой национальной платформы для раскрытия потенциала молодежи Кыргызстана через развитие лидерства, гражданской активности и вовлечение в общественные и государственные процессы. Цели: развитие лидерских и профессиональных навыков, повышение ответственности, поддержка инициатив, развитие волонтерства, создание возможностей для образо",
    missions_items: [
      {
        id: 4,
        image: "/Rectangle 8.svg",
        order: 4,
        is_active: false,
      },
      {
        id: 5,
        image: "/Rectangle 8.svg",
        order: 5,
        is_active: false,
      },
      {
        id: 2,
        image: "/Rectangle 8.svg",
        order: 2,
        is_active: false,
      },
      {
        id: 3,
        image: "/Rectangle 8.svg",
        order: 3,
        is_active: false,
      },
      {
        id: 1,
        image: "/Rectangle 8.svg",
        order: 1,
        is_active: false,
      },
    ],
  };
  return (
    <section className={scss.mission}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1 className={scss.title}>{data.title}</h1>
            <p className={scss.description}>{data.text}</p>
          </div>
          <div className={scss.mission}>
            {data?.missions_items?.map((img, index) => (
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
