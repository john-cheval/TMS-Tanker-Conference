import React from "react";

type Props = {
  heading: string;
  description: string;
  small_title: string;
  locationtext: string;
};

const ConferenceProgrammeSectionOne = ({
  heading,
  description,
  locationtext,
  small_title,
}: Props) => {
  return (
    <section className="section-wrapper pt-5 md:pt-8 lg:pt-12 ">
      <div className="border-b border-b-light-grey-1 pb-4 md:pb-6 lg:pb-8">
        <h2 className="main-heading-2 gradient-text-3 font-bold leading-1 w-fit text-center md:text-left mx-auto md:mx-0">
          {heading}
        </h2>
        <h6 className="text-tms-tanker-blue-2 text-xl md:text-2xl text-center md:text-left font-semibold md:mt-1">
          {small_title}
        </h6>
        <p className=" text-center md:text-left text-base md:text-xl leading-3 font-semibold mt-1">
          {locationtext}
        </p>
        <div
          className="description  text-dark-alter mt-2 md:mt-2 lg:mt-3 text-center md:text-left "
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </section>
  );
};

export default ConferenceProgrammeSectionOne;
