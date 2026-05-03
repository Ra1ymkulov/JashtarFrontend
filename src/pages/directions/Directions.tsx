'use client';

import { useState } from 'react';
import { CardActivity } from '@/src/shared/ui/CardActivity/CardActivity';

const title = 'Волонтерство';
const shortText = 'Помогай другим и твори добро!';
const fullText =
  'Идейные соображения высшего порядка, а также синтетическое тестирование выявляет срочную потребность вывода текущих активов. В частности, реализация намеченных плановых заданий играет определяющее значение для кластеризации усилий. А ещё многие известные личности лишь добавляют фракционных разногласий и объединены в целые кластеры себе подобных. Повседневная практика показывает, что высокотехнологичная концепция общественного уклада выявляет срочную потребность кластеризации усилий.';

const data = [
  {
    id: 1,
    title: title,
    description: shortText,
    fullText: fullText,
    color:"#5889F6",
    image: '/assets/images/Directions.png',
  },
  {
    id: 2,
    title: title,
    description: shortText,
    fullText: fullText,
    color:"#F65858",
    image: '/assets/images/Directions.png',
  },
  {
    id: 3,
    title: title,
    description: shortText,
    fullText: fullText,
    color:"#58F658",
    image: '/assets/images/Directions.png',
  },
  {
    id: 4,
    title: title,
    description: shortText,
    fullText: fullText,
    color:"#F6F658",
    image: '/assets/images/Directions.png',
  },
  {
    id: 5,
    title: title,
    description: shortText,
    fullText: fullText,
    color:"#5858F6",
    image: '/assets/images/Directions.png',
  },
  {
    id: 6,
    title: title,
    description: shortText,
    fullText: fullText,
    color:"#F658F6",
    image: '/assets/images/Directions.png',
  },
];

export default function DirectionsPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ padding: '40px 0' }}>
      <div className='container'>
        <h1 style={{
          display:"flex",
          justifyContent:"center",
          marginBottom:"40px",
        }}> Направление деятельности </h1>

        <div
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {data.slice(0, 6).map((item) => (
            <CardActivity
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              fullText={item.fullText}
              color={item.color}
              isOpen={openId === item.id}
              onClick={() => toggleCard(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
