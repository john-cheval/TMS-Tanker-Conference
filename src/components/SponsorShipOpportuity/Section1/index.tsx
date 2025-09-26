"use client";
import React, { useRef } from "react";
import Packages from "../Packages/Packages";
import PackagesAccordion from "../PackagesAccordion";
import BecomeSponsorSmall from "@/components/Forms/BecomeSponsorSmall";

type Props = {
  heading?: string;
  description?: string;
  data?: any;
  formData?: any;
};

const SponsorShipOppSectionOne = ({
  // heading,
  description,
  data,
  formData,
}: Props) => {
  const packageListRef = useRef<HTMLDivElement>(null);

  const scrollToPackages = () => {
    if (packageListRef.current) {
      packageListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="section-wrapper pt-6 md:pt-8 lg:pt-12 xl:pt-14 pb-6 md:pb-8 lg:pb-12 ">
        <div className="border-b border-b-tms-tanker-blue-2 sm:border-b-light-grey-1 sm:border-dotted pb-8 ">
          <div
            className="description text-center max-w-[70%] mx-auto"
            dangerouslySetInnerHTML={{ __html: description ?? "" }}
          />
        </div>

        <div
          id="packageList"
          ref={packageListRef}
          className="scroll-mt-20 md:scroll-mt-32"
        >
          <div className="hidden md:block mt-8 lg:mt-10 xl:mt-12 ">
            <Packages packageData={data} formTitle={formData?.heading} />
          </div>
          <div className="md:hidden">
            <PackagesAccordion packageData={data} />
          </div>
        </div>

        <button
          className="text-center py-4 px-8 text-white text-sm md:text-base font-medium buttonGradient-3 block mt-6 w-fit mx-auto"
          onClick={scrollToPackages}
        >
          Session Sponsorship Packages
        </button>

        <div className="md:hidden mt-7">
          <BecomeSponsorSmall title={formData?.heading} />
        </div>
      </section>
    </>
  );
};

export default SponsorShipOppSectionOne;
