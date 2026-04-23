import type { FC } from "react";
import Banner from "./sections/banner/Banner";
import { Test } from "./sections/test/Test";

export const HomePage: FC = () => {
  return (
    <>
      <Banner />
      <Test />
    </>
  );
};
