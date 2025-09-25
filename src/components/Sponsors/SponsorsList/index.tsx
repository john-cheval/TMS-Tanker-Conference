import { sponsorDataType } from "@/types/common";
import React from "react";
import * as motion from "motion/react-client";
import { cardVariants2, containerVariants2 } from "@/constants/motionVariants";
import SponsorListCard from "./SponsorListCard";
import ButtonOrLink from "@/components/shared/ui/Button";

export type SponsorsListProps = {
  sponsors: sponsorDataType[];
  isButton?: boolean;
  isAssosiation?: boolean;
};

const SponsorsList = ({
  sponsors,
  isButton = true,
  isAssosiation = false,
}: SponsorsListProps) => {
  return (
    <section
      className={`section-wrapper pt-8 md:pt-10 lg:pt-12 xl:pt-16  ${
        isButton ? "pb-6 md:pb-8 lg::pb-12 xl:pb-14 " : "pb-5 md:pb-8 xl:pb-0"
      }`}
    >
      <motion.div
        variants={containerVariants2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-y-4  md:gap-4 lg:gap-5 xl:gap-6"
      >
        {sponsors?.map((sponsor, index) => (
          <motion.div key={index} variants={cardVariants2}>
            <SponsorListCard {...sponsor} isAssosiationPage={isAssosiation} />
          </motion.div>
        ))}
      </motion.div>

      {isButton && (
        <div className="flex justify-center mt-5 md:mt-8  lg:mt-12">
          {/* <BigButton hrefs={"#"}>{"Become a Sponsor"}</BigButton> */}
          <ButtonOrLink isBigText={false} isGradient={true} hrefs={"#"}>
            Become a Sponsor
          </ButtonOrLink>
        </div>
      )}
    </section>
  );
};

export default SponsorsList;
