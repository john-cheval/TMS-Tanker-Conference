import { SpeakersDataProps } from "@/types/common";
import Image from "next/image";
import React from "react";
import Ai from "@/assets/shared/ai-speakers.png";

const SpeakersCard = (props: SpeakersDataProps) => {
  const { image_url, name, post, company } = props;
  return (
    <div className="rounded-sm bg-tms-light-blue px-4 md:px-5 lg:px-7  pt-10 md:pt-8 pb-6 md:pb-8 h-full md:min-h-[300px] relative">
      <div className="flex flex-col items-center justify-center gap-y-3 md:gap-y-5 relative z-10">
        <Image
          src={image_url ?? ""}
          alt={name ?? ""}
          width={95}
          height={100}
          className="w-full h-auto object-cover rounded-sm max-w-[100px] md:max-w-[150px]"
        />

        <div>
          <p className="text-tms-purple text-center text-base md:text-lg lg:text-xl font-bold leading-5 max-w-[250px] mb-1 md:mb-2">
            {name}
          </p>
          <p className="text-dark-alter text-center text-sm md:text-base font-normal leading-5">
            {post}
          </p>
          <p className="text-dark-alter text-center text-sm md:text-base font-normal leading-5">
            {company}
          </p>
        </div>
      </div>
      <Image
        src={Ai}
        alt="small_AI"
        width={34}
        height={34}
        className="w-full h-auto max-w-[18px] md:max-w-8 object-cover absolute top-1 xl:top-2.5 right-16 xl:right-24"
      />

      <Image
        src={Ai}
        alt="small_AI"
        width={129}
        height={129}
        className="w-full h-auto max-w-[75px] lg:max-w-[100px] xl:max-w-[129px] object-cover absolute top-3 md:top-8 right-[10%] sm:right-[20%]  md:right-0 xl:right-8"
      />
    </div>
  );
};

export default SpeakersCard;
