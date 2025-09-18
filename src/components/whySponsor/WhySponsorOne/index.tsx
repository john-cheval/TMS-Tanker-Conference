import React from "react";
import whySponsorImage from "@/assets/whySponsor/main.png";
import Image from "next/image";
import Link from "next/link";

const WhySponsorOne = () => {
  return (
    <section className="section-wrapper pt-8 md:pt-10 lg:pt-12 xl:pt-16">
      <div className="grid grid-cols-12 md:gap-x-5 lg:gap-x-8 xl:gap-x-12 2xl:gap-x-14">
        <Image
          src={whySponsorImage}
          alt="whySponsor"
          width={500}
          height={350}
          className="col-span-12 md:col-span-5 lg:col-span-4 h-full w-full"
        />

        <div className="col-span-12 md:col-span-7 lg:col-span-8 mt-5 sm:mt-6 md:mt-0">
          <h2 className="w-fit main-heading leading-3 font-bold md:leading-[40px]  lg:leading-main gradient-text mb-2 lg:mb-3 mx-auto md:mx-0">
            Why Sponsor
          </h2>
          <p className="description text-dark mb-5 md:mb-4 lg:mb-6  xl:pr-14 text-center md:text-left">
            Sponsorship of The Maritime Standard Tanker Conference 2025 offers
            targeted sponsorship packages for companies looking to take
            advantage of the commercial opportunities presented by the event. In
            particular, they will gain privileged access to a room full of
            high-level decision makers in this sector and will get a unique
            opportunity to demonstrate their commitment to help expand and
            develop the tanker sector, and supporting services and activities,
            by being associated with this prestigious event.
          </p>
          <Link
            href="#bcomeaSponsorForm"
            className="font-medium text-sm md:text-base text-white py-4  px-6 md:px-8 block w-fit mx-auto md:mx-0"
            style={{
              background: "linear-gradient(90deg, #008AC0 0%, #00A25D 100%)",
            }}
          >
            Become a sponsor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhySponsorOne;
