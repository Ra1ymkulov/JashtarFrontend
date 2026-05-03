"use client";
import scss from "./Button.module.scss";

interface IButtonProps {
  text: string;
  onClick?: () => void;
  variant: "primary" | "outline";
}

export const Button: React.FC<IButtonProps> = ({
  text,
  variant = "primary",
  onClick,
}) => {
  return (
    <button className={`${scss.button} ${scss[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};
