// components/Footer.js
"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaArrowUp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import MinimalEmailInput from "./MinimalEmailInput";
import StyledTitle from "./StyledTitle";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--footer-background)] text-[#BBBBBB]">
      <div className="container mx-auto px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Our Products Section */}
          <div>
            <StyledTitle>Our Products</StyledTitle>
            <ul className="space-y-2">
              <li className="text-base hover:text-blue-300 cursor-pointer transition-colors">
                The Maritime Standard E-Newsletter
              </li>
              <li className="text-base hover:text-blue-300 cursor-pointer transition-colors">
                The Maritime Standard Yearbook
              </li>
              <li className="text-base hover:text-blue-300 cursor-pointer transition-colors">
                The Maritime Standard Ship Finance & Trade Conference
              </li>
              <li className="text-base hover:text-blue-300 cursor-pointer transition-colors">
                The Maritime Standard Transportation and Climate Change
                Conference
              </li>
              <li className="text-base hover:text-blue-300 cursor-pointer transition-colors">
                The Maritime Standard Awards
              </li>
            </ul>
          </div>
          {/* Quick Links Section */}
          <div>
            <StyledTitle>Quick Links</StyledTitle>
            <ul className="space-y-2">
              <li className="text-base hover:text-blue-300 cursor-pointer transition-colors">
                Conference Programme
              </li>
              <li className="text-base hover:text-blue-300 cursor-pointer transition-colors">
                Sponsorship
              </li>
              <li className="text-base hover:text-blue-300 cursor-pointer transition-colors">
                Opportunities
              </li>
              <li className="text-base hover:text-blue-300 cursor-pointer transition-colors">
                Delegate Registration
              </li>
            </ul>
          </div>
          {/* Newsletter Section */}

          <div>
            <StyledTitle>Newsletter</StyledTitle>
            <p className="mb-4 text-base">
              Sign up for our newsletter to get the latest waves of updates,
              insights, and exclusive conference content.
            </p>
            <div>
              <MinimalEmailInput />
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <StyledTitle>Follow Us On</StyledTitle>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-[48px] h-[48px] rounded-full border-1 border-[#818181] flex items-center justify-center cursor-pointer hover:bg-[#818181] transition-colors"
                >
                  <FaFacebookF className="text-[var(--footer-blue)]" />
                </a>
                <a
                  href="#"
                  className="w-[48px] h-[48px] rounded-full border-1 border-[#818181] flex items-center justify-center cursor-pointer hover:bg-[#818181] transition-colors"
                >
                  <FaTwitter className="text-[var(--footer-blue)]" />
                </a>
                <a
                  href="#"
                  className="w-[48px] h-[48px] rounded-full border-1 border-[#818181] flex items-center justify-center cursor-pointer hover:bg-[#818181] transition-colors"
                >
                  <FaLinkedinIn className="text-[var(--footer-blue)]" />
                </a>
                <a
                  href="#"
                  className="w-[48px] h-[48px] rounded-full border-1 border-[#818181] flex items-center justify-center cursor-pointer hover:bg-[#818181] transition-colors"
                >
                  <FaInstagram className="text-[var(--footer-blue)]" />
                </a>
                <a
                  href="#"
                  className="w-[48px] h-[48px] rounded-full border-1 border-[#818181] flex items-center justify-center cursor-pointer hover:bg-[#818181] transition-colors"
                >
                  <FaYoutube className="text-[var(--footer-blue)]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className=" mb-4 md:mb-0">
            <p>© TMS Marine Conference 2025. Designed & Developed by Cheval</p>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center cursor-pointer"
          >
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
