"use client";
import clsx from "clsx";
import scss from "./UniversalCard.module.scss";
import type { FC } from "react";

interface UniversalCardProps {
	imageSrc: string | string[];
	title: string;
	date: string;
	onClick?: () => void;
	className?: string;
}

export const UniversalCard: FC<UniversalCardProps> = ({
	imageSrc,
	date,
	title,
	onClick,
	className,
}) => {
	const mainImage = Array.isArray(imageSrc) ? imageSrc[0] : imageSrc;

	return (
		<article className={clsx(scss.card, className)} onClick={onClick}>
			<div className={scss.box}>
				<div className={scss.imageWrapper}>
					<img
						src={mainImage || "/placeholder.png"}
						alt={title}
						className={scss.image}
						loading="lazy"
					/>
				</div>
				<div className={scss.content}>
					<div className={scss.dateWrapper}>
						<svg
							width="18"
							height="18"
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
						<time className={scss.date}>{date}</time>
					</div>
					<h3 className={scss.title}>{title}</h3>
				</div>
			</div>
		</article>
	);
};
