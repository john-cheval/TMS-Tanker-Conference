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
      <section className="section-wrapper pt-6 md:pt-8 lg:pt-12 xl:pt-16 2xl:pt-20 pb-6 md:pb-8 lg:pb-12 ">
        <SmallTitle title={heading} />

        <div
          className="description text-dark-alter mt-6 border-b border-b-light-grey-1 md:border-b-0 pb-5 md:pb-0"
          dangerouslySetInnerHTML={{ __html: description ?? "" }}
        />
        <div className="hidden md:block mt-8 lg:mt-10 xl:mt-12 ">
          <Packages
            getSelectedPackage={setSelectedPackage}
            getSelectedPackageCategoryId={setSelectedPackageCategoryId}
            packageData={data}
          />
        </div>
        <div className="md:hidden">
          <PackagesAccordion packageData={data} />
        </div>
      </section>

      <BecomeSponsorForm
        {...formData}
        isOpppotunity={true}
        packageName={selectedPackage}
        packageId={selectedPackageCategoryId}
      />
    </>
  );
};

export default SponsorShipOppSectionOne;
