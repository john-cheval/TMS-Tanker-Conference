import { ButtonPropsType } from "@/types/common";
import Link from "next/link";
import React from "react";

const ButtonOrLink = ({
  children,
  hrefs,
  isGradient = false,
}: ButtonPropsType) => {
  return (
    <Link
      href={hrefs ?? ""}
      className={`${
        isGradient
          ? "button-gradient text-white "
          : "bg-white hover:bg-tms-green text-tms-black hover:text-white"
      } py-4 px-5 md:px-7 transition-colors duration-300 text-sm md:text-base font-medium `}
    >
      {children}
    </Link>
  );
};

export default ButtonOrLink;
