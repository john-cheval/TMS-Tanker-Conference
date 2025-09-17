import { SectionOnePropsTyps } from "@/types/common";
import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const HomeSectionEightAlter = ({
  heading,
  all_benefits,
}: SectionOnePropsTyps) => {
  return (
    <section className="section-wrapper">
      <div className="pb-8 sm:pb-0 border-b sm:border-b-0 border-[#bdbdbd] ">
        <h4 className="sub_heading-1">{heading}</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-6 md:gap-8 lg:grid-cols-4 gap-x-10 xl:gap-x-16 3xl:gap-x-20 mt-5 sm:mt-6 md:mt-8">
          {all_benefits &&
            all_benefits?.length > 0 &&
            all_benefits?.map((item, index) => {
              return (
                <div
                  key={index + 1}
                  className="flex flex-row sm:flex-col gap-x-3 sm:gap-x-0 sm:gap-y-3"
                >
                  <IoCheckmarkCircleOutline className="text-tms-blue text-xl mt-1 sm:mt-0 sm:text-2xl shrink-0 " />

                  <div>
                    <h6 className="text-dark-alter text-base md:text-lg font-normal leading-5 mb-2.5 md:mb-4">
                      {item?.title}
                    </h6>
                    <p className="text-dark-grey text-sm leading-6">
                      {item?.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default HomeSectionEightAlter;
