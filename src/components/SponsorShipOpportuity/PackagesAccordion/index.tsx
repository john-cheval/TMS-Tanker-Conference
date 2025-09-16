"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { accordionVariants } from "@/constants/motionVariants";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import arrowDown from "@/assets/shared/chevron-right.png";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
    <article className="w-full">
      {packageData?.map((item: any, index: number) => {
        const isAccordionOpen = openIndex === item?.id;

        return (
          <div className="py-2 border-b border-b-light-grey" key={index + 1}>
            <>
              <button
                className="flex text-black items-center justify-between w-full text-lg font-bold leading-1"
                onClick={() => toggleAccordion(item.id as number)}
              >
                <p>
                  <span className="text-tms-purple">{item?.title}</span>{" "}
                  {item?.small_title}
                </p>
                {isAccordionOpen ? (
                  <FaMinus className="text-[#1C1B1F]" />
                ) : (
                  <FaPlus className="text-[#1C1B1F]" />
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
                        <div className="space-y-5">
                          {item?.sponsors?.map(
                            (sponsor: any, index: number) => {
                              return (
                                <div key={index + 1}>
                                  <Image
                                    src={sponsor?.image_url}
                                    alt={sponsor?.title}
                                    width={385}
                                    height={164}
                                    className="w-full h-auto object-cover rounded-t-sm"
                                  />

                                  <div className="bg-[#ECECEC] border border-t-0 border-[#cecece] px-5 py-4">
                                    <h5 className="main-heading-2 gradient-text w-fit">
                                      {" "}
                                      {sponsor?.title}
                                    </h5>
                                    <p className="text-base text-[#2A2A2A] font-medium leading-5 mt-[2px] mb-3">
                                      {" "}
                                      {sponsor?.small_title}
                                    </p>
                                    <div
                                      className="sponsor-description"
                                      dangerouslySetInnerHTML={{
                                        __html: sponsor?.description,
                                      }}
                                    />
                                  </div>

                                  <div className=" grid grid-cols-2 rounded-b-sm overflow-hidden">
                                    <button className=" bg-[#ECECEC] w-full flex justify-center items-center gap-x-2 py-3 text-sm sm:text-base font-bold leading-5 text-tms-purple">
                                      Read More{" "}
                                      <Image
                                        src={arrowDown}
                                        alt="arrowdown"
                                        width={16}
                                        height={16}
                                        sizes="100vw"
                                        className="w-full h-auto max-w-3 object-cover"
                                      />
                                    </button>
                                    <Link
                                      href={"#"}
                                      className=" buttonGradient-2 rounded-br-sm block- flex items-center justify-center text-white py-3 text-sm sm:text-base font-bold leading-5 group"
                                    >
                                      Send Enquiry{" "}
                                      <MdOutlineKeyboardArrowRight className="text-2xl  group-hover:translate-x-1 group-hover:text-tms-blue- transition-all duration-300 ease-in-out" />
                                    </Link>
                                  </div>
                                </div>
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
