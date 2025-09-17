import { benifitsType } from "@/types/common";
import Image from "next/image";
import React from "react";
import checkIcon from "@/assets/icons/check_circle_blue.png";
import Link from "next/link";

type Props = {
  heading: string;
  description: string;
  button_text: string;
  button_link: string;
  image: string;
  key_benifits: benifitsType[];
};

const HomeSectionEight = ({
  heading,
  description,
  button_link,
  button_text,
  image,
  key_benifits,
}: Props) => {
  return (
    <section className=" pt-8 md:pt-10 lg:pt-12 xl:pt-16">
      <Image
        src={image}
        alt={heading}
        width={1200}
        height={600}
        className="w-full h-full object-cover"
      />

      <article className="section-wrapper -mt-[13%] relative z-50 ">
        <div className="bg-tms-black py-7  md:py-10 lg:py-12 px-5 md:px-8 lg:px-12 xl:px-14 2xl:p-16">
          <h4 className="main-heading gradient-text-3 leading-3 font-bold md:leading-[40px]  lg:leading-main text-center w-fit mx-auto">
            {heading}
          </h4>

          <p className="text-sm sm:text-base md:text-xl text-center text-white leading-5 mt-1 md:mt-3 xl:px-10 2xl:px-14">
            {description}
          </p>

          <div className="mt-4 grid grid-cols-1  gap-y-5 md:gap-y-0 md:grid-cols-3 gap-x-5 xl:gap-x-12 2xl:gap-x-16">
            {key_benifits?.map((item, index) => {
              return (
                <div key={index} className="space-y-3">
                  <Image
                    src={checkIcon}
                    alt="checkicon"
                    width={45}
                    height={45}
                    className="w-full h-auto max-w-10 mx-auto"
                  />

                  <p className="text-base md:text-xl text-center leading-5 text-white font-normal">
                    <span className="font-semibold">
                      {item?.title} {""}
                    </span>
                    {item?.description}
                  </p>
                </div>
              );
            })}
          </div>

          <Link
            href={button_link}
            className="block px-7 text-center w-fit py-3 button-gradient text-white text-sm md:text-base mx-auto mt-7 md::mt-10"
            style={{
              background: " linear-gradient(90deg, #008AC0 0%, #00A25D 100%)",
            }}
          >
            {button_text}
          </Link>
        </div>
      </article>
    </section>
  );
};

export default HomeSectionEight;
