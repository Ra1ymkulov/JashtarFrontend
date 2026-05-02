import Image from 'next/image';
import scss from './CardActivity.module.scss';
import ArrowDown from '@/public/assets/icons/dropDown.svg';
import ArrowUp from '@/public/assets/icons/dropUp.svg';
import Instagram from '@/public/assets/icons/instagram.svg';
import Telegram from '@/public/assets/icons/telegram.svg';
import ArrowRight from '@/public/assets/icons/Arrow.svg';

interface cardProps {
  image: string;
  title: string;
  description: string;
  fullText?: string;
  isOpen: boolean;
  Course: boolean;
  onClick: () => void;
}

export const CardActivity = ({
  image,
  title,
  description,
  fullText,
  isOpen,
  onClick,
  Course,
}: cardProps) => {
  return (
    <div
      className={`${scss.card} ${isOpen ? scss.card_open : ''}  ${Course ? scss.card_course : ''}`}
    >
      {(Course || !isOpen) && image && (
        <div className={scss.imageWrapper}>
          <Image src={image} alt='' fill />
        </div>
      )}

      <div className={scss.card_content}>
        <div
          className={`${scss.textContent} ${isOpen ? scss.textContent_open : ''}`}
        >
          <h1>{title}</h1>

          <p className={`${scss.description} `}>{description}</p>

          {isOpen && !Course && (
            <div className={scss.fullText}>
              <p className={scss.fullText_paragraph}>{fullText}</p>
            </div>
          )}
        </div>

        <div className={scss.footer}>
          {!Course && (
            <div className={scss.socials}>
              <div className={scss.icon}>
                <Image src={Telegram} alt='telegram' width={24} height={24} />
              </div>
              <div className={scss.icon}>
                <Image src={Instagram} alt='instagram' width={24} height={24} />
              </div>
            </div>
          )}

          <button
            className={`${scss.toggleButton} ${isOpen ? scss.toggleButton_open : ''}  ${Course ? scss.toggleButton_course : ''}`}
            onClick={onClick}
          >
            <span>{Course ? 'Записаться' : isOpen ? '' : 'Подробнее'}</span>
            <span className={scss.arrow}>
              {Course ? (
                <Image src={ArrowRight} alt='go' width={20} height={20} />
              ) : isOpen ? (
                <Image src={ArrowUp} alt='close' width={20} height={20} />
              ) : (
                <Image src={ArrowDown} alt='open' width={20} height={20} />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};