import { benifitsType } from "@/types/common";
import Image from "next/image";
import React from "react";

const SponsorBenifitCard = (props: benifitsType) => {
  const { title, description, image_url, image_alt_tag } = props;
  return (
    <div className="relative">
      <Image
        src={image_url ?? ""}
        // alt={title}
        alt={image_alt_tag ?? ""}
        width={300}
        height={420}
        className="w-full h-full object-cover"
      />
      {(title || description) && (
        <>
          <div className="text-white text-base leading-5 absolute bottom-5  left-5 right-5 z-50">
            <h6 className="font-bold mb-1 ">{title}</h6>
            <p>{description}</p>
          </div>
          <div className="CardGraient2 absolute bottom-0 left-0 w-full h-full max-h-[80%]" />
        </>
      )}
    </div>
  );
};

export default SponsorBenifitCard;
