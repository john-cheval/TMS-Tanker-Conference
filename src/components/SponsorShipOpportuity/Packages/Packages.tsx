"use client";
// import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import arrowDown from "@/assets/shared/chevron-right.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { listOppData } from "@/constants/sponsorOppData";
import BecomeSponsorSmall from "@/components/Forms/BecomeSponsorSmall";
import SponsoredOppCard from "@/components/shared/ui/Cards/SponsoredOppCard";
type Props = {
  packageData?: any;
  // getSelectedPackage?: any;
  // getSelectedPackageCategoryId?: any;
  formTitle?: string;
};

const Packages = ({
  packageData,
  // getSelectedPackage,
  // getSelectedPackageCategoryId,
  formTitle,
}: Props) => {
  const [activeTitle, setActiveTitle] = useState(packageData[0]?.title);
  const handleTitleClick = (item: string) => {
    setActiveTitle(item);
  };

  const selectedPackage = packageData?.find(
    (item: any) => item?.title === activeTitle
  );

  return (
    <div id="packageList">
      <div>
        <div className="flex  gap-x-2.5 mb-7 lg:mb-10 xl:mb-14 overflow-x-auto whitespace-nowrap no-scrollbar">
          {packageData?.map((item: any, index: number) => {
            const isActive = item?.title === activeTitle;
            return (
              <button
                className={`text-center text-base border  font-medium leading-5 px-5 py-4  cursor-pointer transition-all duration-300 ease-in-out ${
                  isActive
                    ? "buttonGradient-3 text-white"
                    : "bg-transparent text-black border-[#dadada] hover:bg-tms-tanker-blue-2 hover:text-white hover:border-tms-tanker-blue"
                }`}
                key={index + 1}
                onClick={() => handleTitleClick(item?.title)}
              >
                {item?.title} {item?.small_title ? `${item?.small_title}` : ""}
              </button>
            );
          })}
        </div>
        <h3 className="main-heading-2 gradient-text-3 leading-1 font-bold pb-5 xl:pb-8">
          <span className="main-heading  leading-1 font-bold">
            {activeTitle}
          </span>{" "}
          {selectedPackage?.small_title
            ? `  ${selectedPackage?.small_title}`
            : ""}
        </h3>
      </div>

      <div className="grid grid-cols-12 gap-x-4 lg:gap-x-5">
        <div className="col-span-8 space-y-5">
          {selectedPackage?.sponsors &&
          selectedPackage?.sponsors?.length > 0 ? (
            selectedPackage?.sponsors?.map((sponsor: any, index: number) => {
              return <SponsoredOppCard key={index + 1} {...sponsor} />;
            })
          ) : (
            <p className="text-center font-medium">There is No Package</p>
          )}
        </div>

        <div className="col-span-4">
          <BecomeSponsorSmall title={formTitle} />
        </div>
      </div>
    </div>
  );
};

export default Packages;
