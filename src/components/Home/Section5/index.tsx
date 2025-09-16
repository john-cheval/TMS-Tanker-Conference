"use client";
import SmallTitle from "@/components/shared/ui/Headings/SmallTitle";
import { SectionOnePropsTyps, SpeakersDataProps } from "@/types/common";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import type SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SpeakersCard from "@/components/shared/ui/Cards/SpeakerCard";
import { chunkArray } from "@/utils/chunksArray";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import BigButton from "@/components/shared/ui/Button/BigButton";

const HomeSectionFive = ({
  heading,
  data,
  button_link,
  button_text,
}: SectionOnePropsTyps) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMediumScreen = useMediaQuery("(max-width: 1024px)");
  const isLargeScreen = useMediaQuery("(max-width: 1280px)");

  let itemsPerSlide: number = 8;
  if (isSmallScreen) {
    itemsPerSlide = 8;
  } else if (isMediumScreen) {
    itemsPerSlide = 6;
  } else if (isLargeScreen) {
    itemsPerSlide = 6;
  }
  const chunkedSpeakers = data ? chunkArray(data, itemsPerSlide) : [];
  return (
    <section className="section-wrapper !py-0 md:py-12 lg:py-16 xl:py-20 section-container">
      <div className="w-full">
        <SmallTitle title={heading} isBorder={false} isCenter={true} />

        <div className="relative w-full mt-6">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {chunkedSpeakers &&
              chunkedSpeakers?.length > 0 &&
              chunkedSpeakers?.map((speakersChunk, index) => {
                return (
                  <SwiperSlide key={index + 1}>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5 md:gap-3 lg:gap-4">
                      {speakersChunk.map((speaker: SpeakersDataProps) => (
                        <SpeakersCard key={speaker?.id} {...speaker} />
                      ))}
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <div className=" items-center justify-center space-x-4 mt-5 md:mt-0 hidden md:flex">
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

        <div className=" mt-6 flex justify-center w-full ">
          <BigButton hrefs={button_link}>{button_text}</BigButton>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionFive;
