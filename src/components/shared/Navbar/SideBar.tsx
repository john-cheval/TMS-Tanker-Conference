import { SideBarComponentProps } from "@/types/common";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import { accordionVariants } from "@/constants/motionVariants";

export type SideBarProps = SideBarComponentProps & {
  isClose?: React.Dispatch<React.SetStateAction<boolean>>;
  sideBarLinksData: any;
};

const SideBar = ({ sideBarLinksData, isClose }: SideBarProps) => {
  //   const pathname = usePathname();
  const [openId, setOpenId] = useState<number | null>(null);

  const handleLinkClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <motion.nav
      className="bg-tms-green fixed top-0 right-0 px-6 md:px-20 py-10 md:py-14 h-full z-[999957] w-full sm:w-[70%] md:w-[50%] xl:w-[30%] 2xl:w-[40%] 3xl:w-[45%]  flex flex-col overflow-y-auto scrollbar-hide"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="flex justify-end items-center border-b border-white pb-8 md:pb-9">
        <IoMdClose
          aria-label="close menu"
          className="text-white text-xl md:text-2xl cursor-pointer"
          onClick={() => isClose?.(false)}
        />
      </div>

      <ul>
        {sideBarLinksData &&
          Object.values(sideBarLinksData)?.length > 0 &&
          Object.values(sideBarLinksData)?.map((link: any, index: number) => {
            // const url = link?.url === "/" ? "/" : link?.url;
            // const isActive = pathname === url;
            const hasChildren =
              link?.submenu && Object.values(link.submenu)?.length > 0;
            const isAccordionOpen = openId === link?.id;
            return (
              <li
                key={index + 21}
                className="py-5 md:py-6 border-b border-white"
              >
                {!hasChildren ? (
                  <Link
                    href={link?.link ?? "#"}
                    className="text-white text-lg font-medium leading-5"
                    onClick={() => isClose?.(false)}
                  >
                    {link?.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className="flex items-center justify-between w-full text-white text-lg font-medium leading-5"
                      onClick={() => handleLinkClick(link.id as number)}
                    >
                      {link?.name}
                      <IoMdArrowDropdown
                        className={`${
                          isAccordionOpen ? "rotate-180" : ""
                        } transition-transform duration-300 text-lg`}
                      />
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
                          <ul className="pl-4 sm:pl-5 lg:pl-8 pt-3 md:space-y-1">
                            {Object.values(link.submenu).map(
                              (childLink: any) => {
                                return (
                                  <li key={childLink.id}>
                                    <Link
                                      href={childLink.link ?? ""}
                                      className="text-white transition-colors text-[15px] sm:text-base font-light leading-[37px]"
                                      onClick={() => isClose?.(false)}
                                    >
                                      {childLink.name}
                                    </Link>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </li>
            );
          })}
      </ul>
    </motion.nav>
  );
};

export default SideBar;
