import React from "react";

export type SectionHeadingPropsTypes = {
  main_title?: string;
  isDark?: boolean;
  isCenter?: boolean;
};
const SectionHeading = ({
  main_title,
  isDark = false,
  isCenter = false,
}: SectionHeadingPropsTypes) => {
  return (
    <h3
      className={`home-about-heading ${
        isCenter ? "text-center lg:text-left md:!leading-2 " : ""
      }  main-heading ${
        isDark ? "text-white" : "text-tms-black"
      } font-bold leading-3 lg:leading-2 xl:leading-1`}
      dangerouslySetInnerHTML={{ __html: main_title ?? "" }}
    ></h3>
  );
};

export default SectionHeading;
