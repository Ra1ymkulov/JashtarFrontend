"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CardEvents } from "../../../../../shared/ui/cardEvents/CardEvents";
import scss from "./EventsArchive.module.scss";

const mockPast = [
  {
    id: 5,
    title: "Конференция по экологии",
    description: "Обсуждение экологических проблем региона",
    date: "10.01",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
  {
    id: 6,
    title: "Фестиваль культуры",
    description: "Традиционные танцы и музыка народов Кыргызстана",
    date: "25.02",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
  {
    id: 7,
    title: "Спортивный марафон",
    description: "Городской забег на 10 км для всех желающих",
    date: "03.03",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
  {
    id: 8,
    title: "Выставка современного искусства",
    description: "Работы молодых художников Бишкека",
    date: "15.03",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
  {
    id: 9,
    title: "Образовательный форум",
    description: "Инновации в системе образования Кыргызстана",
    date: "28.03",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
  {
    id: 10,
    title: "Бизнес встреча стартапов",
    description: "Питч-сессия для молодых предпринимателей",
    date: "10.04",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
];

const EventsArchive: React.FC = () => {
  const router = useRouter();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setCount(window.innerWidth <= 977 ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <div className={scss.eventPage}>
        <div className={scss.eventPageTitle}>
          <h2>Архив мероприятий</h2>
          <button onClick={() => router.push("/events/archive")}>
            Подробнее
          </button>{" "}
        </div>
        <div className={scss.eventPageCards}>
          {mockPast.slice(0, count).map((item) => (
            <CardEvents
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              image={item.image}
              onClick={(id) => router.push(`/events/${id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsArchive;
