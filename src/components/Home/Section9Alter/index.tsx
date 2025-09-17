import Sponsors from "@/components/shared/Sponsors/indexOld";
import React from "react";

export type SectionNinePropTypes = {
  sponsors: any;
  assosiations: any;
  mediaParteners?: any;
  industry_leaders_heading?: string;
  sponsors_heading?: string;
  sponsors_description?: string;
};

function HomeSectionNineAlter({
  sponsors,
  assosiations,
  mediaParteners,
  industry_leaders_heading,
  sponsors_heading,
  sponsors_description,
}: SectionNinePropTypes) {
  return (
    <section className="section-wrapper pt-8 sm:pt-14 lg:pt-16 pb-24">
      <div>
        <div className="grid grid-cols-12 md:gap-x-10 lg:gap-x-16 2xl:gap-x-20 3xl:gap-x-24">
          <h3 className="main-heading text-dark-alter font-bold leading-3 md:leading-2 lg:leading-1 col-span-12 md:col-span-6">
            {industry_leaders_heading}
          </h3>

          <div className="md:space-y-5 lg:space-y-7 col-span-12 md:col-span-6 mt-5 md:mt-0">
            <p className="text-dark-alter description font-bold uppercase hidden md:block">
              {sponsors_heading}
            </p>
            {sponsors_description && (
              <div
                className="text-dark-alter description"
                dangerouslySetInnerHTML={{ __html: sponsors_description }}
              />
            )}
          </div>
        </div>
        <div className="space-y-10 pt-5 md:pt-8 lg:pt-10">
          <Sponsors data={sponsors} isSponsor={true} />
          <Sponsors data={assosiations} />
          <Sponsors data={mediaParteners} />
        </div>
      </div>
    </section>
  );
}

export default HomeSectionNineAlter;
