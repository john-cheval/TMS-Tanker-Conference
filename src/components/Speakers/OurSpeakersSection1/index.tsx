import SpeakersCard from "@/components/shared/ui/Cards/SpeakerCard/SpeakerCardAlter";
import Link from "next/link";
import React from "react";

type SpeakersCardData = {
  name: string;
  slug: string;
  post: string;
  company: string;
  image_url: string;
};

type Props = {
  heading: string;
  data: SpeakersCardData[];
};

const OurSpeakersSectionOne = ({ heading, data }: Props) => {
  return (
    <section className="section-wrapper pt-3 md:pt-6 lg:pt-11 mb-7 md:mb-8 lg:mb-12 xl:mb-14 ">
      <div className="border-b border-dashed border-b-[#8E8E8E] pb-7 md:pb-8 lg:pb-10 ">
        <h3 className="main-heading-2 leading-3 font-bold md:leading-[40px]  lg:leading-main w-fit gradient-text text-center mx-auto">
          {heading}
        </h3>

        <div className="mt-5  md:mt-8  lg:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-3 lg:gap-4 auto-rows-fr   ">
          {data &&
            data?.map((speaker, index) => {
              return <SpeakersCard key={index} {...speaker} />;
            })}
        </div>

        <Link
          href="#"
          className="text-white text-sm sm:text-base font-medium text-center w-fit py-3 px-7 gradient-master block mx-auto mt-12"
        >
          Become a speaker
        </Link>
      </div>
    </section>
  );
};

export default OurSpeakersSectionOne;
