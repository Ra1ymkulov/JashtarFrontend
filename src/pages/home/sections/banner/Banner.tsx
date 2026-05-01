"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectFade,
	Mousewheel,
	Keyboard,
} from "swiper/modules";
import Image from "next/image";
import scss from "./Banner.module.scss";

// Импорт стилей
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/effect-fade";

// Имитация данных из API
const mockData = [
	{
		id: 1,
		title: "Banner 1",
		description:
			"Предварительные выводы неутешительны: высококачественный прототип будущего проекта создаёт необходимость включения",
		image:
			"https://images.trvl-media.com/localexpert/1790496/71d84da1-ebdb-49a6-a1e2-75936c03475f.jpg?impolicy=resizecrop&rw=1005&rh=565",
		buttonText: "Вступить в движение →",
	},
	{
		id: 2,
		title: "Banner 2",
		description:
			"Предварительные выводы неутешительны: высококачественный прототип будущего проекта создаёт необходимость включения",
		image:
			"https://static.vecteezy.com/system/resources/thumbnails/065/664/627/small/a-black-man-in-a-black-t-shirt-free-photo.jpg",
		buttonText: "Узнать больше →",
	},
	{
		id: 3,
		title: "Banner 3",
		description:
			"Предварительные выводы неутешительны: высококачественный прототип будущего проекта создаёт необходимость включения",
		image:
			"https://static.vecteezy.com/system/resources/thumbnails/065/664/627/small/a-black-man-in-a-black-t-shirt-free-photo.jpg",
		buttonText: "Узнать больше →",
	},
];
const Banner = () => {
	return (
		<div className={scss.wrapper}>
			<section className={scss.container}>
				<Swiper
					modules={[
						Navigation,
						Pagination,
						Autoplay,
						Mousewheel,
						Keyboard,
						EffectFade,
					]}
					effect="fade"
					fadeEffect={{
						crossFade: true,
					}}
					speed={2000}
					loop={true}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					className={scss.mySwiper}>
					{mockData.map((item) => (
						<SwiperSlide key={item.id} className={scss.slide}>
							<div className={scss.content}>
								<h1 className={scss.title}>{item.title}</h1>
								<p className={scss.description}>{item.description}</p>
								<button className={scss.button}>{item.buttonText}</button>
							</div>
							<div className={scss.imageWrapper}>
								<Image
									src={item.image}
									alt={item.title}
									fill
									priority
									className={scss.bgImage}
									unoptimized
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<button className={`${scss.navBtn} ${scss.navPrev}`}>‹</button>
				<button className={`${scss.navBtn} ${scss.navNext}`}>›</button>
				<div className={scss.paginationContainer}></div>
			</section>
		</div>
	);
};

export default Banner;
