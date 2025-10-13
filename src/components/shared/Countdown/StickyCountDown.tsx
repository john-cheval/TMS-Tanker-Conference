"use client";
import React from "react";
import CountdownTimer from ".";
import Link from "next/link";

interface ButtonProps {
  title: string;
  value: string;
}
export type StickyCountDownProps = {
  targetDate: string;
  registerNowBtn: ButtonProps;
  sponsorBtn: ButtonProps;
  isVisible?: boolean;
};

const StickyCountDown = ({
  targetDate,
  registerNowBtn,
  sponsorBtn,
  isVisible,
}: StickyCountDownProps) => {
  const visibilityClass = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-full opacity-0 pointer-events-none";
  return (
    <article
      className={`gradient-master py-4 section-wrapper fixed bottom-0 left-0 w-full z-50 text-white transform transition-all duration-500 ${visibilityClass} hidden sm:block`}
    >
      <div className=" flex items-center justify-between flex-col lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-5">
        <div className="flex items-center gap-x-5 flex-col sm:flex-row gap-y-3 sm:gap-y-0 md:gap-x-8">
          <p className="text-2xl font-medium leading-[134%] capitalize">
            Confernce Starts In
          </p>
          <div>
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>

        <div className="flex gap-3 flex-col- lg:flex-row-">
          <Link
            href={registerNowBtn?.value || "#"}
            className="text-white text-base font-medium border border-white px-6  xl:px-12 py-4 hover:text-black hover:bg-white transition-colors duration-300 "
          >
            {registerNowBtn?.title}
          </Link>

          <Link
            href={sponsorBtn?.value || "#"}
            className="text-black text-base bg-white font-medium border border-white px-6  xl:px-12 py-4 hover:text-white hover:bg-transparent transition-colors duration-300"
          >
            {sponsorBtn?.title}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default StickyCountDown;
