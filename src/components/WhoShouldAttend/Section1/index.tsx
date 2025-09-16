import BigButton from "@/components/shared/ui/Button/BigButton";
import SmallTitle from "@/components/shared/ui/Headings/SmallTitle";
import { SectionOnePropsTyps } from "@/types/common";
import Image from "next/image";
import ai from "@/assets/shared/ai_small_24.svg";
import React from "react";

const WhoShouldAttendSectionOne = ({
  small_title,
  heading,
  description,
  button_link,
  button_text,
  image,
  image_alt_tag,
  image_2,
  image_alt_tag_2,
  heading_2,
  description_2,
}: SectionOnePropsTyps) => {
  return (
    <section className="section-wrapper pt-5 md:pt-8 lg:pt-10 xl:pt-16 2xl:pt-20 ">
      <SmallTitle title={small_title} />

      <div className="grid grid-cols-12 gap-y-5 lg:gap-y-0 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 pt-4 md:pt-8 lg:pt-10 xl:pt-14">
        <article className="col-span-12 lg:col-span-6 flex flex-col justify-center mt-6">
          <h3 className="main-heading text-tms-purple leading-3 lg:leading-2 xl:leading-1 font-bold">
            {heading}
          </h3>
          <div
            className="description text-dark-alter mt-3 md:mt-4 mb-5 md:mb-7 lg:mb-10 xl:mb-11"
            dangerouslySetInnerHTML={{ __html: description ?? "" }}
          />
          <div className="">
            <BigButton hrefs={button_link}>{button_text}</BigButton>
          </div>
        </article>
        <article className="col-span-12 lg:col-span-6 ">
          <Image
            src={image ?? ""}
            alt={image_alt_tag ?? "Who Should Attend"}
            width={285}
            height={400}
            className="w-full h-full  object-cover responsive-radius  shrink-0"
          />
        </article>
      </div>
      <div className="grid grid-cols-12 gap-y-6 lg:gap-y-0 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 mt-4 md:mt-8 lg:mt-14 xl:mt-14">
        <article className="col-span-12 lg:col-span-6 ">
          <Image
            src={image_2 ?? ""}
            alt={image_alt_tag_2 ?? "Who Should Attend"}
            width={285}
            height={400}
            className="w-full h-full  object-cover responsive-radius  shrink-0"
          />
        </article>
        <article className="col-span-12 lg:col-span-6 flex flex-col justify-center">
          <h6 className="description text-black font-bold leading-5 flex  gap-x-2.5 pb-4 border-b border-light-grey ">
            <Image
              src={ai}
              alt="TMS AI"
              width={24}
              height={24}
              className="w-full h-fit object-contain max-w-[24px]"
            />
            {heading_2}
          </h6>
          <div
            className="attend-description text-dark-alter mt-4 md:mt-5 lg:mt-6 "
            dangerouslySetInnerHTML={{ __html: description_2 ?? "" }}
          />
        </article>
      </div>
    </section>
  );
};

export default WhoShouldAttendSectionOne;
