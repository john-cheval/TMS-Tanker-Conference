import BigButton from "@/components/shared/ui/Button/BigButton";
import WhyAttendCard from "@/components/shared/ui/Cards/WhyAttendCard";
import { WhyAttendListType } from "@/types/common";
import React from "react";

type Props = {
  heading: string;
  why_attend_list: WhyAttendListType[];
};

const WhyAttendSection = (props: Props) => {
  const { heading, why_attend_list } = props;
  return (
    <section className="section-wrapper pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-[70px] ">
      <h3 className="main-heading text-tms-purple font-bold leading-3 lg:leading-2 xl:leading-1">
        {heading}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 sm:gap-y-3 md:gap-x-3 lg:gap-x-5 mt-4 md:mt-5 lg:mt-7">
        {/* first Column */}
        <div className="space-y-4 sm:space-y-3 lg:space-y-5">
          {why_attend_list?.slice(0, 2)?.map((item, index) => {
            return <WhyAttendCard key={index} {...item} />;
          })}
        </div>

        {/* Second Column */}
        <div className="space-y-4 sm:space-y-3 lg:space-y-5">
          {why_attend_list?.slice(2, 4)?.map((item, index) => {
            return <WhyAttendCard key={index} {...item} />;
          })}
        </div>

        {/* Third Column */}
        <div className="space-y-4 sm:space-y-3 lg:space-y-5">
          {why_attend_list?.slice(4, 6)?.map((item, index) => {
            return <WhyAttendCard key={index} {...item} />;
          })}
        </div>
      </div>

      <div className="flex justify-center mt-5 md:mt-8">
        <BigButton hrefs="/">
          Don’t miss out—register today and take advantage of our special group
          booking rates!
        </BigButton>
      </div>
    </section>
  );
};

export default WhyAttendSection;
