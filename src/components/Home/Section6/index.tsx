import BigButton from "@/components/shared/ui/Button/BigButton";
import AgendaCard from "@/components/shared/ui/Cards/AgendaCard";
import SectionHeadingTwo from "@/components/shared/ui/Headings/SectionHeading2";
import SmallTitle from "@/components/shared/ui/Headings/SmallTitle";
import { SectionOnePropsTyps } from "@/types/common";
import React from "react";

const HomeSectionSix = ({
  small_title,
  heading,
  button_text,
  button_link,
  short_description,
  image_gallery,
}: SectionOnePropsTyps) => {
  return (
    <section className="section-wrapper section-container">
      <div className="w-full">
        <div>
          <SmallTitle title={small_title} isBorder={false} />
          <div className="flex lg:justify-between mt-3  items-center mb-2">
            <SectionHeadingTwo title={heading} />
          </div>
          <p className="description text-dark-alter">{short_description}</p>
        </div>

        <div className="mt-6 lg:mt-8 grid grid-cols-1 gap-y-3  lg:gap-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3  md:gap-x-3 lg:gap-x-4">
            {image_gallery &&
              image_gallery?.length > 0 &&
              image_gallery?.slice(0, 2)?.map((item, index) => {
                return <AgendaCard key={index} {...item} />;
              })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-x-3 lg:gap-x-4">
            {image_gallery?.[2] && <AgendaCard {...image_gallery?.[2]} />}

            <div className="grid grid-cols-1 gap-y-3  lg:gap-y-4">
              {image_gallery &&
                image_gallery?.slice(3, 5)?.map((item, index) => {
                  return <AgendaCard key={index} {...item} />;
                })}
            </div>

            {image_gallery?.[image_gallery?.length - 1] && (
              <AgendaCard {...image_gallery?.[image_gallery?.length - 1]} />
            )}
          </div>
        </div>

        <div className="flex justify-center lg:hidden- mt-6 md:mt-8">
          <BigButton hrefs={button_link} isBig={true}>
            {button_text}
          </BigButton>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionSix;
