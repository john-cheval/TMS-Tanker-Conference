import React from "react";
import SectionHeading from "../ui/Headings/SectionHeading";
import FooterButton from "../ui/Button/FooterButton";
import FooterLinks from "./FooterLinks";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import AiBig from "@/assets/shared/Ai_colored_big.svg";
import Image from "next/image";
import FooterAccordion from "./FooterAccordion";
import * as motion from "motion/react-client";
import { buttonApIPropsType } from "@/types/common";
import FooterNewsLetterForm from "@/components/Forms/FooterNewsLetterForm";

export type footerTypeProps = {
  footerMainLinks?: any;
  footerBottom?: any;
  socialLinks?: any;
  footer_heading1: string;
  footer_heading2: string;
  newsLetterHeading: string;
  registerNow: buttonApIPropsType;
  sponsorBtnData: buttonApIPropsType;
};
const Footer = ({
  footerMainLinks,
  footerBottom,
  socialLinks,
  footer_heading1,
  footer_heading2,
  registerNow,
  sponsorBtnData,
  newsLetterHeading,
}: footerTypeProps) => {
  const footerMainLinksData = Object.values(footerMainLinks);
  const footerBottomlinksData = Object.values(footerBottom);

  const heading = ` <span>${footer_heading1} </span> ${footer_heading2}.`;

  return (
    <footer className="bg-black relative pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-10 section-wrapper">
      <div className="grid grid-cols-12 lg:gap-x-8 2xl:gap-x-12">
        {/* Footer Title */}
        <div className="col-span-12 lg:col-span-5 flex flex-col items-start">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionHeading
              main_title={heading}
              isDark={true}
              isCenter={false}
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 md:mt-6 lg:mt-8 xl:mt-10 flex items-center  gap-x-2 md:gap-x-2.5"
          >
            <FooterButton hrefs={registerNow?.value} isSponsor={true}>
              {registerNow?.title}
            </FooterButton>
            <FooterButton hrefs={sponsorBtnData?.value}>
              {sponsorBtnData?.title}
            </FooterButton>
          </motion.div>

          <div className="mt-4 md:mt-6 lg:mt-8">
            <div className="sub_heading-1 !text-white !font-semibold mb-6 ">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                dangerouslySetInnerHTML={{ __html: newsLetterHeading }}
              />

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full max-w-sm min-w-[200px] relative mt-4 lg:mt-6"
              >
                <FooterNewsLetterForm />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="col-span-12 lg:col-span-7 hidden md:grid grid-cols-3 gap-x-5 2xl:gap-x-7 mt-4 lg:mt-0">
          <div className="space-y-6 lg:space-y-8 xl:space-y-10  2xl:space-y-12">
            {footerMainLinksData &&
              footerMainLinksData?.length > 0 &&
              footerMainLinksData?.slice(0, 2)?.map((link, index) => {
                return <FooterLinks key={index} links={link} splits={true} />;
              })}
          </div>
          <div className="space-y-6 lg:space-y-8 xl:space-y-10  2xl:space-y-12">
            {footerMainLinksData &&
              footerMainLinksData?.length > 0 &&
              footerMainLinksData?.slice(2, 4)?.map((link, index) => {
                return <FooterLinks key={index} links={link} />;
              })}
          </div>

          <div className="space-y-6 lg:space-y-8 xl:space-y-10  2xl:space-y-12">
            {footerMainLinksData &&
              footerMainLinksData?.length > 0 &&
              footerMainLinksData?.slice(4)?.map((link, index) => {
                return <FooterLinks key={index} links={link} />;
              })}
          </div>
        </div>

        {/* Footer Accordion */}
        <div className="col-span-12 block md:hidden">
          <FooterAccordion links={footerMainLinksData} />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-8 md:pt-10 lg:pt-14 xl:pt-16  2xl:pt-24 3xl:pt-28 flex flex-col sm:flex-row sm:items-center gap-y-5 sm:gap-y-0 sm:gap-x-5 sm:justify-between ">
        <div className="flex items-center gap-x-6 gap-y-4 sm:gap-y-0 flex-wrap sm:flex-nowrap">
          {footerBottomlinksData &&
            footerBottomlinksData?.length > 0 &&
            footerBottomlinksData?.map((link: any, index) => (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2,
                }}
                viewport={{ once: true, amount: 0.3 }}
                key={index}
              >
                <Link
                  className="text-white text-sm md:text-base leading-6 hover:text-tms-blue transition-colors duration-300 ease-in-out flex gap-x-4 md:inline-block  "
                  key={index + 1}
                  href={link?.link}
                >
                  {link?.name}{" "}
                  {footerBottomlinksData?.length - 1 !== index && (
                    <span className="sm:hidden text-[#bdbdbd]">|</span>
                  )}
                </Link>
              </motion.div>
            ))}
        </div>

        <div className="">
          {socialLinks && socialLinks?.length > 0 && (
            <SocialLinks data={socialLinks} />
          )}
        </div>
      </div>

      {/* <Image
        src={AiBig}
        alt="TMSAI"
        width={185}
        height={185}
        sizes="100vw"
        className="w-du
         h-auto object-cover max-w-24 md:max-w-[120px] lg:max-w-[170px] absolute top-0 -translate-y-1/2 right-3 md:right-10"
      /> */}
    </footer>
  );
};

export default Footer;
