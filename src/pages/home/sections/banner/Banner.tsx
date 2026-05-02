"use client";
import scss from "./Banner.module.scss";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";

const Banner = () => {
  const data = [
    {
      id: 1,
      title: "Banner",
      description:
        "Предварительное внесло мартышкалный. Классно-качественная прототип будущего просьба в резво проекции поможет.",
      cta_text: "Вступить в движение",
      cta_link: "/movement",
      images: "/Rectangle 8.svg",
    },
    {
      id: 2,
      title: "Banner",
      description:
        "Предварительное внесло мартышкалный. Классно-качественная прототип будущего просьба в резво проекции поможет.",
      cta_text: "Вступить в движение",
      cta_link: "/movement",
      images: "/Rectangle 8.svg",
    },
    {
      id: 3,
      title: "Banner",
      description:
        "Предварительное внесло мартышкалный. Классно-качественная прототип будущего просьба в резво проекции поможет.",
      cta_text: "Вступить в движение",
      cta_link: "/movement",
      images: "/Rectangle 8.svg",
    },
  ];

  const buttonPrev = useRef(null);
  const buttonNext = useRef(null);
  return (
    <section className={scss.bannerSection}>
      <div className={scss.containerBanner}>
        <div className={scss.bannerWrapper}>
          <button ref={buttonPrev} className={scss.buttonPrev}>
            <IoIosArrowBack />
          </button>
          <button ref={buttonNext} className={scss.buttonNext}>
            <IoIosArrowForward />
          </button>
          <Swiper
            cssMode={true}
            pagination={{
              clickable: true,
              el: `${scss.swiperPagination}`,
            }}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.prevEl = buttonPrev.current;
              swiper.params.navigation.nextEl = buttonNext.current;
            }}
            navigation={{
              prevEl: buttonPrev.current,
              nextEl: buttonNext.current,
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className={scss.bannerSwiper}
            loop={true}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={scss.banner}>
                  <img
                    src={item.images}
                    alt={item.title}
                    className={scss.bannerBg}
                    loading="lazy"
                  />
                  <div className={scss.bannerOverlay} />
                  <div className={scss.bannerContent}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <button className={scss.bannerBtn}>{item.cta_text}</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={scss.swiperPagination}></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
