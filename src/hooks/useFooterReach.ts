"use client";
import { useEffect, useState } from "react";

export const useFooterReached = (footerOffset = 0) => {
  const [reachedFooter, setReachedFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isAtFooter =
        scrollY + windowHeight >= documentHeight - footerOffset;

      setReachedFooter(isAtFooter);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerOffset]);

  return reachedFooter;
};
