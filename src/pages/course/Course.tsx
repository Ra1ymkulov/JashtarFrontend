'use client';
import { CardActivity } from '@/src/shared/ui/CardActivity/CardActivity';

const data = [
  {
    id: 1,
    title: 'IT-волонтерство',
    description: 'Помогай некоммерческим проектам с разработкой сайтов и цифровых решений',
    image: '/assets/images/Course/IT.png',
  },
  {
    id: 2,
    title: 'Администрирование',
    description: 'Помощь в организации внутренних процессов и координация работы штаба',
    image: '/assets/images/Course/admin.png',
  },
  {
    id: 3,
    title: 'Онлайн-наставничество',
    description: 'Делись знаниями и опытом с молодежью через дистанционные платформы',
    image: '/assets/images/Course/mentoring.png',
  },
  {
    id: 4,
    title: 'Языковая поддержка',
    description: 'Обучение иностранным языкам и помощь в переводе образовательных материалов',
    image: '/assets/images/Course/languages.png',
  },
  {
    id: 5,
    title: 'Тренинги и мастер-классы',
    description: 'Проведение публичных лекций и обучающих программ для сообщества',
    image: '/assets/images/Course/workshop.png',
  },
  {
    id: 6,
    title: 'Социальный копирайтинг',
    description: 'Пиши вдохновляющие истории о волонтерах и создавай контент для соцсетей',
    image: '/assets/images/Course/content.png',
  },
];

export default function Course() {
  const handleCourseClick = (id: number) => {
    console.log('Записаться на курс:', id);
  };

  return (
    <div style={{ padding: '40px 0' }}>
      <div className='container'>
        <div
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {data.map((item) => (
            <CardActivity
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              isOpen={false}
              Course={true}
              onClick={() => handleCourseClick(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}