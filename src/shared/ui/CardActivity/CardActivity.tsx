import Image from "next/image";
import scss from "./CardActivity.module.scss";
import ArrowDown from "@/shared/assets/images/drop down.svg";
import ArrowUp from "@/shared/assets/icons/drop up.svg";
import Instagram from "@/shared/assets/images/instagram-line.svg";
import Telegram from "@/shared/assets/images/telegram-2-fill.svg";
import ArrowRight from "@/shared/assets/icons/Arrow.svg";

interface cardProps {
  image: string;
  title: string;
  description: string;
  fullText?: string;
  isOpen: boolean;
  course: boolean;
  color?: string;
  onClick: () => void;
}

export const CardActivity = ({
  image,
  title,
  description,
  fullText,
  isOpen,
  onClick,
  course,
  color,
}: cardProps) => {
  return (
    <div
      className={`${scss.card} ${isOpen ? scss.card_open : ""}  ${
        course ? scss.card_course : ""
      }`}
    >
      {(course || !isOpen) && image && (
        <div className={scss.imageWrapper}>
          <Image src={image} alt="" fill />
        </div>
      )}

      <div className={scss.card_content}>
        <div
          className={`${scss.textContent} ${
            isOpen ? scss.textContent_open : ""
          }`}
        >
          <h1>{title}</h1>

          <p className={`${scss.description} `}>
            {Course ? "Подробнее..." : description}
          </p>

          {isOpen && !course && (
            <div className={scss.fullText}>
              <p className={scss.fullText_paragraph}>{fullText}</p>
            </div>
          )}
        </div>

        <div className={scss.footer}>
          {!course && (
            <div className={scss.socials}>
              <div className={scss.icon}>
                <Image src={Telegram} alt="telegram" width={24} height={24} />
              </div>
              <div className={scss.icon}>
                <Image src={Instagram} alt="instagram" width={24} height={24} />
              </div>
            </div>
          )}

          <button
            className={`${scss.toggleButton} ${
              isOpen ? scss.toggleButton_open : ""
            }  ${course ? scss.toggleButton_course : ""}`}
            onClick={onClick}
          >
            <span>{course ? "Записаться" : isOpen ? "" : "Подробнее"}</span>
            <span className={scss.arrow}>
              {course ? (
                <Image src={ArrowRight} alt="go" width={20} height={20} />
              ) : isOpen ? (
                <Image src={ArrowUp} alt="close" width={20} height={20} />
              ) : (
                <Image src={ArrowDown} alt="open" width={20} height={20} />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
