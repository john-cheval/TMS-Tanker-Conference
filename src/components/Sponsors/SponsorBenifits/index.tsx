import SponsorBenifitCard from "@/components/shared/ui/Cards/SponsorBenifitCard";
import { benifitsType } from "@/types/common";
import React from "react";

type Props = {
  heading: string;
  all_benefits: benifitsType[];
};

const SponsorBenifits = ({ all_benefits }: Props) => {
  return (
    <section className="section-wrapper pt-8 md:pt-10 lg:pt-12 xl:pt-16">
      <h4 className="w-fit main-heading leading-3 font-bold md:leading-[40px]  lg:leading-main gradient-text mb-2 lg:mb-3 mx-auto md:mx-0">
        Sponsorship offers numerous benefits
      </h4>
      {all_benefits && (
        <div className="mt-5 md:mt-7 lg:mt-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5">
          {all_benefits?.map((item, index) => {
            return <SponsorBenifitCard key={index + 1} {...item} />;
          })}
        </div>
      )}
    </section>
  );
};

export default SponsorBenifits;
