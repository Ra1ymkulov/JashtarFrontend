"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CardEvents } from "../../../../../shared/ui/cardEvents/CardEvents";
import { eventsStore } from "../../../../store/events/events";
import scss from "./EventsArchive.module.scss";

const EventsArchive: React.FC = () => {
  const router = useRouter();
  const { event, loading, error, fetchevents } = eventsStore();
  const [count, setCount] = useState(3);

  useEffect(() => {
    fetchevents();
  }, [fetchevents]);

  useEffect(() => {
    const handleResize = () => {
      setCount(window.innerWidth <= 977 ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const eventsList = event?.events_list || [];

  const pastEvents = eventsList.filter((item) => {
    if (!item.data) return false;
    const eventDate = new Date(item.data);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate < today;
  });

  if (loading) {
    return (
      <div className="container">
        <div className={scss.loadingWrap}>
          <div className={scss.spinner} />
          <p>Загрузка...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className={scss.errorWrap}>
          <p>Ошибка: {error}</p>
          <button onClick={() => fetchevents()}>Повторить</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className={scss.eventPage}>
        <div className={scss.eventPageTitle}>
          <h2>Архив мероприятий</h2>
          <button onClick={() => router.push("/events")}>Все события</button>
        </div>
        {pastEvents.length === 0 ? (
          <p className={scss.empty}>Нет прошедших мероприятий</p>
        ) : (
          <div className={scss.eventPageCards}>
            {pastEvents.slice(0, count).map((item) => (
              <CardEvents
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                date={item.date}
                image={item.images?.[0]?.image}
                onClick={(id) => router.push(`/events/${id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsArchive;
