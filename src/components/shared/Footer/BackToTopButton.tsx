"use client";
import Link from "next/link";
import React from "react";

const BackToTopButton = () => {
  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Link
      href="#"
      onClick={handleBackToTop}
      className="description text-[#bbb] hover:text-tms-green transition-colors duration-300"
    >
      Back to Top
    </Link>
  );
};

export default BackToTopButton;
