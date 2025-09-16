"use client";
import React, { useRef } from "react";
import SectionHeadingTwo from "../ui/Headings/SectionHeading2";
import YoutubePlayer from "../ui/VideoPlayer";
import "swiper/css";
import "swiper/css/navigation";
import type SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { YoutubeTestimonialsTypes } from "@/types/common";

interface TestimonialsPropsType {
  heading?: string;
  youtube_testimonials: YoutubeTestimonialsTypes[];
}

const Testimonials = ({
  youtube_testimonials,
  heading,
}: TestimonialsPropsType) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="section-wrapper section-container- pb-20-">
      <div className="w-full">
        <SectionHeadingTwo title={heading} />

        <div className="mt-10  grid-cols-4 hidden lg:grid">
          {youtube_testimonials &&
            youtube_testimonials.length > 0 &&
            youtube_testimonials?.map((item, index) => {
              return (
                <div
                  key={index + 1}
                  className="min-h-[450px]- relative overflow-hidden"
                >
                  <YoutubePlayer {...item} />
                  <p className="overlay-description">{item?.title}</p>
                  <div className="CardGraient absolute bottom-0 left-0 w-full h-full max-h-[100px]" />
                </div>
              );
            })}
        </div>

        <div className="mt-6 block lg:hidden">
          <div className="relative w-full mt-6">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop
              // modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {youtube_testimonials &&
                youtube_testimonials?.length > 0 &&
                youtube_testimonials?.map((item, index) => {
                  return (
                    <SwiperSlide
                      key={index + 1}
                      className="relative overflow-hidden"
                    >
                      <YoutubePlayer {...item} />
                      <p className="overlay-description">{item?.title}</p>
                      <div className="CardGraient absolute bottom-0 left-0 w-full h-full max-h-[150px]" />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            <div className=" items-center justify-center space-x-4 mt-5 lg:mt-0 flex lg:hidden">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="z-20 bg-[#f7f7f7] p-2 flex items-center justify-center rounded-full text-tms-purple text-2xl md:text-3xl font-normal "
              >
                <MdOutlineKeyboardArrowLeft />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="z-20 bg-[#f7f7f7] p-2 flex items-center justify-center rounded-full text-tms-purple text-2xl md:text-3xl font-normal"
              >
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
