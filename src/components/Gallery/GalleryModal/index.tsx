"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import isVideo from "@/lib/CheckIsVideo";

type Props = {
  initialIndex?: number;
  data?: any;
  onClose?: any;
  isOpen?: any;
};

const GalleryModal = ({ initialIndex, data, onClose, isOpen }: Props) => {
  useEffect(() => {
    const handleKey = (e: any) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-full bg-black/[0.73] flex items-center justify-center z-[999958]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {isOpen && (
        <motion.div
          className="relative w-full max-w-[90%] sm:max-w-[600px] md:max-w-3xl lg:max-w-5xl mx-auto z-[999958]"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <Swiper
            initialSlide={initialIndex}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            loop
            modules={[Navigation, Autoplay]}
            className="overflow-hidden- relative w-full max-w-[85%] sm:max-w-[500px] md:max-w-2xl lg:max-w-3xl"
          >
            {data.map((item: any, index: number) => (
              <SwiperSlide key={index} className="relative">
                {isVideo(item.image_url) ? (
                  <video
                    src={item.image_url}
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full max-h-[500px]- object-contain bg-black"
                  />
                ) : (
                  <Image
                    src={item.image_url}
                    // alt={`gallery-${index}`}
                    alt={item.image_alt_tag ?? ""}
                    width={1200}
                    height={800}
                    className="w-full h-full max-h-[500px]- object-contain"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Correctly positioned buttons */}
          <button className="swiper-button-prev-custom absolute top-1/2 -left-3 lg:left-14 -translate-y-1/2 z-20 text-5xl text-white">
            <span className="sr-only">Previous</span>
            <MdKeyboardArrowLeft />
          </button>

          <button className="swiper-button-next-custom absolute top-1/2 -right-3 lg:right-14 -translate-y-1/2 z-20 text-5xl text-white">
            <span className="sr-only">Next</span>
            <MdKeyboardArrowRight />
          </button>

          <button
            onClick={onClose}
            className="absolute -top-7 md:-top-9 right-4 lg:right-24 bg-main rounded-full p-2 z-10 cursor-pointer"
          >
            <GrClose className="text-lg md:text-xl text-white" />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GalleryModal;
