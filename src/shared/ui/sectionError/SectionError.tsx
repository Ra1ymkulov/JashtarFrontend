import { Button } from "../button/Button";
import scss from "./SectionError.module.scss";
import { BsDatabaseExclamation } from "react-icons/bs";
interface ISectionErrorProps {
  message?: string;
}

export const SectionError = ({ message }: ISectionErrorProps) => {
  return (
    <div className={scss.errorContent}>
      <div className={scss.errorBlock}>
        <BsDatabaseExclamation />
        <p>Не удалось загрузить данные!</p>
        <span>{message}</span>
        <Button
          text="Обновить"
          variant="primary"
          onClick={() => window.location.reload()}
        />
      </div>
    </div>
  );
};
