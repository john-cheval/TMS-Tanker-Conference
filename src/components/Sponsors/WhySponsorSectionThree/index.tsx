"use client";
import { benifitsType } from "@/types/common";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type SwiperCore from "swiper";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import SponsorBenifitCard from "@/components/shared/ui/Cards/SponsorBenifitCard";
import Link from "next/link";

type Props = {
  heading: string;
  all_benefits: benifitsType[];
};

const WhySponsorSectionThree = ({ all_benefits }: Props) => {
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
  const clonedData = [...all_benefits, ...all_benefits];
  return (
    <>
      <section className="section-wrapper pt-8 md:pt-10 lg:pt-12 xl:pt-16">
        <div className="flex md:justify-between items-center">
          <h4 className="w-fit main-heading leading-3 font-bold md:leading-[40px]  lg:leading-main gradient-text mb-2 lg:mb-3 mx-auto md:mx-0 text-center">
            Sponsorship offers numerous benefits
          </h4>

          <div className=" items-center justify-center space-x-4 hidden   md:flex">
            <button
              onClick={handlePrev}
              className=" z-20 bg-white p-3 flex items-center justify-center rounded-full text-[#22334F] text-lg  font-normal border border-[#DEDEDE] "
            >
              <IoMdArrowBack />
            </button>
            <button
              onClick={handleNext}
              className=" z-20 bg-white p-3 flex items-center justify-center rounded-full text-[#22334F] text-lg  font-normal border border-[#DEDEDE] "
            >
              <IoMdArrowForward />
            </button>
          </div>
        </div>
      </section>
      <div className="relative w-full mt-5 md:mt-7 lg:mt-10 px-5 sm:px-8 md:pl-10 lg:pl-16 xl:pl-20">
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
              slidesPerView: 1,
              spaceBetween: 11,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 11,
            },
            800: {
              slidesPerView: 2.75,
              spaceBetween: 11,
            },
            1025: {
              slidesPerView: 3.2,
              spaceBetween: 12,
            },
            1400: {
              slidesPerView: 4.2,
              spaceBetween: 20,
            },
          }}
        >
          {clonedData &&
            clonedData?.length > 0 &&
            clonedData?.map((item: any, index: number) => {
              return (
                <SwiperSlide key={index + 1}>
                  <SponsorBenifitCard {...item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>

      <div className=" items-center justify-center space-x-4 flex  mt-5   md:hidden">
        <button
          onClick={handlePrev}
          className=" z-20 bg-white p-3 flex items-center justify-center rounded-full text-[#22334F] text-lg  font-normal border border-[#DEDEDE] "
        >
          <IoMdArrowBack />
        </button>
        <button
          onClick={handleNext}
          className=" z-20 bg-white p-3 flex items-center justify-center rounded-full text-[#22334F] text-lg  font-normal border border-[#DEDEDE] "
        >
          <IoMdArrowForward />
        </button>
      </div>

      {/* button */}

      <Link
        href="#"
        className="font-medium text-sm md:text-base text-white py-4  px-6 md:px-8 block sm:w-fit mx-5 sm:mx-auto mt-5 md:mt-10"
        style={{
          background: "linear-gradient(90deg, #008AC0 0%, #00A25D 100%)",
        }}
      >
        Click here to view the sponsorship option
      </Link>
    </>
  );
};

export default WhySponsorSectionThree;
