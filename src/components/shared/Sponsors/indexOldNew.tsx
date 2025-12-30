import { SponsorType } from "@/types/common";
import Link from "next/link";
import React from "react";
import SponsorSwiper from "../Swiper/TankerSwipers/SponsorSwiper";
import Image from "next/image";
import sponnsorimg from "@/assets/Home/sponsor.png";

type Props = {
  data: SponsorType;
  isSponsor?: boolean;
};

const Sponsors = ({ data, isSponsor = false }: Props) => {
  const cloneData = [
    ...data?.data,
    ...data?.data,
    ...data?.data,
    ...data?.data,
    ...data?.data,
    ...data?.data,
  ];
  return (
    <article>
      <div
        className={`flex flex-col md:flex-row md:justify-between items-center gap-x-5`}
      >
        <h3 className={`${isSponsor ? "main-heading" : "text-[23px]"} gradient-text-3 leading-3 font-bold md:leading-[40px]  lg:leading-main text-center md:text-left w-fit mx-auto md:mx-0 `}>
          {data?.heading}
        </h3>
        {isSponsor ? (
          <Link
            href="#"
            className="text-sm sm:text-base font-medium py-3 md:py-4 px-6 md:px-8 bg-white border border-[#DADADA] leading-5 hover:border-tms-tanker-blue hover:text-tms-green transitoin-colors duration-300 mt-6 md:mt-0"
          >
            View all sponsor
          </Link>
        ) : (
          <Link
            href="#"
            className="text-base font-normal leading-5 hover:text-tms-green transitoin-colors duration-300 hover:underline mt-6 md:mt-0"
          >
            View All
          </Link>
        )}
      </div>
      <div className="mt-6 md:mt-10">
        {isSponsor ? (
          <SponsorSwiper swiperData={data?.data} />
        ) : (
          <div className="grid grid-cols-3  sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-6 gap-5">
            {cloneData?.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center flex-shrink-0 mr-5- md:mr-8- xl:mr-10- 2xl:mr-14-"
                >
                  <div
                    className={`border rounded-full border-light-grey flex items-center justify-center w-fit- w-[90px] sm:w-[120px] h-[90px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[140px] lg:h-[140px] xl:w-[160px] xl:h-[160px] 2xl:w-[180px] 2xl:h-[180px]
                    `}
                  >
                    <Image
                      // src={item?.image_url}
                      src={sponnsorimg}
                      alt={item?.name}
                      width={150}
                      height={75}
                      sizes="100vw"
                      className={`w-full h-auto object-cover- max-w-[60px] sm:max-w-[90px] md:max-w-[100px] lg:max-w-[100px] xl:max-w-[110px] 2xl:max-w-[140px]
                      `}
                    />
                  </div>
                  {/* <p className="mt-2.5 md:mt-5 text-black text-center text-sm md:text-base lg:text-lg - font-semibold leading-[18px] capitalize max-w-[100px]- ">
                    {item?.name}
                  </p> */}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};

export default Sponsors;
