"use client";
import { useRouter } from "next/navigation";
import { CardEvents } from "../../../../../shared/ui/cardEvents/CardEvents";
import scss from "./EventsSection.module.scss";

const mockEvents = [
  {
    id: 1,
    title: "Техническая конференция 2026",
    description: "Обсуждение новейших технологий в разработке",
    date: "15.05",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
  {
    id: 2,
    title: "Воркшоп по Next.js",
    description: "Практическое занятие по современному React-фреймворку",
    date: "22.05",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
  {
    id: 3,
    title: "Хакатон: Инновации в образовании",
    description: "Соревнование для разработчиков и дизайнеров",
    date: "05.06",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
];

const EventsSection = () => {
  const router = useRouter();

  return (
    <div className="container">
      <div className={scss.event}>
        <div className={scss.eventTitle}>
          <h2>Предстоящие мероприятия</h2>
          <button onClick={() => router.push("/events")}>Подробнее</button>
        </div>
        <div className={scss.eventCards}>
          {mockEvents.map((item) => (
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

export default EventsSection;
