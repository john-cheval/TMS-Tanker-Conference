"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import arrowDown from "@/assets/shared/chevron-right.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
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

  // console.log(selectedPackage, "selectedPackage");

  return (
    <div>
      <div className="border-b border-b-light-grey-1 mb-9">
        <div className="flex  gap-x-2.5 mb-7 lg:mb-10 xl:mb-14 overflow-x-auto whitespace-nowrap no-scrollbar">
          {packageData?.map((item: any, index: number) => {
            const isActive = item?.title === activeTitle;
            return (
              <button
                className={`text-center text-base border  font-bold leding-6 px-4 py-3 rounded-sm  cursor-pointer transition-all duration-300 ease-in-out ${
                  isActive
                    ? "buttonGradient-3 text-white"
                    : "bg-transparent text-black border-[#dbdbdb] hover:bg-tms-blue hover:text-white hover:border-tms-blue"
                }`}
                key={index + 1}
                onClick={() => handleTitleClick(item?.title)}
              >
                {item?.title} {item?.small_title ? `${item?.small_title}` : ""}
              </button>
            );
          })}
        </div>
        <h3 className="main-heading text-black leading-1 font-bold pb-5 xl:pb-8">
          <span className="main-heading text-tms-purple leading-1 font-bold">
            {activeTitle}
          </span>{" "}
          {selectedPackage?.small_title
            ? `  ${selectedPackage?.small_title}`
            : ""}
        </h3>
      </div>

      {selectedPackage?.sponsors && selectedPackage?.sponsors.length > 0 ? (
        <div className="space-y-10" id="packages">
          {selectedPackage?.sponsors?.map((sponsor: any, index: number) => (
            <div key={index + 1}>
              <div className="grid grid-cols-12">
                <div className="col-span-9 lg:col-span-7 xl:col-span-8 bg-[#f5f5f5] border-t border-l border-[#cecece] rounded-tl-sm  py-12 pl-16 pr-3 h-fit  mt-auto">
                  <h5 className="main-heading-2 gradient-text w-fit">
                    {" "}
                    {sponsor?.title}
                  </h5>
                  <p className="text-base text-[#2A2A2A] font-medium leading-5 mt-[2px] mb-2 lg:mb-4">
                    {" "}
                    {sponsor?.small_title}
                  </p>

                  <div
                    className="sponsor-description"
                    dangerouslySetInnerHTML={{ __html: sponsor?.description }}
                  />
                </div>
                <div className="col-span-3 lg:col-span-5 xl:col-span-4 flex ">
                  <Image
                    src={sponsor?.image_url}
                    alt={sponsor?.title}
                    width={430}
                    height={430}
                    className="w-full h-auto object-cover flex-grow-1 rounded-t-sm rounded-br-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12">
                <button className="col-span-9 lg:col-span-7 xl:col-span-8 bg-[#ECECEC] w-full flex justify-center items-center gap-x-2.5 py-4 lg:py-6 text-base lg:text-lg font-bold leading-5 text-tms-purple">
                  Read More{" "}
                  <Image
                    src={arrowDown}
                    alt="arrowdown"
                    width={16}
                    height={16}
                    sizes="100vw"
                    className="w-full h-auto max-w-4 object-cover"
                  />
                </button>
                <div className="col-span-3 lg:col-span-4 xl:col-span-3">
                  <Link
                    href={"#sponsor-form"}
                    className=" buttonGradient-2 rounded-br-sm block- flex items-center justify-center text-white py-4 lg:py-6 text-base lg:text-lg font-bold leading-5 group"
                    onClick={() => {
                      getSelectedPackage(
                        `${sponsor?.title} -   ${activeTitle} ${selectedPackage?.small_title}`
                      );
                      getSelectedPackageCategoryId(sponsor?.id);
                    }}
                  >
                    Send Enquiry{" "}
                    <MdOutlineKeyboardArrowRight className="text-2xl  group-hover:translate-x-1 group-hover:text-tms-blue- transition-all duration-300 ease-in-out" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-2xl text-center text-tms-blue font-bold">
          No Packages Available
        </p>
      )}
    </div>
  );
};

export default Packages;
