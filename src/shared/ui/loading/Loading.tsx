import scss from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.spinner} />
    </div>
  );
};
