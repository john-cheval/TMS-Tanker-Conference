import { SponsorsPropsType } from "@/types/common";
import React from "react";
import SponsorListCard from "./SponsorListCard";
import * as motion from "motion/react-client";
import { cardVariants2, containerVariants2 } from "@/constants/motionVariants";
import BigButton from "@/components/shared/ui/Button/BigButton";

export type SponsorsListProps = {
  sponsors: SponsorsPropsType[];
  isButton?: boolean;
};

const SponsorsList = ({ sponsors, isButton = true }: SponsorsListProps) => {
  return (
    <section
      className={`section-wrapper pt-9 md:pt-12 lg:pt-14 xl:pt-16 2xl:pt-20  ${
        isButton ? "pb-12 md:pb-14 lg:pb-16 xl:pb-20" : "pb-5 md:pb-8 xl:pb-0"
      }`}
    >
      <motion.div
        variants={containerVariants2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5 md:gap-3 lg:gap-4"
      >
        {sponsors?.map((sponsor, index) => (
          <motion.div key={index} variants={cardVariants2}>
            <SponsorListCard {...sponsor} />
          </motion.div>
        ))}
      </motion.div>

      {isButton && (
        <div className="flex justify-center mt-12 lg:mt-16 xl:mt-20">
          <BigButton hrefs={"#"}>{"Become a Sponsor"}</BigButton>
        </div>
      )}
    </section>
  );
};

export default SponsorsList;
