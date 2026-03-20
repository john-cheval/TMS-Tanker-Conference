import { footerLinksLeft, quickLinks } from "@/constants/footerLinks";
import React from "react";
import FooterLinks from "./FooterLinks";
import * as motion from "motion/react-client";
import FooterNewsLetterForm from "@/components/Forms/FooterNewsLetterForm";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import BackToTopButton from "./BackToTopButton";
import FooterAccordion from "./FooterAccordion";

type Props = {
  socialLinks?: any;
  footerMainLinks?: any;
  newsletterText:any;
};

const Footer = ({ socialLinks, footerMainLinks,newsletterText }: Props) => {
  const footerMainLinksData = Object.values(footerMainLinks);
  console.log("footerMainLinksData",footerMainLinksData)
  return (
    <div className="bg-black relative pt-8 md:pt-10 lg:pt-14 xl:pt-20 pb-6 md:pb-8 lg:pb-14">
      <div className="section-wrapper">
        <div className=" grid grid-cols-12 gap-x-5 lg:gap-x-8 2xl:gap-x-12">
          <div className=" hidden md:block md:col-span-4">
            <FooterLinks links={footerMainLinksData[1]} name="Our Products" />
          </div>

          <div className="hidden md:block md:col-span-3">
            <FooterLinks links={footerMainLinksData[0]} name="Quick Links" />
          </div>

          <div className="col-span-12 block md:hidden">
            <FooterAccordion links={footerMainLinksData} />
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="hidden md:block md:col-span-5"
          >
            {" "}
            <motion.h6 className="text-[#38C7FF] text-lg md:text-2xl font-medium leading-3">
              {newsletterText?.value}
            </motion.h6>
            <motion.div className="text-[#BBBBBB] description" dangerouslySetInnerHTML={{__html:newsletterText?.description}} />
            <FooterNewsLetterForm />
          </motion.div>
        </div>

        <div className="flex justify-center">
          {socialLinks && socialLinks?.length > 0 && (
            <SocialLinks data={socialLinks} />
          )}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 md:hidden"
        >
          {" "}
          <motion.h6 className="text-[#38C7FF] text-lg md:text-2xl font-medium leading-3 text-center">
            {newsletterText?.value}
          </motion.h6>
          <motion.div className="text-[#BBBBBB] description text-center" dangerouslySetInnerHTML={{__html:newsletterText?.description}} />
          <FooterNewsLetterForm />
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center sm:justify-between sm:gap-x-5 mt-5 md:mt-8 lg:mt-10 xl:mt-14">
          <p className="description text-[#bbb] text-center sm:text-left">
            © TMS Marine Conference 2025.{" "}
            <span className="block sm:inline-block">
              Designed & Developed by{" "}
              <Link href="https://chevalme.com/" target="_blank">
                Cheval
              </Link>
            </span>
          </p>

          <BackToTopButton />
        </div>
      </div>
    </div>
  );
};

export default Footer;
