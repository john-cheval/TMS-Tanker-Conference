import isVideo from "@/lib/CheckIsVideo";
import { WhyAttendListType } from "@/types/common";
import Image from "next/image";
import React from "react";

type Props = {
  data?: WhyAttendListType[];
};

const WhyAttendSectionOne = ({ data }: Props) => {
  return (
    <div className=" mt-2 md:mt-8 lg:mt-11 section-wrapper space-y-3 md:space-y-4 xl:space-y-5">
      {data &&
        data?.length > 0 &&
        data?.map((item, index) => {
          const isOdd = index % 2 === 0 || index === 0;

          return (
            <div
              key={index + 1}
              className={`grid grid-cols-12 gap-y-3 md:gap-x-4 xl:gap-x-5 border gradient-border-image `}
            >
              {isOdd ? (
                <>
                  <div className="col-span-12 md:col-span-4  overflow-hidden flex">
                    {!isVideo(item?.image_url ?? "") ? (
                      <Image
                        src={item?.image_url ?? ""}
                        width={500}
                        height={400}
                        // alt="title"
                        alt={item?.image_alt_tag ?? ""}
                        className="w-full h-auto object-cover  md:flex-grow-1   min-h-[400px]- md:min-h-full-"
                      />
                    ) : (
                      <video
                        src={item?.image_url || "/banner_video.mp4"}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full md:flex-grow-1 object-cover z-[5]  min-h-[400px]- md:min-h-full-"
                      />
                    )}
                  </div>
                  <div className="col-span-12 md:col-span-8 px-6 py-8 md:p-9 lg:p-12 2xl:p-14  flex flex-col gap-y-2 justify-center">
                    {item?.title && (
                      <h4 className="main-heading gradient-text leading-3 font-bold md:leading-[40px]  lg:leading-main w-fit ">
                        {item?.title}
                      </h4>
                    )}

                    <p className="description text-black">
                      {item?.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-12 md:col-span-8 px-6 py-8 md:p-9 lg:p-12 2xl:p-14  flex flex-col gap-y-2 justify-center order-2 md:order-1">
                    <h4 className="main-heading gradient-text leading-3 font-bold md:leading-[40px]  lg:leading-main w-fit">
                      {item?.title}
                    </h4>
                    <p className="description text-black">
                      {item?.description}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-4  flex  overflow-hidden order-1 md:order-2">
                    {!isVideo(item?.image_url ?? "") ? (
                      <Image
                        src={item?.image_url ?? ""}
                        width={500}
                        height={400}
                        // alt="title"
                        alt={item?.image_alt_tag ?? ""}
                        className="w-full h-auto object-cover md:flex-grow-1   min-h-[400px]- md:min-h-full-"
                      />
                    ) : (
                      <video
                        src={item?.image_url || "/banner_video.mp4"}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover z-[5] md:flex-grow-1    min-h-[400px]- md:min-h-full-"
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default WhyAttendSectionOne;
