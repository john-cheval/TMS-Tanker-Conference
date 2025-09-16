import Image from "next/image";
import React from "react";

export type HomeCardProps = {
  cardData?: any;
};

const HomeCards = ({ cardData }: HomeCardProps) => {
  return (
    <div className="relative flex">
      <Image
        src={cardData?.image_url}
        alt={cardData?.home_title}
        width={285}
        height={400}
        className="w-full h-full max-w-[280px]- object-cover responsive-radius  shrink-0"
      />

      {cardData?.home_title && (
        <p className="absolute bottom-3 lg:bottom-6 left-3 lg:left-6 right-3 lg:right-6 text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl leading-5 md:leading-4">
          {cardData?.home_title}
        </p>
      )}
    </div>
  );
};

export default HomeCards;
