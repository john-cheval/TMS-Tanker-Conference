import SpeakerResponsiveSwiper from "@/components/shared/Swiper/TankerSwipers/SpeakerResponsiveSwiper";
import SpeakerCard from "@/components/shared/ui/Cards/SpeakerCard";
import { SpeakersType } from "@/types/common";
import Link from "next/link";
import React from "react";

type Props = {
  heading: string;
  button_text: string;
  button_link: string;
  data: SpeakersType[];
};

const HomeSectionFive = ({
  heading,
  button_text,
  button_link,
  data,
}: Props) => {
  return (
    <section className="section-wrapper pt-8 md:pt-10 lg:pt-12 xl:pt-16">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <h3 className="main-heading gradient-text-2 leading-3 font-bold md:leading-[40px]  lg:leading-main text-center md:text-left w-fit mx-auto md:mx-0">
          {heading}
        </h3>
        <Link
          href={button_link}
          className="px-7 text-center w-fit py-3 button-gradient text-white text-sm md:text-base block underline hover:no-underline mt-4 sm:mt-0"
        >
          {button_text}
        </Link>
      </div>

      <div className="mt-6 hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 xl:gap-4">
        {data &&
          data?.length > 0 &&
          data?.map((item, index) => {
            return <SpeakerCard key={item?.id || index + 1} {...item} />;
          })}
      </div>

      <div className="mt-5 sm:hidden">
        <SpeakerResponsiveSwiper swiperData={data} />
      </div>
    </section>
  );
};

export default HomeSectionFive;
