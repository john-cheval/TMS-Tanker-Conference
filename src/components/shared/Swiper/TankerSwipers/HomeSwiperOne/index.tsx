"use client";
import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type SwiperCore from "swiper";
import Image from "next/image";

type Props = {
  swiperGallery: string[];
};

const data = [
  "https://tmstanker.girishandco.com/public/Admin/uploads/page-image/70/687/multiple/17580276854531312.png",
  "https://tmstanker.girishandco.com/public/Admin/uploads/page-image/70/687/multiple/17580276854398070.png",
  "https://tmstanker.girishandco.com/public/Admin/uploads/page-image/70/687/multiple/17580276858660154.png",
  "https://tmstanker.girishandco.com/public/Admin/uploads/page-image/70/687/multiple/17580276853692508.png",
  "https://tmstanker.girishandco.com/public/Admin/uploads/page-image/70/687/multiple/1757488413121931.jpg",
  "https://tmstanker.girishandco.com/public/Admin/uploads/page-image/70/687/multiple/17574884133620004.jpg",
];

const HomeSwiperOne = ({ swiperGallery }: Props) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [visibleSlides, setVisibleSlides] = useState<number[]>([]);
  console.log(visibleSlides, "this isht evisibl;e slides");

  const handleSlideChange = (swiper: SwiperCore) => {
    const allSlides = swiper.slides;
    const currentlyVisible: number[] = [];

    // Loop through all slides and check if they are visible
    allSlides.forEach((slide: HTMLElement, index: number) => {
      if (slide.classList.contains("swiper-slide-visible")) {
        const realIndex = parseInt(
          slide.getAttribute("data-swiper-slide-index") || "0",
          10
        );
        currentlyVisible.push(realIndex);
      }
    });

    // Update the state with the new visible slides
    setVisibleSlides(currentlyVisible);
  };

  // Function to check if a slide is visible and return its position
  const getSlideClass = (index: number) => {
    const position = visibleSlides.indexOf(index);
    if (position !== -1) {
      return `active-${position + 1}`;
    }
    return "";
  };

  return (
    <div
      className="relative max-w-full swiper-home-container"
      id="home-swiper-wrapper"
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 11,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          1025: {
            slidesPerView: 3.25,
            spaceBetween: 27,
          },
        }}
        onSlideChange={handleSlideChange}
      >
        {data?.length > 0 &&
          data?.map((item, index) => {
            return (
              <SwiperSlide
                key={index + 1}
                className={`rounded-sm ${getSlideClass(index)}`}
              >
                <Image
                  src={item}
                  alt={`image-${index + 1}`}
                  width={350}
                  height={360}
                  className="w-full h-auto"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default HomeSwiperOne;
