"use client";
import { sponsorDataType } from "@/types/common";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import type SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import useMediaQuery from "@/hooks/useMediaQuery";
import { chunkArray } from "@/utils/chunksArray";
import Image from "next/image";
import sponnsorimg from "@/assets/Home/sponsor.png";

import { IoArrowForwardSharp } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";

type Props = {
  swiperData: sponsorDataType[];
};

const SponsorSwiper = ({ swiperData }: Props) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMediumScreen = useMediaQuery("(max-width: 1024px)");
  const isLargeScreen = useMediaQuery("(max-width: 1280px)");

  let itemsPerSlide: number = 10;
  if (isSmallScreen) {
    itemsPerSlide = 9;
  } else if (isMediumScreen) {
    itemsPerSlide = 8;
  } else if (isLargeScreen) {
    itemsPerSlide = 10;
  }

  const cloneData = [...swiperData, ...swiperData];
  const chunkedSpeakers = cloneData ? chunkArray(cloneData, itemsPerSlide) : [];

  return (
    <div className="relative w-full">
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
                <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-2.5 md:gap-x-3 lg:gap-x-4 gap-y-5 md:gap-y-9">
                  {speakersChunk.map((item: sponsorDataType, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center flex-shrink-0 md:mr-8 xl:mr-10 2xl:mr-14"
                      >
                        <div
                          className={`border rounded-full border-light-grey flex items-center justify-center w-fit- h-[90px] w-[90px]
                          sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] 2xl:w-[200px] 2xl:h-[200px]
                          `}
                        >
                          <Image
                            // src={item?.image_url}
                            src={sponnsorimg}
                            alt={item?.name}
                            width={150}
                            height={75}
                            sizes="100vw"
                            className={`w-full h-auto object-cover max-w-[70px] sm:max-w-[90px] lg:max-w-[110px] xl:max-w-[120px] 2xl:max-w-[150px]
                            `}
                          />
                        </div>
                        <p className="mt-2.5 md:mt-5 text-tms-tanker-blue-2 text-center text-sm md:text-base leading-[18px] capitalize  ">
                          {item?.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>

      <div className=" items-center justify-center space-x-4 mt-5   flex">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="md:absolute top-[50%] md:-translate-y-1/2  -left-5 z-20 bg-white p-3 flex items-center justify-center rounded-full text-[#22334F] text-lg  font-normal border border-[#DEDEDE] "
        >
          <IoMdArrowBack />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="md:absolute  top-[50%] md:-translate-y-1/2   -right-5 z-20 bg-white p-3 flex items-center justify-center rounded-full text-[#22334F] text-lg  font-normal border border-[#DEDEDE] "
        >
          <IoArrowForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default SponsorSwiper;
