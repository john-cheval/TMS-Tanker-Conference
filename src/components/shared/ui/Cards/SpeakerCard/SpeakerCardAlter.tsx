import { SpeakersDataProps } from "@/types/common";
import Image from "next/image";
import React from "react";
import overlayIcon from "@/assets/icons/speakerCardOVerlay.png";

const SpeakersCardAlter = (props: SpeakersDataProps) => {
  const { image_url, name, post, company } = props;
  return (
    <div className=" flex flex-col h-full">
      <div className="relative border gradient-border-2 p-3 sm:p-5 md:p-6 lg:p-8">
        <Image
          src={image_url ?? ""}
          alt={name ?? ""}
          width={95}
          height={100}
          className="w-full h-auto border gradient-border-2 relative z-50"
        />
        <Image
          src={overlayIcon}
          alt={"overlay_arrow"}
          width={95}
          height={100}
          className="w-full h-auto  absolute right-1 sm:right-3  lg:right-5 top-5  md:top-8 max-w-[170px]"
        />
      </div>

      <div className="border border-t-0 gradient-border-2 p-2 md:p-3 lg:p-5 h-full">
        <p className="text-tms-tanker-blue-2 text-center text-sm sm:text-lg lg:text-2xl font-medium leading-4  mb-1 ">
          {name}
        </p>
        <p className="text-tms-tanker-blue-2 text-center text-sm md:text-base font-normal leading-5">
          {post}
        </p>
        <p className="text-tms-tanker-blue-2 text-center text-sm md:text-base font-semibold leading-5">
          {company}
        </p>
      </div>
    </div>
  );
};

export default SpeakersCardAlter;
