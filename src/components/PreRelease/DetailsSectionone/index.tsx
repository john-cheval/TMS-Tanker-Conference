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
      <div className="border-b border-b-[#8e8e8e] pb-4 md:pb-6 lg:pb-8 border-dashed">
        <Image
          src={content?.image_url}
          alt={content?.title || "image"}
          width={700}
          height={350}
          className={` overflow-hidden w-full h-auto object-cover`}
        />
        <div className="mt-4   space-y-2 md:space-y-3 ">
          <p className="description text-[#919191] font-normal  leading-5 text-center md:text-left">
            {dayjs(content?.date).format("DD MMMM YYYY")}
          </p>
          <h3 className="text-tms-tanker-blue-2 text-xl md:text-3xl font-bold leading-3 text-center md:text-left">
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
