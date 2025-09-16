"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/Logo/tms_tanker_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu3Fill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import SideBar from "./SideBar";

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
  return (
    <>
      <header
        className={` fixed top-0 w-full z-[999955] transition-all duration-300 ${
          bgColor ? "bg-white" : "bg-transparent"
        } ease-in-out ${isVisible ? "translate-y-0 " : "-translate-y-full"}`}
      >
        <nav
          className={`wrapper-nav ${
            isVisible ? " py-3 md:py-5" : "py-6 md:py-10"
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
            <ul className=" items-center gap-x-5 2xl:gap-x-7 hidden md:flex">
              {Object.values(mainMenuLinks)?.map((nav: any, index: number) => {
                let isActive = pathname === nav?.link;
                if (nav?.link !== "/") {
                  isActive = pathname.startsWith(nav?.link);
                }
                return (
                  <li
                    key={index + 1}
                    className={`nav-links hover:text-tms-green transition-colors duration-300 ${
                      isActive ? "text-tms-green" : "text-tms-black"
                    }`}
                  >
                    <Link href={nav?.link}>{nav?.name}</Link>
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
