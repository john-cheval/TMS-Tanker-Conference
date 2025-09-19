"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import arrowDown from "@/assets/shared/chevron-right.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { listOppData } from "@/constants/sponsorOppData";
type Props = {
  packageData?: any;
  getSelectedPackage?: any;
  getSelectedPackageCategoryId?: any;
};

const Packages = ({
  packageData,
  getSelectedPackage,
  getSelectedPackageCategoryId,
}: Props) => {
  const [activeTitle, setActiveTitle] = useState(packageData[0]?.title);
  const handleTitleClick = (item: string) => {
    setActiveTitle(item);
  };

  const selectedPackage = packageData?.find(
    (item: any) => item?.title === activeTitle
  );

  return (
    <div>
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

      <div className="grid grid-cols-12 gap-x-5">
        <div className="col-span-8 space-y-5">
          {selectedPackage?.sponsors &&
            selectedPackage?.sponsors?.map((sponsor: any, index: number) => {
              return (
                <div
                  key={index + 1}
                  className="grid grid-cols-12 border gradient-border-image"
                >
                  <div className="col-span-5 px-14 py-11 border-r border-r-tms-tanker-blue">
                    <h5 className="text-[40px] font-bold leading-2 gradient-text-3 w-fit">
                      {" "}
                      {sponsor?.title}
                    </h5>
                    <p className="text-tms-tanker-blue-2 text-base md:text-xl font-semibold leading-5 mt-3">
                      Exclusive to One Company
                    </p>
                    <Link
                      href="#"
                      className="text-white gradient-master text-sm md:text-base font-medium leading-normal py-3 px-10 block w-fit mt-4"
                    >
                      Send Enquiry
                    </Link>
                  </div>
                  <div className="col-span-7">
                    <div className="oppDescription">
                      <ul>
                        {listOppData?.map((item: string, index: number) => {
                          return <li key={index + 1}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="col-span-4 w-full text-white h-fit bg-tms-black p-20">
          Become a Sponsor form
        </div>
      </div>
    </div>
  );
};

export default Packages;
