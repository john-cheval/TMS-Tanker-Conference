import HomeSwiperOne from "@/components/shared/Swiper/TankerSwipers/HomeSwiperOne";
import React from "react";

type Props = {
  heading: string;
  main_heading: string;
  description: string;
  gallery: string[];
};

const HomeSectionTwo = ({
  heading,
  main_heading,
  description,
  gallery,
}: Props) => {
  return (
    <section className="section-wrapper section-container- py-20">
      <div className="grid grid-cols-12 gap-x-10">
        <h3 className="w-fit col-span-4 main-heading gradient-text leading-3 md:leading lg:leading-1 font-bold">
          {heading}
        </h3>

        <div className="col-span-8 mt-2- space-y-4">
          <h5 className="text-xl md:text-2xl text-tms-tanker-blue leading-5 font-medium">
            {main_heading}
          </h5>
          <p className="description">{description}</p>
        </div>
      </div>

      <div className="mt-20">
        <HomeSwiperOne swiperGallery={gallery} />
      </div>
    </section>
  );
};

export default HomeSectionTwo;
