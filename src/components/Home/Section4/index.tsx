import Image from "next/image";
import Link from "next/link";
import React from "react";
import iconCheckLight from "@/assets/icons/check-circle-light.svg";
import iconCheckDark from "@/assets/icons/check-circle-dark.svg";
import ButtonOrLink from "@/components/shared/ui/Button";

interface SpeakerDescriptionList {
  title: string | null;
  description: string | null;
  image_url: string;
}

type Props = {
  heading: string;
  description: string;
  image_gallery: SpeakerDescriptionList[];
};

const HomeSectionFour = ({
  heading,
  description,
  image_gallery,
}: Props) => {
  const colorSchema = [
    {
      bgColor: "#fff",
      textColor: "#fff",
    },
    {
      bgColor: "#00A25D",
      textColor: "#fff",
    },
    {
      bgColor: "#0078BA",
      textColor: "#fff",
    },
    {
      bgColor: "#0C1E23",
      textColor: "#fff",
    },
    {
      bgColor: "#F0F0F0",
      textColor: "#000",
    },
    {
      bgColor: "#fff",
      textColor: "#000",
    },
  ];
  return (
    <section className="section-wrapper pt-8 md:pt-10 lg:pt-12 xl:pt-16">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <h3 className="main-heading gradient-text-3 leading-3 font-bold md:leading-[40px]  lg:leading-main text-center md:text-left w-fit mx-auto md:mx-0 mb-4 md:mb-0">
          {heading}
        </h3>
        <ButtonOrLink isBigText={false} isGradient={true} hrefs={"#"}>
          Become a speaker
        </ButtonOrLink>
      </div>

      {/* <p className="description text-black mt-5 md:mt-4 md:max-w-[700px] text-center md:text-left px-3 md:px-0">
        {description}
      </p> */}
      <div dangerouslySetInnerHTML={{__html:description}} />

      <div className="grid grid-cols-12 gap-3 lg:gap-4 2xl:gap-5 mt-6 md:mt-10">
        {image_gallery &&
          image_gallery?.map((item, index) => {
            const isLast = index === image_gallery?.length - 1;
            const isBig = index == 0 || isLast;
            const colSpanClass = isBig
              ? "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-6"
              : "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3";

            return (
              <div
                key={index + 1}
                className={`  ${colSpanClass}`}
                style={{
                  backgroundColor: colorSchema[index].bgColor,
                  color: colorSchema[index].textColor,
                }}
              >
                {item?.image_url && (
                  <div className="relative h-full">
                    <Image
                      src={item?.image_url}
                      alt={`image-${index + 1}`}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover "
                    />
                    {isLast && (
                      <>
                        <div className="CardGraient w-full h-full absolute top-0 left-0 max-w-[350px]" />
                        <Link
                          href="#"
                          className="text-white text-base lg:text-xl absolute underline bottom-5 lg:bottom-10 left-5 lg:left-10 z-50 font-normal hover:no-underline"
                        >
                          Become a Speaker
                        </Link>
                      </>
                    )}
                  </div>
                )}

                {!item?.image_url && (
                  <div className={`p-5 lg:p-7 xl:p-10 flex flex-col h-full `}>
                    <Image
                      src={index === 4 ? iconCheckDark : iconCheckLight}
                      alt="iconCheckLight"
                      width={60}
                      height={60}
                      className="w-full h-auto max-w-10 lg:max-w-14"
                    />
                    <p className=" text-base mt-8 lg:text-xl font-normal leading-3 lg:mt-auto ">
                      {item?.title}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default HomeSectionFour;
