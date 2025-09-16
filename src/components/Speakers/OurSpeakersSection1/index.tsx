import SpeakersCard from "@/components/shared/ui/Cards/SpeakerCard";
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
  const splittedHeading = heading?.split(" ").filter(Boolean);

  return (
    <section className="section-wrapper pt-3 md:pt-6 lg:pt-11 pb-7 md:pb-8 lg:pb-12 xl:pb-14">
      <h3 className="main-heading leading-1 font-bold text-tms-black text-left md:text-center">
        <span className="text-tms-purple">{splittedHeading[0]}</span>{" "}
        {splittedHeading?.slice(1).join(" ")}
      </h3>

      <div className="mt-3  md:mt-8  lg:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-3 lg:gap-4   ">
        {data &&
          data?.map((speaker, index) => {
            return <SpeakersCard key={index} {...speaker} />;
          })}
      </div>
    </section>
  );
};

export default OurSpeakersSectionOne;
