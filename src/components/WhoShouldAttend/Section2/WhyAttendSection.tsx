import WhyAttendCard from "@/components/shared/ui/Cards/WhyAttendCard";
import { WhyAttendListType } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  heading: string;
  why_attend_list: WhyAttendListType[];
};

const WhyAttendSection = (props: Props) => {
  const { heading, why_attend_list } = props;

  return (
    <section className="section-wrapper pt-6 sm:pt-8 md:pt-12 lg:pt-14 pb-8 md:pb-12 lg:pb-14 xl:pb-20">
      <div className="grid grid-cols-12 gap-y-3 lg:gap-x-5">
        <div className="col-span-12 lg:col-span-4 relative">
          <Image
            src={why_attend_list[0]?.image_url ?? ""}
            // alt={why_attend_list[0]?.title ?? ""}
            alt={why_attend_list[0]?.image_alt_tag ?? ""}
            width={375}
            height={345}
            sizes="100vw"
            className="w-full h-auto max-h-[600px]- md:max-h-full- "
          />
          <h5 className="main-heading-2 text-white leading-3 font-bold md:leading-[40px]  lg:leading-main text-center absolute z-50 top-10 left-0 w-full ">
            {heading}
          </h5>

          <div className="absolute z-50 bottom-8 left-0 flex flex-col  gap-y-2 items-center w-full">
            <Link
              href={"#"}
              className="buttonGradient-3 px-6 py-3 text-white text-center font-medium block  hover:scale-[1.02] transition-all duration-300 text-sm md:text-base w-fit"
            >
              Register
            </Link>

            <p className="description text-white text-center">
              To attend the conference
            </p>
          </div>
          <div className="absolute z-40 bottom-0 left-0 CardGraient3 w-full h-full max-h-[400px]" />
          <div className="absolute z-40 top-0 left-0 CardGraient4 w-full h-full max-h-[400px]" />
        </div>
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-5">
          {why_attend_list?.slice(1)?.map((item, index) => {
            return <WhyAttendCard key={index + 1} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
