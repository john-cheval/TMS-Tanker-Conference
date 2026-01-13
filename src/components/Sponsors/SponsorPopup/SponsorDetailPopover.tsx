import React from "react";
import * as motion from "motion/react-client";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { sponsorDataType } from "@/types/common";
import sponsorImage from "@/assets/sponsors/sposnsor.png";

export type SponsorDetailPropsType = sponsorDataType & {
  isClose?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SponsorDetailPopover = (props: SponsorDetailPropsType) => {
  const { isClose, company_name, image_url,image_alt_tag, description, website_link, name } =
    props;
  return (
    <motion.div
      className="bg-white border gradient-border-image fixed top-1/2 left-1/2  z-[999959] -translate-y-1/2 -translate-x-1/2 w-[90%] md:w-[75%] lg:w-[70%] 2xl:w-fit overflow-y-scroll h-[80%] md:h-fit  [scrollbar-width:none]   [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden "
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="flex justify-end items-center border-b border-white p-5 2xl:p-6">
        <IoMdClose
          aria-label="close menu"
          className="text-[#1C1B1F] text-base md:text-xl cursor-pointer"
          onClick={() => isClose?.(false)}
        />
      </div>
      <div className="px-5 md:px-8 lg:px-12 2xl:px-16 2xl:pt-10 pb-6 md:pb-8 lg:pb-16">
        <div className=" ">
          <div className="mb-5 md:mb-8 flex justify-center">
            <Image
              // src={image_url ?? ""}
              src={sponsorImage}
              // alt={(company_name || name) ?? ""}
              alt={image_alt_tag ?? ""}
              width={165}
              height={60}
              className=" border gradient-border-image py-8 lg:py-5 px-7"
            />
          </div>

          <div>
            <h5 className="text-tms-tanker-blue text-xl md:text-2xl font-semibold leading-3 text-center ">
              {company_name || name}
            </h5>
            {description && (
              <div
                className="description text-dark space-y-3 md:space-y-4 text-center"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>

          {/* <Link
              className="text-tms-blue text-sm md:text-base font-bold leading-5 mt-4"
              href={website_link ?? "#"}
              target="_blank"
            >
              {website_link ?? "#"}
            </Link> */}
        </div>
      </div>
    </motion.div>
  );
};

export default SponsorDetailPopover;
