"use client";
import { SpeakersDataProps } from "@/types/common";
import Image from "next/image";
import React,{useState,useEffect} from "react";
import overlayIcon from "@/assets/icons/speakerCardOVerlay.png";
import { motion, AnimatePresence } from "framer-motion";
import SpeakerDetailPopover from "@/components/shared/Popup/SpeakerPopup";

const SpeakersCardAlter = (props: SpeakersDataProps) => {
  const { image_url,image_alt_tag, name, post, company } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
      if (isOpen) {
          document.body.style.overflow = "hidden";   // stop scroll
      } else {
          document.body.style.overflow = "auto";     // restore scroll
      }

      return () => {
          document.body.style.overflow = "auto";
      };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false); // your function to close popup
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
    <div className=" flex flex-col h-full">
      <div className="relative border gradient-border-2 p-3 sm:p-5 md:p-6 lg:p-8">
        <Image
          src={image_url ?? ""}
          // alt={name ?? ""}
          alt={image_alt_tag ?? ""}
          width={95}
          height={100}
          className="w-full h-auto border gradient-border-2 relative z-50"
          onClick={() => setIsOpen(true)}
        />
        <Image
          src={overlayIcon}
          alt={"overlay_arrow"}
          width={95}
          height={100}
          className="w-full h-auto  absolute right-1 sm:right-3  lg:right-5 top-5  md:top-8 max-w-[170px]"
        />
      </div>

      <div onClick={() => setIsOpen(true)} className="border border-t-0 gradient-border-2 p-2 md:p-3 lg:p-5 h-full">
        <p className="text-tms-tanker-blue-2 text-center text-sm sm:text-lg lg:text-2xl font-medium leading-4  mb-1 ">
          {name}
        </p>
        <p className="text-tms-tanker-blue-2 text-center text-sm md:text-base font-normal leading-5">
          {post}
        </p>
        <p className="text-tms-tanker-blue-2 text-center text-sm md:text-base font-semibold leading-5">
          {company}
        </p>
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
            <SpeakerDetailPopover {...props} isClose={setIsOpen} />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SpeakersCardAlter;
