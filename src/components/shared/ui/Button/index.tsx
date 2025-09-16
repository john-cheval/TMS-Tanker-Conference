import { ButtonPropsType } from "@/types/common";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const ButtonOrLink = ({
  children,
  hrefs,
  isGradient,
  isIcon,
  isLink = false,
}: ButtonPropsType) => {
  return (
    <>
      {isLink ? (
        <Link
          href={hrefs ?? "/"}
          className={`rounded-sm w-fit text-sm md:text-base font-semibold md:font-bold leading-5 py-2.5 md:py-3 px-6 group transition-colors duration-300 ease-in-out ${
            isIcon ? "flex items-center gap-x-1" : ""
          } ${
            isGradient
              ? "buttonGradient text-white  "
              : "bg-tms-blue border border-tms-blue hover:bg-transparent text-white hover:text-tms-blue"
          }`}
        >
          {children}

          {isIcon && (
            <MdKeyboardArrowRight className="group-hover:translate-x-2  transition-transform duration-300 ease-in-out" />
          )}
        </Link>
      ) : (
        <button
          className={`rounded-sm text-sm md"text-base font-semibold md:font-bold leading-5  py-2.5 md:py-3 px-6 group transition-colors duration-300 ease-in-out ${
            isIcon ? "flex items-center gap-x-1" : ""
          } ${
            isGradient
              ? "buttonGradient text-white border "
              : "bg-tms-blue border border-tms-blue hover:bg-transparent text-white hover:text-tms-blue"
          }`}
        >
          {children}

          {isIcon && (
            <MdKeyboardArrowRight className="group-hover:translate-x-2  transition-transform duration-300 ease-in-out" />
          )}
        </button>
      )}
    </>
  );
};

export default ButtonOrLink;
