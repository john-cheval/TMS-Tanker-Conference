"use client";
import { accordionVariants } from "@/constants/motionVariants";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

export type FooterAccordionPropsType = {
  links?: any;
};

const FooterAccordion = ({ links }: FooterAccordionPropsType) => {
  const [openIndex, setOpenIndex] = useState<number | null>(links?.id);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <ul className="w-full">
      {links &&
        links?.length > 0 &&
        links?.map((link: any, index: number) => {
          const isAccordionOpen = openIndex === link?.id;
          return (
            <li key={index + 1} className="py-4 border-b border-[#BDBDBD]">
              <>
                <button
                  className="flex items-center justify-between w-full text-dark-grey text-base  font-normal leading-5"
                  onClick={() => toggleAccordion(link.id as number)}
                >
                  {link?.name}

                  {isAccordionOpen ? (
                    <FaMinus className="text-white" />
                  ) : (
                    <FaPlus className="text-white" />
                  )}
                </button>

                <AnimatePresence>
                  {isAccordionOpen && (
                    <motion.div
                      key="accordion-content"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={accordionVariants}
                      className="overflow-hidden"
                    >
                      <ul className="pl-4 sm:pl-5 pt-3 space-y-2 sm:space-y-3">
                        {Object.values(link?.submenu)?.map(
                          (childLink: any, index) => (
                            <li key={index}>
                              <Link
                                href={childLink.link ?? ""}
                                className="text-white text-sm  leading-6 "
                              >
                                {childLink.name}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            </li>
          );
        })}
    </ul>
  );
};

export default FooterAccordion;
