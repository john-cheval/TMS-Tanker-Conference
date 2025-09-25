"use client";
import { sponsorDataType } from "@/types/common";
import React, { useState } from "react";
import sponsorImage from "@/assets/sponsors/sposnsor.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { truncateHtmlByWords } from "@/utils/trumcate";
import SponsorDetailPopover from "../SponsorPopup/SponsorDetailPopover";

type Props = sponsorDataType & {
  isAssosiationPage?: boolean;
};

const SponsorListCard = (props: Props) => {
  const {
    image_url,
    company_name,
    description,
    name,
    isAssosiationPage = false,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const wordLimit = 30;
  const truncatedDescription = truncateHtmlByWords(description, wordLimit);
  return (
    <>
      <div className="border border-tms-tanker-blue- gradient-border-image grid grid-cols-1 sm:grid-cols-2">
        <div
          className={`sm:border-r border-b sm:border-b-0 gradient-border-image flex items-center justify-center px-7 py-16 sm:py-0 ${
            isAssosiationPage ? "my-0 sm:my-3 md:my-5" : "my-0"
          }`}
        >
          <Image
            //    src={image_url}
            src={sponsorImage}
            alt={company_name}
            width={200}
            height={84}
            className=""
          />
        </div>
        <div className="px-7 lg:px-9 py-11">
          <h5 className="text-tms-tanker-blue text-center sm:text-left text-2xl font-semibold leading-3 mb-2 ">
            {company_name ? company_name : name}
          </h5>
          <div
            dangerouslySetInnerHTML={{ __html: truncatedDescription }}
            className="text-sm md:text-base leading-5 mb-3 md:mb-4 text-center sm:text-left"
          />
          <button
            onClick={() => setIsOpen(true)}
            className="text-sm md:text-base underline hover:text-tms-green transition-colors duration-300 w-full text-center sm:text-left"
          >
            Read More
          </button>
        </div>
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

export default SponsorListCard;
