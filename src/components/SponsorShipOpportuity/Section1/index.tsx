"use client";
import React, { useRef,useState,useEffect } from "react";
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

  const [packageOption, setPackageOption] = useState([]);
  const [selectedPackageCategoryId, setSelectedPackageCategoryId] = useState("");
  const [selectedPackageform, setSelectedPackageForm] = useState<string>("");
  console.log("selectedPackageCategoryId",selectedPackageCategoryId,selectedPackageform)

  const scrollToPackages = () => {
    if (packageListRef.current) {
      packageListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
          packageOptions();
      },[]);
  
      const packageOptions = () => {
          const result:any = [];
  
          data.forEach((category:any) => {
              const categoryTitle = `${category.title} ${category.small_title}`;
  
              category.sponsors.forEach((sponsor:any) => {
              result.push({
                  label: `${sponsor.title} - ${categoryTitle}`,
                  value: `${sponsor.id} - (${sponsor.title} - ${categoryTitle})`
              });
              });
          });
  
          setPackageOption(result)
      };

      console.log("packageOption",packageOption)

  return (
    <>
      <section className="section-wrapper pt-6 md:pt-8 lg:pt-12 xl:pt-14 pb-6 md:pb-8 lg:pb-12 ">
        {/* <h2 className="w-fit text-center w-full main-heading leading-3 font-bold md:leading-[40px]  lg:leading-main gradient-text mb-2 lg:mb-3 mx-auto md:mx-0">
            {heading}
          </h2> */}
        <div className="border-b border-b-tms-tanker-blue-2 sm:border-b-light-grey-1 sm:border-dotted pb-8 ">
          <div
            className="description text-center max-w-full lg:max-w-[70%] mx-auto"
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
            <PackagesAccordion packageData={data} getSelectedPackage={setSelectedPackageForm} getSelectedPackageCategoryId={setSelectedPackageCategoryId} />
          </div>
        </div>

        <button
          className="text-center py-4 px-8 text-white text-sm md:text-base font-medium buttonGradient-3 block mt-6 w-fit mx-auto"
          onClick={scrollToPackages}
        >
          Session Sponsorship Packages
        </button>

        <div className="md:hidden mt-7">
          <BecomeSponsorSmall 
            mobileId="sponsor-form"
            title={formData?.heading} 
            packageOption={packageOption} 
            packageName={selectedPackageform}
            packageId={selectedPackageCategoryId}
          />
        </div>
      </section>
    </>
  );
};

export default SponsorShipOppSectionOne;
