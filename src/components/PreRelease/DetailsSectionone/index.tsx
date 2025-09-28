import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
type Props = {
  isBlog?: boolean;
  content?: any;
};

const DetailsSectionone = ({ isBlog = false, content }: Props) => {
  return (
    <section className="section-wrapper pt-6 md:pt-8 lg:pt-12   pb-8 md:pb-10 lg:pb-14 ">
      <div className="">
        <div className="relative">
          <Image
            src={content?.image_url}
            alt={content?.title || "image"}
            width={700}
            height={350}
            className={`overflow-hidden w-full h-auto object-cover`}
          />
          {isBlog && (
            <p
              className="py-1 md:py-2 text-white text-sm sm:text-base font-medium leading-3 pl-3 pr-5 md:pr-7 w-fit absolute bottom-0  left-0 "
              style={{
                background:
                  " linear-gradient(93deg, #38C7FF 4.01%, #008F57 82.77%)",
              }}
            >
              {dayjs(content?.date).format("MMMM YYYY")}
            </p>
          )}
        </div>
        <div
          className={`  space-y-2 md:space-y-3 ${
            isBlog ? "bg-[#f5f5f5] pt-5 px-5 pb-5 md:p-8" : "mt-5 "
          }`}
        >
          {!isBlog && (
            <p className="description text-[#919191] font-normal  leading-5 text-center md:text-left">
              {dayjs(content?.date).format("DD MMMM YYYY")}
            </p>
          )}

          <h3
            className={` ${
              isBlog ? "text-dark-alter" : "text-tms-tanker-blue-2"
            } text-xl md:text-3xl font-bold leading-3 text-center md:text-left`}
          >
            {content?.title}
          </h3>

          <div
            className="description text-[#2a2a2a] space-y-2 md:space-y-3 text-center md:text-left md:pt-2"
            dangerouslySetInnerHTML={{ __html: content?.description }}
          />
        </div>
      </div>
    </section>
  );
};

export default DetailsSectionone;
