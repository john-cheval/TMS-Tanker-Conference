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
      <div className="border-b border-b-[#D9D9D9] grid grid-cols-12 md:gap-x-3 lg:gap-x-4 pb-4 md:pb-6 lg:pb-8">
        <div className="col-span-12 md:col-span-7">
          <Image
            src={data[0]?.image_url}
            alt={data[0]?.title}
            width={700}
            height={350}
            className="responsive-radius overflow-hidden w-full h-auto object-cover"
          />

          <div className="mt-4 md:mt-7 lg:mt-10 space-y-2 md:space-y-3 lg:space-y-4">
            {" "}
            <h3 className="main-heading-2 !text-dark-alter">
              {data[0]?.title}
            </h3>
            <p className="description text-tms-purple font-medium !leading-3">
              {dayjs(data[0]?.date).format("MMMM YYYY")}
            </p>
            <div
              className="description text-dark-alter space-y-4"
              dangerouslySetInnerHTML={{ __html: data[0]?.description }}
            />
            <Link
              href={`press-release/${data[0]?.slug}`}
              className="description text-dark-alter !leading-3 hover:underline hover:text-tms-purple transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="col-span-5 space-y-5 lg:space-y-7 hidden md:block">
          {data?.slice(1, 5)?.map((item: any, index: number) => {
            return (
              <div key={index + 1} className="flex  gap-x-4">
                <Image
                  src={item?.image_url}
                  alt={item?.title}
                  width={700}
                  height={350}
                  className="responsive-radius overflow-hidden w-full h-auto object-cover max-h-[150px] max-w-[250px] "
                />

                <div className="space-y-1">
                  <h6 className="text-dark-alter text-base lg:text-xl xl:text-2xl lg:leading-3 ">
                    {" "}
                    {item.title}
                  </h6>
                  <p className="description text-tms-purple font-medium lg:!leading-3">
                    {dayjs(item?.date).format("MMMM YYYY")}
                  </p>{" "}
                  <Link
                    href={`press-release/${item.slug}`}
                    className="description text-dark-alter !leading-3 hover:underline hover:text-tms-purple transition-all duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7 mt-6 lg:mt-8 xl:mt-10  hidden sm:grid">
        {data?.slice(2)?.map((item: any, index: number) => {
          return (
            <div key={index + 1} className="space-y-4 lg:space-y-6">
              <Image
                src={item?.image_url}
                alt={item?.title}
                width={700}
                height={350}
                className="responsive-radius overflow-hidden w-full h-auto object-cover  "
              />

              <div className="space-y-1 lg:space-y-2">
                <h6 className="text-dark-alter text-lg lg:text-xl lg:leading-3  font-normal ">
                  {" "}
                  {item.title}
                </h6>

                <Link
                  href={`press-release/${item.slug}`}
                  className="description text-dark-alter !leading-3 hover:underline hover:text-tms-purple transition-all duration-300"
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
