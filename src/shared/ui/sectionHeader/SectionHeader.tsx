import scss from "./SectionHeader.module.scss";

interface ISectionHeaderProps {
  onButtonClick?: () => void;
  title: string;
  buttonText?: string;
  description?: string;
  layout: "center" | "between";
  descriptionWidth?: "full" | "small";
}

const SectionHeader = ({
  title,
  onButtonClick,
  layout,
  buttonText,
  description,
  descriptionWidth = "full",
}: ISectionHeaderProps) => {
  return (
    <div className={scss.sectionHeader}>
      <div className={`${scss[layout]}`}>
        {title && <h1 className={scss.title}>{title}</h1>}
        {buttonText && (
          <button className={scss.button} onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
        {description && (
          <p className={`${scss.description} ${scss[descriptionWidth]}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
