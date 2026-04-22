import scss from './CardActivity.module.scss';
import Image from 'next/image';
import type { cardProps } from '@/src/shared/types/cardActivity/types';
import ArrowDown from '@/public/assets/icons/dropDown.svg';
import ArrowUp from '@/public/assets/icons/dropUp.svg';
import Instagram from '@/public/assets/icons/instagram.svg';
import Telegram from '@/public/assets/icons/telegram.svg';
import ArrowRight from '@/public/assets/icons/Arrow.svg';

export const CardActivity = ({
  image,
  title,
  description,
  fullText,
  isOpen,
  onClick,
  Course,
  color,
}: cardProps) => {
  return (
    <div
      className={`${scss.card} ${isOpen ? scss.card_open : ''} ${Course ? scss.card_course : ''}`}
      style={{ backgroundColor: color }}
    >
      {(Course || !isOpen) && image && (
        <div className={scss.imageWrapper}>
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
      )}

      <div className={scss.card_content}>
        <div
          className={`${scss.textContent} ${isOpen ? scss.textContent_open : ''}`}
        >
          <h1>{title}</h1>

          <p className={scss.description}>{description}</p>

          {isOpen && !Course && (
            <div className={scss.fullText}>
              <p>{fullText}</p>
            </div>
          )}
        </div>

        <div className={scss.footer}>
          {!Course && (
            <div className={scss.socials}>
              <div className={scss.icon}>
                <Image
                  width={19.55}
                  height={16.2}
                  src={Telegram}
                  alt='telegram'
                />{' '}
              </div>
              <div className={scss.icon}>
                <Image
                  width={19.55}
                  height={16.2}
                  src={Instagram}
                  alt='instagram'
                />{' '}
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
                <Image src={ArrowRight} alt='go' />
              ) : isOpen ? (
                <Image src={ArrowUp} alt='close' />
              ) : (
                <Image src={ArrowDown} alt='open' />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
