import type { FC } from "react";
import Banner from "./sections/banner/Banner";
import { Test } from "./sections/test/Test";
import Events from "../events/Events";
export const HomePage: FC = () => {
  return (
    <>
      <Banner />
      <Events />

      <Test />
    </>
  );
};
