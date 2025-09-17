"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation /*, Autoplay,*/ } from "swiper/modules";
import type SwiperCore from "swiper";

// import {
//   MdOutlineKeyboardArrowLeft,
//   MdOutlineKeyboardArrowRight,
// } from "react-icons/md";
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

  return (
    <div className="relative max-w-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
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
      >
        {data?.length > 0 &&
          data?.map((item, index) => {
            const classIndex = index % 3;

            let marginClass = "";

            switch (classIndex) {
              case 0:
                marginClass = "mt-0";
                break;
              case 1:
                marginClass = "mt-10";
                break;
              case 2:
                marginClass = "mt-32";
                break;
              default:
                marginClass = "mt-0";
                break;
            }

            return (
              <SwiperSlide key={index + 1} className={`${marginClass} `}>
                <Image
                  src={item}
                  alt={`image-${index + 1}`}
                  width={350}
                  height={360}
                  className="w-full h-auto "
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default HomeSwiperOne;
