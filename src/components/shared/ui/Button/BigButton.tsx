import { ButtonPropsType } from "@/types/common";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BigButton = ({ children, hrefs, isBig = false }: ButtonPropsType) => {
  return (
    <Link
      href={hrefs ?? "/"}
      className={`rounded-lg w-fit  h-fit text-sm md:text-base font-semibold md:font-bold leading-5   ${
        isBig ? "py-4 md:py-5 px-6 md:px-10 lg:px-14" : "py-4 md:py-5 px-6"
      } border-transparent- group transition-colors duration-300 ease-in-out text-white buttonGradient-2   hover:bg-transparent- hover:text-tms-blue- border- flex items-center gap-x-1 group `}
    >
      {children}
      <MdOutlineKeyboardArrowRight className="text-2xl text-white group-hover:translate-x-1 group-hover:text-tms-blue- transition-all duration-300 ease-in-out" />
    </Link>
  );
};

export default BigButton;
