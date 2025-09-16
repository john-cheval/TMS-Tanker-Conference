import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import calendar from "@/assets/icons/calendar_month.png";
import ButtonOrLink from "@/components/shared/ui/Button";
import { formatDate } from "@/utils/formatDate";

interface ButtonLinksProps {
  title: string;
  value: string;
}

type Props = {
  banner_image: string;
  main_heading: string;
  small_title: string;
  location_heading: string;
  registerNow: ButtonLinksProps;
  sponsorBtnData: ButtonLinksProps;
  small_title_2: string;
  call_for_papers_heading: string;
  eirly_bird_offer_heading: string;
  event_date_heading: string;
  callForPaperDate: string;
  earlyBirdsDate: string;
  eventDate: string;
};

const HomeSectionOne = ({
  banner_image,
  main_heading,
  small_title,
  location_heading,
  registerNow,
  sponsorBtnData,
  small_title_2,
  call_for_papers_heading,
  eirly_bird_offer_heading,
  event_date_heading,
  callForPaperDate,
  earlyBirdsDate,
  eventDate,
}: Props) => {
  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-black pt-16- md:pt-0 ">
        {/* Background Image */}
        <Image
          src={banner_image}
          alt={main_heading}
          fill
          priority
          className="z-0 object-cover"
        />
        {/* Overlay Content */}
        <div className="absolute sm:top-[25%] md:top-45 z-10 px-4 w-full max-w-6xl">
          <p className="text-tms-green font-medium  leading-5 main-heading-3  mb-3 md:mb-4">
            {small_title}
          </p>
          <h1 className=" font-bold main-heading  text-center capitalize text-tms-black leading-3 md:leading lg:leading-main max-w-[80%]- mx-auto">
            {main_heading}
          </h1>

          <div className="block  w-14 h-[1px] gradient-seperator1 mx-auto mt-4" />

          <div className="flex flex-col md:flex-row items-center justify-center- gap-4 md:gap-6 mt-8  w-fit mx-auto px-4 py-3 md:px-6 md:py-4  font-semibold text-[#0C1E23] bg-[#FFFFFF63] backdrop-blur-[10.4px] rounded-xs md:rounded-xs ">
            <div className="flex items-center gap-x-2 md:gap-x-2.5 ">
              <Image
                src={calendar}
                width={20}
                height={20}
                className="w-full h-full object-cover max-w-5"
                alt="calendar"
              />

              <span className="main-heading-3 font-semibold w-full">
                Thursday, 30th October 2025
              </span>
            </div>

            <div className="flex items-center gap-x-2 md:gap-x-2.5 ">
              <FaLocationDot className="text-tms-green" />
              <span className="main-heading-3 font-semibold">
                {location_heading}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col- flex-row justify-center gap-4 mt-6 md:mt-8 ">
            <ButtonOrLink isGradient={true} hrefs={sponsorBtnData?.value}>
              {sponsorBtnData?.title}
            </ButtonOrLink>

            <ButtonOrLink isGradient={false} hrefs={registerNow?.value}>
              {registerNow?.title}
            </ButtonOrLink>
          </div>
        </div>
        <div className="absolute -bottom-[200px] md:bottom-0 left-0 w-full md:w-[85%]- lg:w-[85%] 2xl:w-[75%] py-4 md:py-6 backdrop-blur-[10.3px] bg-gradient-to-r from-[rgba(34,51,79,0.9)] to-[rgba(0,138,192,0.8)] clip-path-slant">
          <div className="flex flex-col md:flex-row gap-x-5 justify-between items-center px-4 lg:pl-10 xl:pl-16 pr-5 md:pr-16 lg:pr-24 text-white w-full">
            {/* Important Dates Title */}
            <div className="flex items-center mb-4 md:mb-0">
              <p className="font-bold text-base md:text-xl lg:text-2xl">
                {small_title_2}
              </p>
            </div>

            <span className="block mx-1 h-px w-11 md:h-10 md:w-px bg-tms-tanker-blue"></span>

            {/* Date 1 */}
            <div className="flex items-center mt-4 md:mt-0 mb-4 md:mb-0 text-center md:text-left">
              <div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                  {formatDate(callForPaperDate)}
                </p>
                <p className="text-sm md:text-base lg:text-lg opacity-80">
                  {call_for_papers_heading}
                </p>
              </div>
            </div>
            <span className="block mx-1 h-px w-11 md:h-10 md:w-px bg-tms-tanker-blue mb-4 md:mb-0"></span>

            {/* Date 2 */}
            <div className="flex items-center mb-4 md:mb-0 text-center md:text-left">
              <div>
                <p className="text-lg md:text-xl lg:text-2xl font-bold">
                  {formatDate(earlyBirdsDate)}
                </p>
                <p className="text-sm md:text-lg opacity-80">
                  {eirly_bird_offer_heading}
                </p>
              </div>
            </div>
            <span className="block mx-1 h-px w-11 md:h-10 md:w-px bg-tms-tanker-blue mb-4 md:mb-0"></span>

            {/* Date 3 */}
            <div className="text-center lg:text-left">
              <p className="text-lg md:text-xl lg:text-2xl font-bold">
                {formatDate(eventDate)}
              </p>
              <p className="text-sm md:text-lg opacity-80">
                {event_date_heading}
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 w-full h-full max-h-[200px] md:max-h-[450px]"
          style={{
            background:
              "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        />
      </section>
    </>
  );
};

export default HomeSectionOne;
