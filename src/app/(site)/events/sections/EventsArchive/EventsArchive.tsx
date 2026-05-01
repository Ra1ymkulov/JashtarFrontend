"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CardEvents } from "../../../../../shared/ui/cardEvents/CardEvents";
import scss from "./EventsArchive.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    id: 11,
    title: "Форум молодых лидеров",
    description: "Встреча активной молодёжи со спикерами",
    date: "18.04",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
  {
    id: 12,
    title: "Конкурс социальных проектов",
    description: "Лучшие идеи для развития общества",
    date: "22.04",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
  {
    id: 13,
    title: "Техническая конференция",
    description: "Новейшие технологии в разработке",
    date: "01.05",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
  {
    id: 14,
    title: "Культурный обмен",
    description: "Встреча представителей разных культур",
    date: "05.05",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
  {
    id: 15,
    title: "Воркшоп по дизайну",
    description: "Практическое занятие по UI/UX дизайну",
    date: "10.05",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
  {
    id: 16,
    title: "Экологический марафон",
    description: "Уборка городских парков и скверов",
    date: "15.05",
    image: "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  },
];

const ITEMS_PER_PAGE = 9;

interface IEventsArchiveProps {
  showAll?: boolean;
}

const EventsArchive: React.FC<IEventsArchiveProps> = ({ showAll = false }) => {
  const router = useRouter();
  const [count, setCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setCount(window.innerWidth <= 977 ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(mockPast.length / ITEMS_PER_PAGE);

  const displayedEvents = showAll
    ? mockPast.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
      )
    : mockPast.slice(0, count);

  const handlePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className={scss.eventPage}>
        <div className={scss.eventPageTitle}>
          <h2>Архив мероприятий</h2>
          {!showAll && (
            <button onClick={() => router.push("/events/archive")}>
              Подробнее
            </button>
          )}
        </div>

        <div className={scss.eventPageCards}>
          {displayedEvents.map((item) => (
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

        {/* Пагинация — только на странице архива */}
        {showAll && totalPages > 1 && (
          <div className={scss.pagination}>
            <button
              className={scss.pageArrow}
              onClick={() => handlePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={18} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`${scss.pageBtn} ${currentPage === page ? scss.active : ""}`}
                onClick={() => handlePage(page)}
              >
                {page}
              </button>
            ))}

            <button
              className={scss.pageArrow}
              onClick={() => handlePage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsArchive;
