import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import * as motion from "motion/react-client";

type PlatformKey = keyof typeof socialIcons;

const socialIcons = {
  INSTAGRAM: FaInstagram,
  YOUTUBE: FaYoutube,
  X: FaXTwitter,
  TWITTER: FaXTwitter,
  FACEBOOK: FaFacebook,
  LINKEDIN: FiLinkedin,
};

const socialColors = {
  INSTAGRAM: "hover:text-[#E4405F]",
  YOUTUBE: "hover:text-[#FF0000]",
  X: "hover:text-white",
  TWITTER: "hover:text-white",
  FACEBOOK: "hover:text-[#1877F2]",
  LINKEDIN: "hover:text-[#0A66C2]",
};

interface SocialLink {
  id: number;
  key: string;
  title: string;
  value: string;
}

interface SocialLinksPropsType {
  data: SocialLink[];
}

const SocialLinks = ({ data }: SocialLinksPropsType) => {
  return (
    <div className="flex space-x-3">
      {data?.map((item, index) => {
        const platform = item.key.toUpperCase() as PlatformKey;
        const Icon = socialIcons[platform];
        const colorClass = socialColors[platform];

        if (!Icon || !colorClass) return null;

        return (
          <motion.div
            key={index + 1}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              key={item.id}
              href={item.value}
              target="_blank"
              rel="noopener noreferrer"
              className={`group text-dark-grey transition-colors duration-200 ease-in-out ${colorClass}`}
            >
              <Icon className=" text-xl md:text-2xl" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SocialLinks;
