import { SponsorsPropsType } from "@/types/common";
import React from "react";
import * as motion from "motion/react-client";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export type SponsorDetailPropsType = SponsorsPropsType & {
  isClose?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SponsorDetailPopover = (props: SponsorDetailPropsType) => {
  const { isClose, company_name, image_url, description, website_link, name } =
    props;
  return (
    <motion.div
      className="rounded-2xl bg-white border border-light-grey-1 fixed top-1/2 left-1/2  z-[999959] -translate-y-1/2 -translate-x-1/2 w-[90%] md:w-[75%] lg:w-[70%] 2xl:w-fit overflow-y-scroll h-[80%] md:h-fit  [scrollbar-width:none]   [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="flex justify-end items-center border-b border-white p-5 2xl:p-6">
        <IoMdClose
          aria-label="close menu"
          className="text-[#1C1B1F] text-xl md:text-2xl cursor-pointer"
          onClick={() => isClose?.(false)}
        />
      </div>
      <div className="px-8 lg:px-12 2xl:px-16 2xl:pt-10 pb-6 md:pb-8">
        <h5 className="text-tms-purple text-xl md:text-2xl font-bold leading-3 pb-3 md:pb-4  border-b  border-b-light-grey-1">
          {company_name || name}
        </h5>

        <div className="grid grid-cols-12 gap-y-4 md:gap-y-0 md:gap-x-5  lg:gap-x-6 mt-4 md:mt-5">
          <div className="col-span-12 md:col-span-4  ">
            <Image
              src={image_url ?? ""}
              alt={(company_name || name) ?? ""}
              width={165}
              height={60}
              className="w-full h-auto  object-cover max-w-[150px] md:max-w-full md:min-w-[150px] border border-light-grey-1  rounded-2xl py-7 md:py-10  lg:py-14 px-5"
            />
          </div>
          <div className="col-span-12 md:col-span-8">
            {description && (
              <div
                className="description text-dark-alter space-y-4"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
            <Link
              className="text-tms-blue text-sm md:text-base font-bold leading-5 mt-4"
              href={website_link ?? "#"}
              target="_blank"
            >
              {website_link ?? "#"}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SponsorDetailPopover;
