import type { FC } from "react";
import Banner from "./sections/banner/Banner";
import Events from "../../app/(site)/events/sections/EventsSection/EventsSection";
import Movement from "./sections/movement/Movement";
export const HomePage: FC = () => {
  return (
    <>
      <Banner />
      <Movement />
      <Events />
    </>
  );
};
