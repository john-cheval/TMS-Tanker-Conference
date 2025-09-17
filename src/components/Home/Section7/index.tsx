import YoutubePlayer from "@/components/shared/ui/VideoPlayer";
import { YoutubeTestimonialsTypes } from "@/types/common";
import React from "react";
type Props = {
  heading: string;
  youtube_testimonials: YoutubeTestimonialsTypes[];
};

const HomeSectionSeven = ({ heading, youtube_testimonials }: Props) => {
  return (
    <section className="section-wrapper pt-8 md:pt-10 lg:pt-12 xl:pt-16">
      <h3 className="main-heading gradient-text-3 leading-3 font-bold md:leading-[40px]  lg:leading-main text-center md:text-left w-fit mx-auto md:mx-0">
        {heading}
      </h3>

      <div className="mt-5 md:mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-4 lg:gap-6 ">
        {youtube_testimonials?.map((item, index) => {
          return (
            <div key={index + 1}>
              <YoutubePlayer {...item} />
              <div className="mt-2 sm:mt-4 lg:mt-6">
                <p className="text-lg mg:text-xl lg:text-2xl font-medium  leading-3 ">
                  Capt. Franck J Kayser{" "}
                </p>
                <p className="text-base font-normal leading-5 mt-0.5 md:mt-1">
                  COO, Asyad Shipping Company
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeSectionSeven;
