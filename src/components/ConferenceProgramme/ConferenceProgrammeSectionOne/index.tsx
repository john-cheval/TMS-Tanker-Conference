import React from "react";

type Props = {
  heading: string;
  description: string;
};

const ConferenceProgrammeSectionOne = ({ heading, description }: Props) => {
  const splittedTitle = heading?.split(" ").filter(Boolean);
  return (
    <section className="section-wrapper pt-5 md:pt-8 lg:pt-12 xl:pt-16 ">
      <div className="border-b border-b-light-grey-1 pb-4 md:pb-6 lg:b-8">
        <h2 className="main-heading text-dark-alter font-bold leading-1">
          {splittedTitle[0]}{" "}
          <span className="text-tms-purple"> {splittedTitle[1]}</span>
        </h2>
        <div
          className="description  text-dark-alter mt-0.5 sm:mt-1 md:mt-2 lg:mt-3"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </section>
  );
};

export default ConferenceProgrammeSectionOne;
