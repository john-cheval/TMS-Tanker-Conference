"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type SwiperCore from "swiper";
import Image from "next/image";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { imageGallery } from "@/types/common";

type Props = {
  swiperGallery: imageGallery[];
};

const ResponsiveSwiper = ({ swiperGallery }: Props) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

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
        modules={[Navigation, Autoplay]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        centeredSlides
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 13,
          },
        }}
      >
        {swiperGallery?.length > 0 &&
          swiperGallery?.map((item, index) => {
            return (
              <SwiperSlide key={index + 1} className={` `}>
                <Image
                  src={item.image_url}
                  // alt={`image-${index + 1}`}
                  alt={item.image_alt_tag ?? ""}
                  width={350}
                  height={360}
                  className="w-full h-auto "
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div>
        <button
          className="bg-white/[0.7] border border-light-grey p-3 sm:p-4 flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 left-1 z-50"
          onClick={handlePrev}
        >
          <IoMdArrowBack color="#22334F" className="text-lg sm:text-xl" />
        </button>

        <button
          className="bg-white/[0.7] border border-light-grey p-3 sm:p-4 flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 right-1 z-50"
          onClick={handleNext}
        >
          <IoMdArrowForward color="#22334F" className="text-lg sm:text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSwiper;
