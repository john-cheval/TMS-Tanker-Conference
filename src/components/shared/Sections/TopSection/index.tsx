import React from "react";
import isVideo from "@/lib/CheckIsVideo";
import Image from "next/image";
import imageLocal from "@/assets/sponsorOpp/sponsorOpp.png";

interface SharedTopSectionPropsTypes {
  banner?: string;
  title?: string;
}

const SharedTopSection = ({ banner, title }: SharedTopSectionPropsTypes) => {
  return (
    <section className=" relative text-white mt-[72px] md:mt-[102px]">
      <div className="relative ">
        {!isVideo(banner ?? "") ? (
          <Image
            // src={banner ?? imageLocal}
            src={imageLocal}
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
      </div>

      <div
        className="section-wrapper py-5 md:py-6  lg:py-8 bg-[linear-gradient(89deg,rgba(34,51,79,0.8)0.99%,rgba(0,138,192,0)97.36%)]
    backdrop-blur-[7.15px] absolute bottom-0 z-50 w-full 2xl:w-[75%] lg:w-[85%] clip-path-slant-banners"
      >
        <h1 className="main-heading font-bold text-center md:text-left leading-3 md:leading-[40px]  lg:leading-1 text-white">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default SharedTopSection;
