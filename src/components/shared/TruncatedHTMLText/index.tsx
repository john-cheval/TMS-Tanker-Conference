// src/components/ExpandableHtmlText.tsx

"use client";

import { truncateHtmlByWords } from "@/utils/trumcate";
// import { truncateHtml } from "@/utils/trumcate";
import React, { useState, useEffect } from "react";

interface ExpandableHtmlTextProps {
  htmlContent: string;
  limit?: number;
}

const ExpandableHtmlText: React.FC<ExpandableHtmlTextProps> = ({
  htmlContent,
  limit = 1000,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [truncatedHtml, setTruncatedHtml] = useState("");

  useEffect(() => {
    if (htmlContent.length > limit) {
      setTruncatedHtml(truncateHtmlByWords(htmlContent, limit));
    } else {
      setTruncatedHtml(htmlContent);
    }
  }, [htmlContent, limit]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const isTruncated = htmlContent.length > limit;

  return (
    <div>
      <div
        className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-7"
        dangerouslySetInnerHTML={{
          __html: isExpanded ? htmlContent : truncatedHtml,
        }}
      ></div>
      {isTruncated && (
        <button
          onClick={toggleExpand}
          className=" text-sm md:text-base leading-5 text-tms-black mt-1"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ExpandableHtmlText;
