"use client";
import { CardEvents } from "../../shared/ui/cardEvents/CardEvents";
import { useRouter } from "next/navigation";
import styles from "./Events.module.scss";

const mockEventsData = [
  {
    id: 1,
    title: "Техническая конференция 2026",
    description: "Обсуждение новейших технологий в разработке",
    date: "15.05",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/045/132/934/small_2x/a-beautiful-picture-of-the-eiffel-tower-in-paris-the-capital-of-france-with-a-wonderful-background-in-wonderful-natural-colors-photo.jpg",
  },
  {
    id: 2,
    title: "Воркшоп по Next.js",
    description: "Практическое занятие по современному React-фреймворку",
    date: "22.05",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWh3F2mvx7pj_py6gDBuY_PntI4cV0izGWQ&s",
  },
  {
    id: 3,
    title: "Хакатон: Инновации в образовании",
    description: "Соревнование для разработчиков и дизайнеров",
    date: "05.06",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/042/105/964/small/ai-generated-woman-in-pilots-uniform-posing-for-picture-free-photo.jpeg",
  },
];

const Events = () => {
  const router = useRouter();

  const handleCardClick = (id: string | number) => {
    router.push(`/events/${id}`);
  };

  return (
    <section>
      <div className="container">
        <h1 className={styles.pageTitle}>Мероприятия</h1>
        <div className={styles.eventsGrid}>
          {mockEventsData.map((event) => (
            <CardEvents
              key={event.id}
              id={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              image={event.image}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
