import React from "react";

export type SectionHeadingpropsTypes = {
  title?: string;
  isDark?: boolean;
};

const SectionHeadingTwo = ({ title, isDark }: SectionHeadingpropsTypes) => {
  return (
    <h3 className={`main-heading-2 ${isDark && "!text-black"} `}>{title}</h3>
  );
};

export default SectionHeadingTwo;
