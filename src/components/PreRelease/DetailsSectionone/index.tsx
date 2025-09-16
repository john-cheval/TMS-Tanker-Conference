import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
type Props = {
  isBlog?: boolean;
  content?: any;
};

const DetailsSectionone = ({ isBlog = false, content }: Props) => {
  return (
    <section className="section-wrapper pt-6 md:pt-8 lg:pt-12 xl:pt-16 pb-8 md:pb-10 lg:pb-14 xl:pb-16">
      {!isBlog && (
        <>
          <h3 className="main-heading-2 !text-dark-alter">{content?.title}</h3>
          <p className="description text-tms-purple font-medium !leading-3 mt-0.5 md:mt-1">
            {dayjs(content.dat).format("MMMM YYYY")}
          </p>
        </>
      )}

      <Image
        src={content?.image_url}
        alt={content?.title || "image"}
        width={700}
        height={350}
        className={`responsive-radius overflow-hidden w-full h-auto object-cover ${
          isBlog ? "mb-3 md:mb-5 lg:mb-7" : "mt-2 md:mt-3"
        } `}
      />

      {isBlog && (
        <>
          <p className="description text-tms-purple font-medium !leading-3 mt-0.5 mb-1 flex- justify-between- md:justify-start- gap-x-2-">
            {dayjs(content.date).format("MMMM YYYY")}
            {/*October 2025<span className="text-[#B3ABB9]">11:00 PM</span> */}
          </p>
          <h3 className="main-heading-2 !text-dark-alter">{content?.title}</h3>
        </>
      )}

      <div
        className={`mt-4 md:mt-7 lg:mt-8 xl:mt-12 grid grid-cols-12 gap-y-4 md:gap-y-0 md:gap-x-4 xl:gap-x-6`}
      >
        {content?.image_main_url && (
          <Image
            src={content?.image_main_url}
            alt={content?.title || "image"}
            width={700}
            height={350}
            className="responsive-radius  overflow-hidden w-full h-full object-cover col-span-12  md:col-span-5  2xl:col-span-4 shrink-0"
          />
        )}

        {content?.description && (
          <div
            className={` ${
              content?.image_main_url
                ? "col-span-12  md:col-span-7 2xl:col-span-8 "
                : "col-span-12"
            } description text-dark-alter space-y-3 flex flex-col justify-center-`}
            dangerouslySetInnerHTML={{ __html: content?.description }}
          />
        )}
      </div>
    </section>
  );
};

export default DetailsSectionone;
