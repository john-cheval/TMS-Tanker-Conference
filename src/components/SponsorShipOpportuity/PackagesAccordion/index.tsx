"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { accordionVariants } from "@/constants/motionVariants";
import { AnimatePresence, motion } from "motion/react";
import SponsoredOppCard from "@/components/shared/ui/Cards/SponsoredOppCard";

type Props = {
  packageData?: any;
};

const PackagesAccordion = ({ packageData }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(packageData?.id);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  if (!packageData || packageData.length === 0) {
    return (
      <p className="text-2xl text-center text-tms-blue font-bold">
        No Packages Available
      </p>
    );
  }
  return (
    <article className="w-full" id="packageList">
      {packageData?.map((item: any, index: number) => {
        const isAccordionOpen = openIndex === item?.id;

        return (
          <div
            className="py-2 border-b border-b-tms-tanker-blue-2"
            key={index + 1}
          >
            <>
              <button
                className={`flex gap-x-5 items-center justify-between w-full   leading-1 py-2`}
                onClick={() => toggleAccordion(item.id as number)}
              >
                <p
                  className={`gradient-text w-fit  text-left transition-all duration-300 ${
                    isAccordionOpen
                      ? "text-2xl sm:text-3xl mb-5 font-bold"
                      : "text-xl font-semibold"
                  }`}
                >
                  {item?.title} {item?.small_title}
                </p>
                {isAccordionOpen ? (
                  <FaMinus className="text-black text-sm" />
                ) : (
                  <FaPlus className="text-black" />
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
                    <div>
                      {item?.sponsors && item?.sponsors?.length > 0 ? (
                        <div className="space-y-3 sm:space-y-5">
                          {item?.sponsors?.map(
                            (sponsor: any, index: number) => {
                              return (
                                <SponsoredOppCard
                                  key={index + 1}
                                  {...sponsor}
                                />
                              );
                            }
                          )}
                        </div>
                      ) : (
                        <p className="text-base text-center text-tms-blue font-bold">
                          No Packages Available
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          </div>
        );
      })}
    </article>
  );
};

export default PackagesAccordion;
