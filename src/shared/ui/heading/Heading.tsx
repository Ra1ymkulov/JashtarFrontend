"use client";
import type { FC } from "react";
import scss from "./Heading.module.scss";
import Link from "next/link";

interface HeadingProps {
	title: string;
	description?: string;
	buttonText?: string;
	href?: string;
	onButtonClick?: () => void;
}

export const Heading: FC<HeadingProps> = ({
	title,
	description,
	buttonText,
	href,
	onButtonClick,
}) => {
	const renderButton = () => {
		if (!buttonText) return null;

		if (href) {
			return (
				<Link href={href} className={scss.button}>
					{buttonText}
				</Link>
			);
		} else {
			return (
				<button onClick={onButtonClick} className={scss.button}>
					{buttonText}
				</button>
			);
		}
	};

	return (
		<section className={scss.Heading}>
			<div className="container">
				<div className={scss.wrapper}>
					<div className={scss.textContent}>
						<h2 className={scss.title}>{title}</h2>
						{description && <p className={scss.description}>{description}</p>}
					</div>

					<div className={scss.actions}>{renderButton()}</div>
				</div>
			</div>
		</section>
	);
};
