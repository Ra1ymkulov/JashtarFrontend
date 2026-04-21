"use client";
import type { FC } from "react";
import { UniversalCard } from "@/src/shared/ui/card/UniversalCard"; // Путь из твоего проекта
import scss from "./Test.module.scss";

export const Test: FC = () => {
	const testImages = [
		"https://picsum.photos/424/234?random=1",
		"https://picsum.photos/424/234?random=2",
		"https://picsum.photos/424/234?random=2",
	];

	return (
		<section className={scss.Test}>
			<div className="container">
				<div className={scss.content}>
					<h2>Тестирование UniversalCard</h2>
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
