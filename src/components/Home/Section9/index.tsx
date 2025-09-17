import Sponsors from "@/components/shared/Sponsors";
import { SponsorType } from "@/types/common";
import React from "react";

type Props = {
  sponsorsData: SponsorType;
  suppotiveData: SponsorType;
  mediaPartnersData: SponsorType;
};

const HomeSectionNine = ({
  sponsorsData,
  suppotiveData,
  mediaPartnersData,
}: Props) => {
  return (
    <section className="section-wrapper py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="space-y-9">
        <Sponsors data={sponsorsData} isSponsor={true} />
        <Sponsors data={mediaPartnersData} />
        <Sponsors data={suppotiveData} />{" "}
      </div>
    </section>
  );
};

export default HomeSectionNine;
