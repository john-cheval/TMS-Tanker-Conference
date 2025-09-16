import Image from "next/image";
import React from "react";
import TmsAI from "@/assets/shared/ai_big_60.svg";
import CountdownTimer from "@/components/shared/Countdown";
import { formatDate } from "@/utils/formatDate";
import ButtonOrLink from "@/components/shared/ui/Button";
import { buttonApIPropsType, SectionOnePropsTyps } from "@/types/common";
import svgIcon from "@/assets/Home/tms.jpg";

type Props = SectionOnePropsTyps & {
  registerNow: buttonApIPropsType;
  sponsorBtnData: buttonApIPropsType;
};

const HomeSectionOneAlter = (props: Props) => {
  const {
    small_title,
    small_title_2,
    banner_image,
    location_heading,
    main_heading,
    callForPaperDate,
    earlyBirdsDate,
    eventDate,
    call_for_papers_heading,
    eirly_bird_offer_heading,
    event_date_heading,
    registerNow,
    sponsorBtnData,
  } = props;

  return (
    <>
      <section className="home-banner-section relative text-white text-center">
        <div className="relative h-full">
          <video
            src={banner_image || "/banner_video.mp4"}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover z-[5]"
          />

          <div className="home-banner-gradient w-full h-full absolute inset-0 z-10" />
        </div>

        <div className="absolute z-20 bottom-10 md:top-[15%] w-full flex flex-col items-center justify-center gap-y-2 md:gap-y-3 lg:gap-y-4 px-5">
          <div className="flex gap-x-2.5 items-center ">
            <Image
              src={TmsAI}
              width={60}
              height={60}
              alt="Tms_AI"
              className="w-full h-auto object-cover max-w-10 md:max-w-[50px]"
            />
            <p className=" text-sm font-bold leading-6 w-full">{small_title}</p>
          </div>

          {small_title_2 && (
            <h2
              className="text-base md:text-xl lg:text-2xl font-medium leading-5 md:leading-6 mb-2 md:mb-1 lg:mb-3 home-title-2"
              dangerouslySetInnerHTML={{ __html: small_title_2 }}
            ></h2>
          )}

          <h1 className="main-heading font-bold leading-3 md:leading-3 lg:leading-1 mb-2 md:mb-0 lg:mb-4 max-w-[600px] lg:max-w-[800px]">
            {main_heading}
          </h1>

          <div>
            <div className="animated-top-bottom-border border-r border-l border-tms-pink border-l-tms-pink rounded-sm">
              <p className="text-xs sm:text-sm md:text-xl lg:text-2xl font-bold leading-3 p-3 md:p-4 text-white">
                {location_heading}
              </p>
            </div>
          </div>

          <div className="flex gap-x-2 md:hidden mt-4 md:0 ">
            <ButtonOrLink
              hrefs={registerNow?.value}
              isGradient={false}
              isIcon={false}
              isLink={true}
            >
              {registerNow?.title}
            </ButtonOrLink>
            <ButtonOrLink
              hrefs={sponsorBtnData?.value}
              isGradient={true}
              isIcon={true}
              isLink={true}
            >
              {sponsorBtnData?.title}
            </ButtonOrLink>
          </div>
          <CountdownTimer targetDate={earlyBirdsDate} />

          <div
            className="mt-5 rounded-sm py-7 px-10 md:px-16 lg:px-20 xl:px-28 w-[80%] md:flex justify-between items-stretch hidden"
            style={{
              background:
                "linear-gradient(68deg, #4D1592 26.51%, #0078BB 86.42%)",
            }}
          >
            <div className="flex flex-col gap-y-2">
              <h5 className="md:text-base lg:text-lg text-center leading-4">
                {call_for_papers_heading}
              </h5>
              <p className="text-xl lg:text-2xl font-bold leading-3 text-center">
                {formatDate(callForPaperDate)}
              </p>
            </div>
            <div className="block bg-white  w-[1px]" />
            <div className="flex flex-col gap-y-2">
              <h5 className="md:text-base lg:text-lg text-center leading-4">
                {eirly_bird_offer_heading}
              </h5>
              <p className="text-xl lg:text-2xl font-bold leading-3 text-center">
                {formatDate(earlyBirdsDate)}
              </p>
            </div>
            <div className="block bg-white w-[1px]" />
            <div className="flex flex-col gap-y-2">
              <h5 className="md:text-base lg:text-lg text-center leading-4">
                {event_date_heading}
              </h5>
              <p className="text-xl lg:text-2xl font-bold leading-3 text-center">
                {formatDate(eventDate)}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="  py-8 px-5 md:hidden text-white  items-center justify-center flex flex-col w-full gap-y-4"
        style={{
          background: `url(${svgIcon.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="flex flex-col gap-y-1">
          <h5 className="text-base text-center leading-4">
            {call_for_papers_heading}
          </h5>
          <p className="text-xl font-bold leading-3 text-center">
            {formatDate(callForPaperDate)}
          </p>
          <div className="block bg-white  w-16 h-[1px] mt-2 mx-auto" />
        </div>

        <div className="flex flex-col gap-y-2">
          <h5 className="text-base text-center leading-4">
            {eirly_bird_offer_heading}
          </h5>
          <p className="text-xl font-bold leading-3 text-center">
            {formatDate(earlyBirdsDate)}
          </p>
          <div className="block bg-white  w-16 h-[1px] mt-2 mx-auto" />
        </div>
        <div className="flex flex-col gap-y-2">
          <h5 className="text-base text-center leading-4">
            {event_date_heading}
          </h5>
          <p className="text-xl font-bold leading-3 text-center">
            {formatDate(eventDate)}
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeSectionOneAlter;
