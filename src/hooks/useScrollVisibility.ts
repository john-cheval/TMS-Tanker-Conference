"use client";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 50;

export const useScrollVisibility = (threshold = SCROLL_THRESHOLD) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);
  return isVisible;
};
