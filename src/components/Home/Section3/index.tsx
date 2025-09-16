"use client";
import React, { useRef, useState } from "react";
import ai from "@/assets/shared/ai_big_460.svg";
import Image from "next/image";
import { SectionOnePropsTyps } from "@/types/common";
import SmallTitle from "@/components/shared/ui/Headings/SmallTitle";
import SectionHeading from "@/components/shared/ui/Headings/SectionHeading";
import BigButton from "@/components/shared/ui/Button/BigButton";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { IoVolumeMediumOutline } from "react-icons/io5";

const HomeSectionThree = ({
  small_title,
  image,
  heading,
  description,
  button_text,
  button_link,
  video,
}: SectionOnePropsTyps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlay, setIsPlay] = useState(false);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isPlay) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlay(!isPlay);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="section-wrapper  section-container ">
      <div className="grid grid-cols-12 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 relative">
        <article className="relative col-span-12 md:col-span-7 lg:col-span-6  h-full z-50">
          <video
            playsInline
            muted={isMuted}
            loop
            autoPlay={isPlay}
            poster={image}
            id="video"
            controlsList="nodownload"
            ref={videoRef}
            className="h-full w-full  object-cover rounded-2xl"
          >
            <source src={video} type="video/mp4" />
          </video>
          <button
            className="px-4 py-2 text-white bg-tms-black text-base font-bold leading-5 rounded-4xl absolute right-5 top-5
        "
            onClick={handlePlayPause}
          >
            {isPlay ? "Pause Video" : "Play Video"}
          </button>

          {isPlay && (
            <div
              onClick={toggleMute}
              className="absolute bottom-5 right-5 text-2xl text-tms-blue cursor-pointer bg-white flex items-center justify-center p-3 rounded-full"
            >
              {isMuted ? <IoVolumeMuteOutline /> : <IoVolumeMediumOutline />}
            </div>
          )}
        </article>
        <article className="col-span-12 md:col-span-5 lg:col-span-6 relative z-50 mt-8 md:mt-0 ">
          <SmallTitle title={small_title} />

          <div className="pt-4 md:pt-8 lg:pt-8 space-y-5 md:space-y-6 lg:space-y-8">
            <SectionHeading main_title={heading} />

            {description && (
              <div
                className="descriptionWithList description space-y-5 md:space-y-6 lg:space-y-8 text-tms-black"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            <div className="flex justify-center md:justify-start ">
              <BigButton hrefs={button_link}>{button_text}</BigButton>
            </div>
          </div>
        </article>

        <Image
          src={ai}
          alt="TMS_AI"
          width={100}
          height={100}
          sizes="100vw"
          className="w-full h-auto object-cover absolute max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] -left-10 md:left-[43%] md:-translate-x-1/2 -top-[100px] sm:-top-[110px] lg:-top-[151px]"
        />
      </div>
    </section>
  );
};

export default HomeSectionThree;
