import React from "react";
import isVideo from "@/lib/CheckIsVideo";
import Image from "next/image";
import { RiGeminiFill } from "react-icons/ri";
import * as motion from "motion/react-client";
import { containerVariants, itemVariants } from "@/constants/motionVariants";
import dayjs from "dayjs";
import Link from "next/link";

interface SharedTopSectionPropsTypes {
  banner?: string;
  title?: string;
  awardTitle?: string;
  conferenceTitle?: string;
  conferenceLocation?: string;
  conferenceDate?: string;
}

const SharedTopSection = ({
  banner,
  title,
  awardTitle,
  conferenceTitle,
  conferenceLocation,
  conferenceDate,
}: SharedTopSectionPropsTypes) => {
  const formatted = dayjs(conferenceDate).format("MMMM YYYY");
  return (
    <section className=" relative text-white ">
      <div className="relative ">
        {!isVideo(banner ?? "") ? (
          <Image
            src={banner ?? ""}
            width={500}
            height={400}
            alt="title"
            className="w-full h-auto object-cover  min-h-[400px] md:min-h-full"
          />
        ) : (
          <video
            src={banner || "/banner_video.mp4"}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover z-[5]  min-h-[400px] md:min-h-full"
          />
        )}

        <div className="top-banner-gradient bg-red-500- w-full h-full absolute top-0 left-0 z-10" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:-translate-y-0 md:-translate-x-0 md:top-[7%] lg:top-[10%] flex items-center md:items-start md:justify-start justify-center flex-col    xl:top-[100px] 2xl:top-[150px] md:left-0 z-[50] section-wrapper"
      >
        <motion.div
          variants={itemVariants}
          className="flex gap-x-2.5 items-center mb-3 lg:mb-5"
        >
          <RiGeminiFill className="text-tms-pink text-xl" />
          <p className=" text-sm font-bold leading-6 w-full">{awardTitle}</p>
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className=" text-sm text-center md:text-left font-bold leading-5 w-full mb-5 md:mb-3"
        >
          {conferenceTitle}
        </motion.h2>
        <motion.h3
          variants={itemVariants}
          className="sub_heading-1 text-center md:text-left !text-white mb-3 md:mb-5 lg:mb-7 !font-normal"
        >
          {formatted} | {conferenceLocation}
        </motion.h3>
        <motion.div
          variants={itemVariants}
          className="gradient-seperator w-[250px] md:w-[280px]  lg:w-[300px] mx-auto md:mx-0"
        />

        <motion.h1
          variants={itemVariants}
          className="main-heading mt-3 md:mt-5  lg:mt-8 xl:mt-12 text-center  md:text-left"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-2 md:mt-4 description fotn-medium text-white "
        >
          <Link
            className="hover:text-tms-blue transition-colors duration-300"
            href="/"
          >
            Home
          </Link>{" "}
          - <span>{title}</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SharedTopSection;
