import { truncateHtmlWords } from "@/utils/truncateByWords";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title?: string;
  slug?: string;
  description?: string;
  date?: string;
  image_url?: string;
  image_alt_tag?: string;
};

const PressReleaseCard = ({
  title,
  slug,
  description,
  date,
  image_url,
  image_alt_tag
}: Props) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={image_url ?? "image"}
          // alt={title ?? "image"}
          alt={image_alt_tag ?? ""}
          width={700}
          height={350}
          className=" overflow-hidden w-full h-auto object-cover  "
        />
        <p
          className="py-1 md:py-2 text-white text-sm sm:text-base font-medium leading-3 pl-3 pr-5 sm:pr-7 w-fit absolute bottom-0 sm:bottom-auto sm:top-0 left-0 rounded-tr-[40px] sm:rounded-br-none md:rounded-br-[40px] sm:rounded-tr-none"
          style={{
            background:
              " linear-gradient(93deg, #38C7FF 4.01%, #008F57 82.77%)",
          }}
        >
          {dayjs(date).format("MMMM YYYY")}
        </p>
      </div>

      <div className="md:-mt-5  space-y-2 md:space-y-3 bg-[#f5f5f5] pt-5 px-5 pb-5 md:p-7">
        <h3 className="text-dark-alter text-xl sm:text-2xl text-center md:text-left leading-4">
          {title}
        </h3>

        <div
          className="description text-dark-alter leading-5 text-center md:text-left"
          dangerouslySetInnerHTML={{
            __html: truncateHtmlWords(description ?? "", 20),
          }}
        />
        <Link
          href={`/blogs/${slug}`}
          className="text-[#008ac0] text-sm md:text-base leading-3 underline hover:no-underline flex justify-center md:justify-start"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PressReleaseCard;
