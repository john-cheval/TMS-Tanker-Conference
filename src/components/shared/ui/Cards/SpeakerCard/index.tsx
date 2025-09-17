import { SpeakersType } from "@/types/common";
import Image from "next/image";
import React from "react";
import speaker1 from "@/assets/Home/speaker1.png";
import topSvg from "@/assets/icons/top.png";
import bottomSvg from "@/assets/icons/bottom.png";

const SpeakerCard = (props: SpeakersType) => {
  const { image_url, name, post } = props;
  return (
    <div className="border border-tms-tanker-blue py-6 lg:py-8 px-5 md:px-10 lg:px-14  relative h-full flex flex-col">
      <div className="relative w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] rounded-full p-[2px] gradient-border-wrapper mx-auto">
        <Image
          // src={image_url ?? ""}
          src={speaker1}
          alt={name ?? ""}
          width={138}
          height={141}
          className="w-full h-full rounded-full object-cover"
        />

        <Image
          src={topSvg}
          alt="topSvg"
          width={60}
          height={30}
          className="w-full max-w-10 sm:max-w-14 h-auto object-cover absolute -top-[10px] -left-5 sm:-left-[35px] rotate-[-5deg]"
        />

        <Image
          src={bottomSvg}
          alt="bottomSvg"
          width={60}
          height={30}
          className="w-full max-w-10 sm:max-w-14 h-auto object-cover absolute bottom-[-5px] sm:-bottom-5 -right-5 sm:-right-8"
        />
      </div>

      <div className="mt-4 space-y-1.5 flex flex-col h-full">
        <p className="text-tms-tanker-blue-2 text-base font-bold uppercase leading-5 text-center min-h-[50px] ">
          {name}
        </p>
        <p className="text-tms-black text-center text-base font-normal leading-5">
          {post}
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;
