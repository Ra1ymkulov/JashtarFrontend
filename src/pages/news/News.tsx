"use client";
import type { FC } from "react";
import scss from "./News.module.scss";
import { MOCK_NEWS_API, Test } from "../home/sections/test/Test";
import { Heading } from "@/src/shared/ui/heading/Heading";

export const News: FC = () => {
	const testDataFromApi = {
		title: "Новости",
		button: "Подробнее",
		path: "/news",
	};
	return (
		<section className={scss.News}>
			<div className={scss.News_box}>
				<div className={scss.content}>
					<Heading variant="center" title={testDataFromApi.title} />
				</div>
				<Test showHeading={false} limit={MOCK_NEWS_API.length} />
			</div>
		</section>
	);
};
