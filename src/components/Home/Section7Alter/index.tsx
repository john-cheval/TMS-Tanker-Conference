import BigButton from "@/components/shared/ui/Button/BigButton";
import SectionHeadingTwo from "@/components/shared/ui/Headings/SectionHeading2";
import SmallTitle from "@/components/shared/ui/Headings/SmallTitle";
import { SectionOnePropsTyps } from "@/types/common";
import Image from "next/image";
import React from "react";

const HomeSectionSevenAlter = ({
  small_title,
  heading,
  description,
  image,
  button_link,
  button_text,
}: SectionOnePropsTyps) => {
  return (
    <section className="section-container">
      <div className="w-full">
        <div className="grid grid-cols-12 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 relative bg-dark-alter">
          <article className="col-span-12 md:col-span-7 lg:col-span-6 py-8 md:py-12 lg:py-16 xl:py-20 space-y-5 md:space-y-8  lg:space-y-10 px-5 sm:px-8 md:pl-10 lg:pl-16 order-1 md:order-0">
            <SmallTitle title={small_title} isBorder={false} isDark={true} />
            <SectionHeadingTwo title={heading} />
            {description && (
              <div
                className="description descriptionWithList2 text-light-grey"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
            <div className="flex justify-center md:justify-start ">
              <BigButton hrefs={button_link}>{button_text}</BigButton>
            </div>
          </article>
          <article className="col-span-12 md:col-span-5 lg:col-span-6 order-0 md:order-1">
            <Image
              src={image ?? ""}
              alt={heading ?? ""}
              width={700}
              height={800}
              className="w-full h-full object-cover"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionSevenAlter;
