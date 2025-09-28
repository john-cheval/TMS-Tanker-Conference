import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PreReleaseCardResponsive from "../PreReleseCardResponsive";

type Props = {
  data: any;
};

const PreReleaseSectionOne = ({ data }: Props) => {
  return (
    <section className="section-wrapper pt-5 md:pt-8 lg:pt-14  xl:pt-20 pb-6 md:pb-8 lg:pb-12   xl:pb-16">
      <div className=" grid grid-cols-12 md:gap-x-5 lg:gap-x-8 ">
        <div className="col-span-12 md:col-span-7 border-b border-b-[#8e8e8e] pb-4 md:pb-6 lg:pb-8 border-dashed">
          <Image
            src={data[0]?.image_url}
            alt={data[0]?.title}
            width={700}
            height={350}
            className=" overflow-hidden w-full h-auto object-cover"
          />

          <div className="mt-4 md:mt-7  space-y-2 md:space-y-3 ">
            <p className="description text-[#919191] font-normal  leading-5 text-center md:text-left">
              {dayjs(data[0]?.date).format("DD MMMM YYYY")}
            </p>
            <h3 className="text-tms-tanker-blue-2 text-xl md:text-3xl font-bold leading-3 text-center md:text-left">
              {data[0]?.title}
            </h3>

            <div
              className="description text-[#2a2a2a] space-y-2 md:space-y-3 text-center md:text-left md:pt-2"
              dangerouslySetInnerHTML={{ __html: data[0]?.description }}
            />
            <Link
              href={`/press-release/${data[0]?.slug}`}
              className="description text-dark-alter !leading-3 underline hover:no-underline hover:text-tms-green transition-all duration-300  flex justify-center md:justify-start w-fit"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="col-span-5 space-y-5 lg:space-y-7 hidden md:block">
          {data?.slice(1, 3)?.map((item: any, index: number) => {
            return (
              <div
                key={index + 1}
                className="flex border-b-[3px]  gradient-border-3 pb-8 "
              >
                <div className="space-y-1">
                  <p className="description text-[#919191] font-normal  leading-5">
                    {dayjs(item?.date).format("DD MMMM YYYY")}
                  </p>
                  <h6 className="text-tms-tanker-blue-2 text-xl md:text-2xl font-semibold leading-3">
                    {" "}
                    {item.title}
                  </h6>

                  <div
                    className="description text-[#2a2a2a] space-y-3 pt-2"
                    dangerouslySetInnerHTML={{ __html: data[0]?.description }}
                  />

                  <Link
                    href={`/press-release/${item?.slug}`}
                    className="description text-dark-alter !leading-3 underline hover:no-underline hover:text-tms-green transition-all duration-300 w-fit"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-7 mt-6 lg:mt-8 xl:mt-10  hidden sm:grid">
        {data?.slice(2)?.map((item: any, index: number) => {
          return (
            <div
              key={index + 1}
              className="space-y-4 lg:space-y-6 border-b-[3px]  gradient-border-3 pb-4 md:pb-6 lg:pb-8"
            >
              <Image
                src={item?.image_url}
                alt={item?.title}
                width={700}
                height={350}
                className=" overflow-hidden w-full h-auto object-cover  "
              />

              <div className="space-y-1 lg:space-y-2">
                <p className="description text-[#919191] font-normal  leading-5 text-center md:text-left">
                  {dayjs(item?.date).format("DD MMMM YYYY")}
                </p>
                <h6 className="text-tms-tanker-blue-2 text-xl md:text-2xl font-semibold leading-3 text-center md:text-left">
                  {" "}
                  {item.title}
                </h6>

                <div
                  className="description text-[#2a2a2a] space-y-3 text-center md:text-left md:pt-2"
                  dangerouslySetInnerHTML={{ __html: data[0]?.description }}
                />

                <Link
                  href={`/press-release/${item?.slug}`}
                  className="description text-dark-alter !leading-3 underline hover:no-underline hover:text-tms-green transition-all duration-300 flex justify-center md:justify-start w-fit"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="sm:hidden">
        <PreReleaseCardResponsive detail={data} />
      </div>
    </section>
  );
};

export default PreReleaseSectionOne;
