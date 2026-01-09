import { listOppData } from "@/constants/sponsorOppData";
import Link from "next/link";
import React from "react";
import topSvg from "@/assets/icons/topDown.png";
import bottomSvg from "@/assets/icons/bottomUp.png";
import Image from "next/image";

type Props = {
  id:string | number;
  title: string;
  activeTitle: string;
  small_title: string;
  getSelectedPackage?: any;
  getSelectedPackageCategoryId?: any;
};

const SponsoredOppCard = ({ 
  id,
  title,
  activeTitle,
  small_title,
  getSelectedPackage,
  getSelectedPackageCategoryId, 
}: Props) => {
  return (
    <div className="grid grid-cols-12 border gradient-border-image">
      <div className="col-span-12 sm:col-span-6 lg:col-span-5 px-7 lg:px-10 xl:px-14 py-6 sm:py-8 md:py-11 border-b border-b-tms-tanker-blue sm:border-b-0 sm:border-r border-r-tms-tanker-blue flex  flex-col items-center sm:items-start justify-center relative overflow-hidden">
        <div className="relative z-50">
          <h5 className="text-3xl lg:text-[40px] font-bold leading-2 gradient-text-3 w-fit text-center mx-auto sm:mx-0 sm:text-left">
            {" "}
            {title}
          </h5>
          <p className="text-tms-tanker-blue-2 text-base md:text-lg lg:text-xl font-semibold leading-5 mt-2 lg:mt-3 text-center sm:text-left">
            Exclusive to One Company
          </p>
          <Link
            href="#"
            onClick={() => {
                getSelectedPackage(
                  `${title} - ${activeTitle} ${small_title}`
                );
                getSelectedPackageCategoryId(id);
              }}
            className="text-white gradient-master text-sm md:text-base font-medium leading-normal py-3 px-7 xl:px-10 block w-fit mt-4 mx-auto sm:mx-0"
          >
            Send Enquiry
          </Link>
        </div>

        <Image
          src={bottomSvg}
          alt="bottomSvg"
          width={230}
          height={100}
          className="w-full h-auto object-cover- absolute bottom-0 left-0 max-w-[80px] hidden sm:block"
        />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-7 px-5 py-7 sm:p-6 md:p-8 lg:p-10 relative">
        <div className="oppDescription relative z-50">
          <ul>
            {listOppData?.map((item: string, index: number) => {
              return <li key={index + 1}>{item}</li>;
            })}
          </ul>
          <button className="mt-3 md:mt-5 text-base text-[#2a2a2a] leading-5 underline hover:no-underline hover:text-tms-green transition-colors duration-300 pl-[30px]">
            Read More
          </button>
        </div>

        <Image
          src={topSvg}
          alt="topSvg"
          width={230}
          height={100}
          className="w-full h-auto object-cover- absolute top-0 right-0 max-w-[80px] hidden sm:block"
        />
      </div>
    </div>
  );
};

export default SponsoredOppCard;
