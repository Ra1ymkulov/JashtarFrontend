"use client";
import scss from "./Banner.module.scss";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";
import { useHomePage } from "@/src/entities/home";
import { Loading } from "@/src/shared/ui/loading/Loading";
import { onImageError } from "@/src/shared/lib";
import { SectionError } from "@/src/shared/ui/sectionError/SectionError";

const Banner = () => {
  const buttonPrev = useRef<HTMLButtonElement>(null);
  const buttonNext = useRef<HTMLButtonElement>(null);
  const { data: home, isLoading, isError, error } = useHomePage();
  if (isLoading) return <Loading />;
  if (isError) return <SectionError message={error.message} />;

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
            loop={true}
            keyboard={true}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.prevEl = buttonPrev.current;
              swiper.params.navigation.nextEl = buttonNext.current;
            }}
            navigation={{
              prevEl: buttonPrev.current,
              nextEl: buttonNext.current,
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className={scss.bannerSwiper}
          >
            {home?.banners_list.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={scss.banner}>
                  <img
                    src={item.images[0].image}
                    alt={item.title}
                    onError={onImageError}
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
        </div>
      </div>
    </section>
  );
};

export default Banner;
