"use client";
import type { FC } from "react";
import { UniversalCard } from "@/src/shared/ui/cardNews/UniversalCard"; // Путь из твоего проекта
import scss from "./Test.module.scss";
import { Heading } from "@/src/shared/ui/heading/Heading";

export const Test: FC = () => {
	const testImages = [
		"https://picsum.photos/424/234?random=1",
		"https://picsum.photos/424/234?random=2",
		"https://picsum.photos/424/234?random=2",
	];
	const testDataFromApi = {
		title: "Новости проекта",
		desc: "Внезапно, ключевые особенности структуры проекта являются только методом политического участия и в равной степени предоставлены сами себе. Внезапно, ключевые особенности структуры проекта являются только методом политического участия и в равной степени предоставлены сами себе. ",
		button: "Смотреть всё",
		path: "/news",
	};

	return (
		<section className={scss.Test}>
			<div className="container">
				<div className={scss.content}>
					<Heading
						variant="between"
						title={testDataFromApi.title}
						// description={testDataFromApi.desc}
						buttonText={testDataFromApi.button}
						href={testDataFromApi.path}
					/>
				</div>
				<div className={scss.content}>
					<div className={scss.testGrid}>
						<UniversalCard
							title="Я понял тебя — файл Test.tsx ты используешь просто как временный шаблон или «черновик» для быстрой проверки. Это отличная практика, чтобы не замусоривать основные файлы проекта Jashtar-Kyimyly или Okuu-kitebi во время отладки. оВот как мы «подружим» твой тестовый шаблон с реальным UI Kit компонентом UniversalCard, чтобы ты могла увидеть результат прямо сейчас."
							date="21.04.2026"
							imageSrc={testImages}
						/>

						<UniversalCard
							title="Новость с одной строкой-URL"
							date="22.04.2026"
							imageSrc="https://picsum.photos/424/234?random=3"
						/>
						<UniversalCard
							title="Новость с одной строкой-URL"
							date="22.04.2026"
							imageSrc="https://picsum.photos/424/234?random=3"
						/>
						<UniversalCard
							title="Новость с одной строкой-URL"
							date="22.04.2026"
							imageSrc="https://picsum.photos/424/234?random=3"
						/>
						<UniversalCard
							title="Новость с одной строкой-URL"
							date="22.04.2026"
							imageSrc="https://picsum.photos/424/234?random=3"
						/>
						<UniversalCard
							title="Новость с одной строкой-URL"
							date="22.04.2026"
							imageSrc="https://picsum.photos/424/234?random=3"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
