import Image from "next/image";
import Link from "next/link";
import React from "react";
import attend1 from "@/assets/Home/attend1.jpg";
import { imageGallery } from "@/types/common";

interface ImageGalleryType {
  title: string;
  image_url: string;
}

type Props = {
  heading: string;
  short_description: string;
  button_text: string;
  button_link: string;
  image_gallery: imageGallery[];
};

const HomeSectionSix = ({
  heading,
  short_description,
  button_link,
  button_text,
  image_gallery,
}: Props) => {
  return (
    <section className="section-wrapper pt-8 md:pt-10 lg:pt-12 xl:pt-16">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <div>
          <h3 className="main-heading gradient-text-3 leading-3 font-bold md:leading-[40px]  lg:leading-main text-center md:text-left w-fit mx-auto md:mx-0">
            {heading}
          </h3>

          <p className="text-base md:text-lg lg:text-2xl text-tms- font-medium leading-5 md:leading-3 mt-2">
            {short_description}
          </p>
        </div>

        <Link
          href={button_link}
          className="px-7 text-center w-fit py-3 button-gradient text-white text-sm md:text-base block  mt-4 sm:mt-0"
        >
          {button_text}
        </Link>
      </div>

      <div className="mt-5 md:mt-8 lg:mt-10 grid grid-cols-12 border border-tms-black h-full  ">
        <div className="col-span-12  md:col-span-4 md:border-r pt-3 md:pt-4 px-3 md:px-4 pb-4 md:pb-6 lg:pb-8 border-b border-b-tms-black md:border-b-0 border-r-tms-black h-full">
          <Image
            src={image_gallery[0]?.image_url}
            // src={attend1}
            // alt={image_gallery[0]?.title}
            alt={image_gallery[0]?.image_alt_tag ?? ""}
            width={500}
            height={600}
            className="w-full h-[588px] object-cover max-w-[500px]-"
          />
          <p className="text-base md:text-lg lg:text-2xl text-tms- font-medium leading-5 md:leading-3 mt-4">
            {image_gallery[0]?.title}
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 h-full ">
          {image_gallery.slice(1)?.map((item, index) => {
            const zerothIndex =
              index === 0 && "sm:border-r border-b border-r-0 border-tms-black";
            const firtIndex = index === 1 && " border-b border-tms-black";
            const secondIndex =
              index === 2 &&
              "border-b sm:border-b-0 sm:border-r border-tms-black";

            return (
              <div
                key={index + 1}
                className={`pt-3 md:pt-4 px-3 md:px-4 pb-4 md:pb-6 lg:pb-8 h-full ${zerothIndex} ${firtIndex} ${secondIndex} `}
              >
                <Image
                  src={item?.image_url}
                  alt={item?.title}
                  width={350}
                  height={240}
                  className="w-full h-[240px] object-cover max-w-[350px]-"
                />
                <p className="text-base md:text-lg lg:text-2xl text-tms- font-medium leading-5 md:leading-3 mt-4">
                  {item?.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeSectionSix;
