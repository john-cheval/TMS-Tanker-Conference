import { ButtonPropsType } from "@/types/common";
import Link from "next/link";
import React from "react";

const ButtonOrLink = ({
  children,
  hrefs,
  isGradient = false,
  isBigText = true,
  isUnderline = false,
}: ButtonPropsType) => {
  return (
    <Link
      href={hrefs ?? ""}
      className={`${
        isGradient
          ? "button-gradient text-white "
          : "bg-white hover:bg-tms-green text-tms-black hover:text-white"
      } ${
        isBigText ? "px-5 md:px-7 " : "px-7 md:px-7 lg::px-11"
      } py-4 transition-colors duration-300 text-sm md:text-base font-medium block text-center w-fit ${
        isUnderline ? "underline" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default ButtonOrLink;
