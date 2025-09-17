import HomeSwiperOne from "@/components/shared/Swiper/TankerSwipers/HomeSwiperOne";
import ResponsiveSwiper from "@/components/shared/Swiper/TankerSwipers/ResponsiveSwiper";
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
    <section className="section-wrapper section-container- mt-[210px] md:mt-0 pt-12 md:py-16  lg:py-20">
      <div>
        <div className="grid grid-cols-12 md:gap-x-6 lg:gap-x-10">
          <h3 className="w-fit  col-span-12  md:col-span-5 lg:col-span-4 main-heading gradient-text leading-3 md:leading lg:leading-1 font-bold text-center md:text-left mb-3">
            {heading}
          </h3>

          <div className=" col-span-12  md:col-span-7 lg:col-span-8 space-y-3 md:space-y-4">
            <h5 className="text-xl md:text-2xl text-tms-tanker-blue leading-5 font-medium text-center md:text-left">
              {main_heading}
            </h5>
            <p className="description text-center md:text-left">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-10 lg:mt-16 xl:mt-20 hidden md:block">
          <HomeSwiperOne swiperGallery={gallery} />
        </div>

        <div className="mt-10 md:hidden">
          <ResponsiveSwiper swiperGallery={gallery} />
        </div>
      </div>
    </section>
  );
};

export default HomeSectionTwo;
