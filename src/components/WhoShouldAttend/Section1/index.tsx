import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {
  heading: string;
  description: string;
  button_link: string;
  button_text: string;
  image: string;
  image_alt_tag?: string;
  heading_2: string;
  description_2: string;
};

const WhoShouldAttendSectionOne = ({
  heading,
  description,
  button_link,
  button_text,
  image,
  image_alt_tag,
  heading_2,
  description_2,
}: Props) => {
  return (
    <section className="section-wrapper pt-5 md:pt-8 lg:pt-10 xl:pt-14 ">
      <article className="grid grid-cols-12 bg-tms-black text-white">
        <div className="col-span-12 md:col-span-5 lg:col-span-4 relative">
          <Image
            src={image ?? "image-1"}
            // alt={heading ?? "image"}
            alt={image_alt_tag ?? ""}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute w-full h-full right-0 top-0 hidden md:block"
            style={{
              background:
                "linear-gradient(270deg, #0C1E23 0%, rgba(12, 30, 35, 0.16) 58.47%)",
            }}
          />
          <div
            className="absolute w-full h-full left-0 bottom-0  md:hidden"
            style={{
              background:
                "linear-gradient(360deg, #0C1E23 0%, rgba(12, 30, 35, 0.16) 58.47%)",
            }}
          />
        </div>

        <div className="col-span-12 md:col-span-7 lg:col-span-8 px-5 md:px-8 lg:px-10 xl:px-14  py-5 md:py-8 lg:py-10 xl:py-12 flex flex-col justify-center">
          <p className="description text-center md:text-left">{description}</p>
          <Link
            href={button_link}
            className="buttonGradient-3 px-4 sm:px-6 md:px-8 py-3 md:py-4 text-white text-center font-medium block mt-3 md:mt-5 hover:scale-[1.02] transition-all duration-300 text-sm md:text-base w-fit mx-auto md:mx-0"
          >
            {button_text}
          </Link>
        </div>
      </article>

      <article className="mt-4 md:mt-8 lg:mt-12 xl:mt-14 grid grid-cols-12 gap-x-5 md:gap-x-10 xl:gap-x-14">
        <h4 className="text-[#008ac0] text-xl md:text-2xl font-medium leading-4 md:leading-3 col-span-12 md:col-span-6 lg:col-span-5">
          {heading_2}
        </h4>
        <div
          className="attend-description col-span-12 md:col-span-6 lg:col-span-7 text-black mt-4 md:mt-0  "
          dangerouslySetInnerHTML={{ __html: description_2 ?? "" }}
        />
      </article>
    </section>
  );
};

export default WhoShouldAttendSectionOne;
