"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { CardEvents } from "../../../../../shared/ui/cardEvents/CardEvents";
import { eventsStore } from "../../../../store/events/events";
import scss from "./UpcomingEvents.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const UpcomingEvents: React.FC = () => {
  const router = useRouter();
  const { fetchevents, event } = eventsStore();

  useEffect(() => {
    fetchevents();
  }, [fetchevents]);

  const eventsList = event?.events_list || [];

  const upcomingEvents = eventsList.filter((item) => {
    if (!item.data) return true;
    const eventDate = new Date(item.data);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate >= today;
  });

  return (
    <div className={scss.UpcomingEvents}>
      <h1 className={scss.title}>Предстоящие мероприятия</h1>
      <div className={`${scss.content} container`}>
        <div className={scss.swiperWrapper}>
          <button className={`prev ${scss.customArrow}`}>
            <ChevronLeft />
          </button>
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".prev", nextEl: ".next" }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 2 },
              977: { slidesPerView: 3 },
            }}
          >
            {upcomingEvents.map((item) => (
              <SwiperSlide key={item.id} className={scss.slide}>
                <CardEvents
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  image={item.images?.[0]?.image}
                  onClick={(id) => router.push(`/events/${id}`)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className={`next ${scss.customArrow}`}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
