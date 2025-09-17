import HomeSwiperTwo from "@/components/shared/Swiper/TankerSwipers/HomeSwiperTwo";
import ButtonOrLink from "@/components/shared/ui/Button";
import { ButtonLinksProps, SessionPropsType } from "@/types/common";
import React from "react";

type Props = {
  heading: string;
  registerNow: ButtonLinksProps;
  sponsorBtnData: ButtonLinksProps;
  data: SessionPropsType[];
};

const HomeSectionThree = ({
  heading,
  registerNow,
  sponsorBtnData,
  data,
}: Props) => {
  return (
    <section className="section-wrapper section-container">
      <div className="w-full  ">
        <div className="px-4 md:px-8 lg:px-10 xl:px-14 bg-tms-dark-1 w-full  ">
          <div className="flex flex-col md:flex-row md:justify-between md:gap-x-5  border-b pt-7 pb-5 md:py-8  border-dashed items-center border-b-white w-full ">
            <h3 className="gradient-text-2  w-fit main-heading leading-3 font-bold md:leading-[40px]  lg:leading-main mx-auto md:mx-0 text-center md:text-left">
              {heading}
            </h3>

            <div className="flex gap-3  md:block mt-5 sm:mt-6 md:mt-0">
              <ButtonOrLink
                isBigText={false}
                isGradient={true}
                hrefs={registerNow?.value}
              >
                {registerNow?.title}
              </ButtonOrLink>
            </div>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(180deg, #000 0%, #008AC0 84.95%)",
          }}
          className="pt-4 md:pt-7 lg:py-10 pb-6 md:pb-8  xl:py-14 px-4 md:px-8 lg:px-10 xl:px-14 "
        >
          <div className="pb-6- md:pb-8 lg:pb-12 xl:pb-16 border-b border-dashed border-b-white">
            <HomeSwiperTwo sessionData={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;
