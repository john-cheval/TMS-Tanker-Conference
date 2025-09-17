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
        modules={[Navigation, Autoplay]}
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
    </div>
  );
};

export default SpeakerResponsiveSwiper;
