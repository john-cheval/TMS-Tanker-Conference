import { WhyAttendListType } from "@/types/common";
import Image from "next/image";
import React from "react";

const WhyAttendCard = ({
  image_url,
  title,
  description,
}: WhyAttendListType) => {
  return (
    <div className="overflow-hidden relative">
      {" "}
      <Image
        src={image_url ?? ""}
        alt={title ?? ""}
        width={375}
        height={345}
        sizes="100vw"
        className="w-full h-auto "
      />
      {(title || description) && (
        <div className="absolute z-50 bottom-5 lg:bottom-8 xl:bottom-10 left-5 lg:left-6 xl:left-8 right-5 lg:right-6 xl:right-8 space-y-2">
          <h6 className="text-xl  text-white  leading-5 font-bold">{title}</h6>
          <p className="description text-white">{description}</p>
        </div>
      )}
      {(title || description) && (
        <div className="absolute z-40 bottom-0 left-0 CardGraient3 w-full h-full" />
      )}
    </div>
  );
};

export default WhyAttendCard;
