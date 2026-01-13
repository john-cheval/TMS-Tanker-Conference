import BigButton from "@/components/shared/ui/Button/BigButton";
import SectionHeadingTwo from "@/components/shared/ui/Headings/SectionHeading2";
import { SectionOnePropsTyps } from "@/types/common";
import Image from "next/image";
import React from "react";

const SponsorBenifitsAlter = ({
  heading,
  all_benefits,
}: SectionOnePropsTyps) => {
  return (
    <section className="section-wrapper mb-5 md:mt-0">
      <SectionHeadingTwo title={heading} isDark={true} />
      {all_benefits && (
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3  md:gap-4 xl:gap-6 mt-6 md:mt-8 xl:mt-10 ">
          {Object.values(all_benefits)?.map((item, index) => {
            return (
              <div
                key={index + 1}
                className="relative rounded-sm  overflow-hidden"
              >
                <Image
                  src={item?.image_url ?? ""}
                  // alt={item?.title}
                  alt={item?.image_alt_tag ?? ""}
                  width={390}
                  height={390}
                  className="w-full h-auto object-cover "
                />

                <div className="space-y-2.5 absolute bottom-5 xl:bottom-7 left-5 xl:left-7 right-6 z-50">
                  <h5 className="text-white text-xl lg:text-2xl font-bold leading-4 lg:leading-3">
                    {item?.title}
                  </h5>
                  <p className="text-white text-sm font-normal leading-6">
                    {item?.description}
                  </p>
                </div>
                <div className="CardGraient absolute bottom-0 left-0 w-full h-full" />
              </div>
            );
          })}
        </div>
      )}

      <div className="flex justify-center mt-5 md:mt-8">
        <BigButton hrefs="/">
          View the range of Sponsorship Opportunities here
        </BigButton>
      </div>
    </section>
  );
};

export default SponsorBenifitsAlter;
