"use client";
import { sponsorDataType } from "@/types/common";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SponsorDetailPopover from "../SponsorPopup/SponsorDetailPopover";

const SponsorListCardAlter = (props: sponsorDataType) => {
  const { image_url, company_name } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="rounded-sm lg:rounded-lg xl:rounded-2xl border border-light-grey-1 overflow-hidden flex flex-col h-full cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="py-9 flex-grow flex justify-center items-center">
          <Image
            src={image_url ?? ""}
            alt={company_name ?? ""}
            width={200}
            height={900}
            sizes="100vw"
            className="w-fit h-auto object-cover flex-grow max-w-[200px] px-5"
          />
        </div>

        {company_name && (
          <div className="bg-tms-light-blue py-4 md:py-5 lg:py-8 px-4 w-full">
            <p className="text-sm md:text-base text-black font-bold leading-6 text-center">
              {company_name}
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white/[0.76] fixed inset-0 z-[999957]"
              onClick={() => setIsOpen(false)}
            />
            <SponsorDetailPopover {...props} isClose={setIsOpen} />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SponsorListCardAlter;
