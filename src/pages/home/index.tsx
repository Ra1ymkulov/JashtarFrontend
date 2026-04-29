import type { FC } from "react";
import Banner from "./sections/banner/Banner";
import { Test } from "./sections/test/Test";
import Events from "../../app/(site)/events/sections/EventsSection/EventsSection";
export const HomePage: FC = () => {
  return (
    <>
      <Banner />
      <Events /> 
      <Test />
    </>
  );
};
