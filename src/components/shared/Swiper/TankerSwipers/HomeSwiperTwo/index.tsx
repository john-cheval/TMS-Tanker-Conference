"use client";
import { SessionPropsType } from "@/types/common";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type SwiperCore from "swiper";
import Image from "next/image";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import image1 from "@/assets/Home/1.png";
import Link from "next/link";

type Props = {
  sessionData: SessionPropsType[];
};

const HomeSwiperTwo = ({ sessionData }: Props) => {
  const clonedData = [...sessionData, ...sessionData, ...sessionData];
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
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1025: {
            slidesPerView: 2,
            spaceBetween: 70,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
        }}
      >
        {clonedData?.length > 0 &&
          clonedData?.map((item, index) => {
            return (
              <SwiperSlide key={index + 1} className={` `}>
                <div>
                  <Image
                    //   src={item?.image_url ?? ""}
                    src={image1}
                    alt={item?.image_alt_tag ?? ""}
                    width={350}
                    height={360}
                    className="w-full h-auto "
                  />

                  <div className="mt-10 text-white text-center md:text-left">
                    <p className=" underline  text-base font-medium">
                      {item?.post}
                    </p>

                    <h5 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-3 md:leading-2 mt-5 md:min-h-[140px]">
                      {item?.name}
                    </h5>
                    <Link
                      href={"/"}
                      className="text-base underline leading-normal hover:no-underline flex items-center justify-center md:justify-start gap-x-1 group mt-5 md:mt-8 lg:mt-10 xl:mt-16"
                    >
                      View Full Program{" "}
                      <IoMdArrowForward className="group-hover:translate-x-2 transition-transform duration-300" />{" "}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div>
        <button
          className="bg-white/[0.41] border border-white p-2 sm:p-3 flex items-center justify-center rounded-full absolute top-[25%] md:top-[20%] lg:top-[25%] -translate-y-1/2 -left-3 md:-left-7 z-50 backdrop-blur-[4px] "
          onClick={handlePrev}
        >
          <IoMdArrowBack color="#fff" className="text-lg sm:text-xl" />
        </button>

        <button
          className="bg-white/[0.41] border border-white p-2 sm:p-3 flex items-center justify-center rounded-full absolute top-[25%] md:top-[20%] lg:top-[25%] -translate-y-1/2 -right-3 md:-right-7 z-50 backdrop-blur-[4px] "
          onClick={handleNext}
        >
          <IoMdArrowForward color="#fff" className="text-lg sm:text-xl" />
        </button>
      </div>
    </div>
  );
};

export default HomeSwiperTwo;
