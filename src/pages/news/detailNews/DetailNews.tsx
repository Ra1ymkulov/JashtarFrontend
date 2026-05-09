"use client";
import { useEffect, useState, FC } from "react";
import { MOCK_NEWS_API, Test } from "../../home/sections/test/Test";
import scss from "./DetailNews.module.scss";
import { Heading } from "@/src/shared/ui/heading/Heading";

export const DetailNews: FC<{ id: string }> = ({ id }) => {
	const [newsItem, setNewsItem] = useState<any>(null);
	const testDataFromApi = {
		title: "Новости Заголовок",
		button: "Подробнее",
		path: "/news",
	};

	useEffect(() => {
		console.log("ID из URL:", id);

		const found = MOCK_NEWS_API.find((item) => String(item.id) === String(id));

		console.log("Найдено в массиве:", found);
		setNewsItem(found);
	}, [id]);

	if (!newsItem) {
		return (
			<div className="container">
				<h2>Загрузка или новость не найдена...</h2>
				<p>Мы ищем новость с ID: {id}</p>
			</div>
		);
	}

	return (
		<main className={scss.DetailNews}>
			<div className="container">
				<Heading variant="center" title={testDataFromApi.title} />
				<div className={scss.content}>
					<div className={scss.dateWrapper}>
						<svg
							width="30"
							height="30"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
							<line x1="16" y1="2" x2="16" y2="6" />
							<line x1="8" y1="2" x2="8" y2="6" />
							<line x1="3" y1="10" x2="21" y2="10" />
						</svg>
						<time className={scss.date}>{newsItem.date}</time>
					</div>
					<img
						className={scss.image}
						src={newsItem.image}
						alt={newsItem.title}
					/>
					<h1 className={scss.title}>{newsItem.title}</h1>
				</div>
			</div>
			<Test />
		</main>
	);
};
