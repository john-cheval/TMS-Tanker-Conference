"use client";
import { SpeakersType } from "@/types/common";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type SwiperCore from "swiper";
import Image from "next/image";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import SpeakerCard from "@/components/shared/ui/Cards/SpeakerCard";

type Props = {
  swiperData: SpeakersType[];
};

const SpeakerResponsiveSwiper = ({ swiperData }: Props) => {
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
        modules={[Navigation]}
        slidesPerView={1.2}
        spaceBetween={14}
      >
        {swiperData?.length > 0 &&
          swiperData?.map((item, index) => {
            return (
              <SwiperSlide key={index + 1} className={`h-full flex `}>
                <SpeakerCard key={item?.id || index + 1} {...item} />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <div className=" items-center justify-center space-x-4 mt-5   flex">
        <button
          onClick={handlePrev}
          className="md:absolute top-[50%] md:-translate-y-1/2  -left-5 z-20 bg-white p-3 flex items-center justify-center rounded-full text-[#22334F] text-lg  font-normal border border-[#DEDEDE] "
        >
          <IoMdArrowBack />
        </button>
        <button
          onClick={handleNext}
          className="md:absolute  top-[50%] md:-translate-y-1/2   -right-5 z-20 bg-white p-3 flex items-center justify-center rounded-full text-[#22334F] text-lg  font-normal border border-[#DEDEDE] "
        >
          <IoMdArrowForward />
        </button>
      </div>
    </div>
  );
};

export default SpeakerResponsiveSwiper;
