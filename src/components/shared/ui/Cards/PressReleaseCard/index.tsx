import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title?: string;
  slug?: string;
  description?: string;
  date?: string;
  image_url?: string;
};

const PressReleaseCard = ({
  title,
  slug,
  description,
  date,
  image_url,
}: Props) => {
  return (
    <div className="space-y-4 lg:space-y-5">
      <Image
        src={image_url ?? "image"}
        alt={title ?? "image"}
        width={700}
        height={350}
        className="responsive-radius overflow-hidden w-full h-auto object-cover  "
      />

      <div className="space-y-1 lg:space-y-2">
        <h6 className="text-dark-alter text-lg lg:text-xl lg:leading-3  font-normal ">
          {title}
        </h6>

        <Link
          href={`press-release/${slug}`}
          className="description text-dark-alter !leading-3 hover:underline hover:text-tms-purple transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PressReleaseCard;
