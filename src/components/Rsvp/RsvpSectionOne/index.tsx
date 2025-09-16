import RsvForm from "@/components/Forms/RsvForm";
import React from "react";
import { SiGooglegemini } from "react-icons/si";
type Props = {
  title: string;
  small__title: string;
  form_description: string;
};

const RsvpSectionOne = ({ title, small__title, form_description }: Props) => {
  return (
    <section className="section-wrapper  pt-8 m lg:pt-10 xl:pt-16 pb-8 md:pb-12 lg:pb-16 xl:pb-20">
      <div className="bg-tms-blue text-white responsive-radius pt-8 md:pt-10 lg:pt-14 pb-6 md:pb-10 lg:pb-14 px-5 md:px-8 lg:px-11 xl:px-16">
        <div className="space-y-5 mb-6">
          <p className="font-bold leading-5 text-base flex items-center gap-x-2.5 ">
            <SiGooglegemini /> {small__title}
          </p>
          <h3 className="main-heading-2 !text-white">{title}</h3>
        </div>

        <RsvForm description={form_description} />
      </div>
    </section>
  );
};

export default RsvpSectionOne;
