"use client";
import type { FC } from "react";
import Banner from "./sections/banner/Banner";
import Events from "../../app/(site)/events/sections/EventsSection/EventsSection";
import Movement from "./sections/movement/Movement";
import { Test } from "./sections/test/Test";
export const HomePage: FC = () => {
	return (
		<>
			<Banner />
			<Movement />
			<Events />
			<Test />
		</>
	);
};
