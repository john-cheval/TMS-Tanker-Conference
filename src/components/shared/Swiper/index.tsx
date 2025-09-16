"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type SwiperCore from "swiper";
import HomeCards from "../ui/Cards/HomeCards";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export type SwiperTypeProps = {
  datas?: any[];
  slidesNumbers?: number;
  initalGap?: number;
};

const SwiperHome = ({ datas, slidesNumbers, initalGap }: SwiperTypeProps) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  return (
    <div className="relative w-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={slidesNumbers}
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
            slidesPerView: 2,
            spaceBetween: initalGap,
          },
        }}
      >
        {datas &&
          datas?.length > 0 &&
          datas?.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index + 1}>
                <HomeCards cardData={item} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="flex items-center justify-center space-x-4 mt-5 md:mt-0">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="md:absolute top-[50%] md:-translate-y-1/2  -left-5 z-20 bg-[#f7f7f7] p-2 flex items-center justify-center rounded-full text-tms-purple text-2xl md:text-3xl font-normal "
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="md:absolute  top-[50%] md:-translate-y-1/2   -right-5 z-20 bg-[#f7f7f7] p-2 flex items-center justify-center rounded-full text-tms-purple text-2xl md:text-3xl font-normal"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SwiperHome;
