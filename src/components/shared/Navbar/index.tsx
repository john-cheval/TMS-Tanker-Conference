"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/assets/Logo/tms_tanker_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu3Fill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import SideBar from "./SideBar";
import { IoMdArrowDropdown } from "react-icons/io";
import { iconVariants, submenuVariants } from "@/constants/motionVariants";

export type NavPropTypes = {
  mainMenuLinks: any;
  sideBarLinksDatas: any;
};

const Navbar = ({ mainMenuLinks, sideBarLinksDatas }: NavPropTypes) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === "/";
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const toggleSubmenu = (name: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  useEffect(() => {
    const currentScrollY = window.scrollY;
    setBgColor(currentScrollY > 80);
  }, []);

  useEffect(() => {
    const currentScrollY = window.scrollY;
    const handleScroll = () => {
      setBgColor(currentScrollY > 80);
      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the clicked element is NOT inside the submenu
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setOpenSubmenu(null);
      }
    };

    if (openSubmenu) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    // Cleanup function
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [openSubmenu]);
  return (
    <>
      <header
        className={` fixed top-0 w-full z-[999955] transition-all duration-300  ${
          bgColor || !isHome ? "bg-white" : "bg-transparent"
        } ease-in-out ${isVisible ? "translate-y-0 " : "-translate-y-full"}`}
      >
        <nav
          className={`wrapper-nav transition-all duration-300 ${
            isVisible ? " py-5 shadow-sm" : "py-7"
          } flex items-center justify-between`}
          style={{
            willChange: "transform",
          }}
        >
          <Link href="/">
            <Image
              src={Logo}
              height={51}
              width={150}
              sizes="100vw"
              priority
              alt="TMS AI conference"
              className="w-full h-auto object-cover max-w-[200px] md:max-w-full "
            />
          </Link>

          <div className="flex items-center gap-x-5 2xl:gap-x-7">
            <ul className=" items-center gap-x-5 2xl:gap-x-7 hidden lg:flex">
              {Object.values(mainMenuLinks)?.map((nav: any, index: number) => {
                // let isActive = pathname === nav?.link;
                // if (nav?.link !== "/") {
                //   isActive = pathname.startsWith(nav?.link);
                // }
                const isActive =
                  pathname === nav?.link ||
                  (nav?.link !== "/" && pathname.startsWith(nav?.link));
                const hasSubmenu =
                  nav.submenu && Object.values(nav.submenu)?.length > 0;
                const isSubmenuOpen = openSubmenu === nav?.name;

                return (
                  <li
                    key={index + 1}
                    className={`nav-links hover:text-tms-green transition-colors duration-300 ${
                      isActive ? "text-tms-green" : "text-tms-black"
                    }`}
                  >
                    {!hasSubmenu ? (
                      <Link href={nav?.link}>{nav?.name}</Link>
                    ) : (
                      <div className="relative">
                        <button
                          className="flex items-center gap-x-1 "
                          onClick={(e) => toggleSubmenu(nav?.name, e)}
                        >
                          {nav?.name}{" "}
                          <motion.span
                            variants={iconVariants}
                            animate={isSubmenuOpen ? "open" : "closed"}
                          >
                            <IoMdArrowDropdown className="transition-transform duration-300 text-lg" />
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {isSubmenuOpen && (
                            <motion.div
                              variants={submenuVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              className="origin-top overflow-hidden absolute top-10 left-1/2 -translate-x-1/2"
                              ref={submenuRef}
                            >
                              <ul className="pl-4 py-2 bg-tms-green  w-full px-5 ">
                                {Object.values(nav.submenu)?.map(
                                  (subItem: any, subIndex: number) => (
                                    <li
                                      key={subIndex + 1}
                                      className="p-1  whitespace-nowrap "
                                      onClick={(e) =>
                                        toggleSubmenu(nav?.name, e)
                                      }
                                    >
                                      <Link
                                        href={subItem?.link}
                                        className="text-white hover:bg-white hover:text-tms-green duration-300 transition-colors p-1"
                                      >
                                        {subItem?.name}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <RiMenu3Fill
              color="#000"
              stroke="1"
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="bg-black/[0.4] backdrop-blur-[14.5px] fixed inset-0 z-[999956] flex flex-col "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <SideBar sideBarLinksData={sideBarLinksDatas} isClose={setIsOpen} />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
