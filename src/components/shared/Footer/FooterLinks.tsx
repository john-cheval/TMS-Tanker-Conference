import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

export type FooterLinksPropsType = {
  links?: any;
  splits?: boolean;
};

const FooterLinks = ({ links, splits }: FooterLinksPropsType) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: splits ? 0.3 : 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-3 lg:space-y-4"
    >
      <motion.h6 className="text-dark-grey text-base lg:text-lg font-normal leading-5">
        {links?.name}
      </motion.h6>
      <div className="space-y-3  flex flex-col">
        {Object.values(links?.submenu)?.map((link: any, index) => (
          <motion.div
            key={index + 1}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: splits ? index * 0.3 : index * 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              className="text-white text-sm lg:text-base leading-6 hover:text-tms-blue transition-colors duration-300 ease-in-out"
              href={link?.link}
            >
              {link?.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FooterLinks;
