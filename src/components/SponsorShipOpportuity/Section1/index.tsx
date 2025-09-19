"use client";
import SmallTitle from "@/components/shared/ui/Headings/SmallTitle";
import React, { useState } from "react";
import Packages from "../Packages/Packages";
import PackagesAccordion from "../PackagesAccordion";
import BecomeSponsorForm from "@/components/Forms/BecomeSponsor";

type Props = {
  heading?: string;
  description?: string;
  data?: any;
  formData?: any;
};

const SponsorShipOppSectionOne = ({
  heading,
  description,
  data,
  formData,
}: Props) => {
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const [selectedPackageCategoryId, setSelectedPackageCategoryId] =
    useState("");

  return (
    <>
      <section className="section-wrapper pt-6 md:pt-8 lg:pt-12 xl:pt-14 pb-6 md:pb-8 lg:pb-12 ">
        <div className="border-b border-b-light-grey-1 border-dotted  pb-8 ">
          <div
            className="description text-center max-w-[70%] mx-auto"
            dangerouslySetInnerHTML={{ __html: description ?? "" }}
          />
        </div>

        <div className="hidden md:block mt-8 lg:mt-10 xl:mt-12 ">
          <Packages
            getSelectedPackage={setSelectedPackage}
            getSelectedPackageCategoryId={setSelectedPackageCategoryId}
            packageData={data}
          />
        </div>
        {/*<div className="md:hidden">
          <PackagesAccordion packageData={data} />
        </div> */}
      </section>

      {/* <BecomeSponsorForm
        {...formData}
        isOpppotunity={true}
        packageName={selectedPackage}
        packageId={selectedPackageCategoryId}
      /> */}
    </>
  );
};

export default SponsorShipOppSectionOne;
