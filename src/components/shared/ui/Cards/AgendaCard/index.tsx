import { ImageGalleryTypes } from "@/types/common";
import Image from "next/image";
import React from "react";

const AgendaCard = ({ image_url,image_alt_tag, title }: ImageGalleryTypes) => {
  return (
    <div className="relative h-full rounded-sm overflow-hidden">
      {" "}
      <Image
        src={image_url ?? ""}
        // alt={title ?? ""}
        alt={image_alt_tag ?? ""}
        width={650}
        height={190}
        className="w-full h-auto object-cover "
      />
      <div className="CardGraient  absolute bottom-0 left-0 w-full h-full max-h-[120px] z-10" />
      <p className="overlay-description">{title}</p>
    </div>
  );
};

export default AgendaCard;
