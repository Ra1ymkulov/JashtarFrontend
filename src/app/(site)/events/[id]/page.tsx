import scss from "./EventDetail.module.scss";
import { Clock, Calendar, MapPin } from "lucide-react";

const mockEvent = {
  id: 1,
  title: "Название мероприятия",
  description:
    "Безусловно, высокотехнологичная концепция общественного уклада предопределяет высокую востребованность системы массового участия. Значимость этих проблем настолько очевидна, что синтетическое тестирование предопределяет высокую востребованность экспериментов, поражающих по своей масштабности и грандиозности. В своём стремлении повысить качество жизни, они забывают, что сложившаяся структура организации выявляет срочную потребность прогресса профессионального сообщества.",
  images: [
    "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
    "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
    "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
    "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
  ],
  time: "20:30",
  date: "15 Июля 2025",
  address: "Улица, Дом",
};

const EventDetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container">
      <div className={scss.page}>
        {/* Заголовок и описание */}
        <div className={scss.header}>
          <h1 className={scss.title}>{mockEvent.title}</h1>
          <p className={scss.description}>{mockEvent.description}</p>
        </div>

        {/* Галерея фото */}
        <div className={scss.gallery}>
          {mockEvent.images.map((img, index) => (
            <div
              key={index}
              className={`${scss.imgWrap} ${scss[`img${index + 1}`]}`}
            >
              <img src={img} alt={`photo-${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Детали мероприятия */}
        <div className={scss.details}>
          <h2 className={scss.detailsTitle}>Детали мероприятия</h2>
          <div className={scss.detailsList}>
            <div className={scss.detailItem}>
              <Clock size={22} color="#2e6cf4" />
              <span>{mockEvent.time}</span>
            </div>
            <div className={scss.detailItem}>
              <Calendar size={22} color="#2e6cf4" />
              <span>{mockEvent.date}</span>
            </div>
            <div className={scss.detailItem}>
              <MapPin size={22} color="#2e6cf4" />
              <span>{mockEvent.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
