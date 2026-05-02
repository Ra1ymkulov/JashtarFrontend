"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { CardEvents } from "../../../../../shared/ui/cardEvents/CardEvents";
import scss from "./UpcomingEvents.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const mockUpcoming = [
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
  {
    id: 4,
    title: "Форум молодых лидеров",
    description: "Встреча активной молодёжи со спикерами",
    date: "18.06",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
];

const UpcomingEvents: React.FC = () => {
  const router = useRouter();

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
            {mockUpcoming.map((item) => (
              <SwiperSlide key={item.id} className={scss.slide}>
                <CardEvents
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  image={item.image}
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
