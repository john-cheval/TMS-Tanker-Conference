import { ButtonPropsType } from "@/types/common";
import Link from "next/link";
import React from "react";

const FooterButton = ({
  children,
  hrefs,
  isSponsor = false,
}: ButtonPropsType) => {
  return (
    <Link
      href={hrefs ?? "/"}
      className={`rounded-sm shrink-0 text-center w-fit md:w-full flex items-center justify-center md:max-w-[200px]  h-fit text-sm md:text-base font-semibold md:font-bold leading-5 py-2.5 sm:py-3 px-4 sm:px-6 md:px-0  border hover:bg-transparent transition-colors duration-300 ease-in-out text-white ${
        isSponsor
          ? "bg-tms-blue  border-tms-blue"
          : "bg-tms-purple border-tms-purple"
      } `}
    >
      {children}
    </Link>
  );
};

export default FooterButton;
