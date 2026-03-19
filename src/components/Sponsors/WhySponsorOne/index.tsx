import React from "react";
import whySponsorImage from "@/assets/whySponsor/main.png";
import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  button_heading: string;
  button_link: string;
  description: string;
};

const WhySponsorOne = ({heading,button_heading,button_link,description}:Props) => {
  return (
    <section className="section-wrapper pt-8 md:pt-10 lg:pt-12 xl:pt-16">
      <div className="grid grid-cols-12 md:gap-x-5 lg:gap-x-8 xl:gap-x-12 2xl:gap-x-14">
        <Image
          src={whySponsorImage}
          alt="whySponsor"
          width={500}
          height={350}
          className="col-span-12 md:col-span-5 lg:col-span-4 h-full w-full"
        />

        <div className="col-span-12 flex flex-col justify-center md:col-span-7 lg:col-span-8 mt-5 sm:mt-6 md:mt-0">
          <h2 className="w-fit main-heading leading-3 font-bold md:leading-[40px]  lg:leading-main gradient-text mb-2 lg:mb-3 mx-auto md:mx-0">
            {heading}
          </h2>
          <p className="description text-dark mb-5 md:mb-4 lg:mb-6  xl:pr-14 text-center md:text-left">
            {description}
          </p>
          <Link
            href={button_link}
            className="font-medium text-sm md:text-base text-white py-4  px-6 md:px-8 block w-fit mx-auto md:mx-0"
            style={{
              background: "linear-gradient(90deg, #008AC0 0%, #00A25D 100%)",
            }}
          >
            {button_heading}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhySponsorOne;
