"use client";
import type { FC } from "react";
import Banner from "./sections/banner/Banner";

import Movement from "./sections/movement/Movement";
import EventsSections from "./sections/events/EventsSections";
export const HomePage: FC = () => {
  return (
    <>
      <Banner />
      <Movement />
      <EventsSections />
    </>
  );
};
