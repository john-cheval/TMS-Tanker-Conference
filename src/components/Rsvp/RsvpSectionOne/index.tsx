import RsvForm from "@/components/Forms/RsvForm";
import React from "react";
type Props = {
  title: string;
  small__title: string;
  form_description: string;
  rsvpFormData:any;
};

const RsvpSectionOne = ({ title, form_description,rsvpFormData }: Props) => {
  return (
    <section className="section-wrapper  pt-8 m lg:pt-10 xl:pt-16 pb-8 md:pb-12 lg:pb-16 xl:pb-20">
      <div className=" pt-8 md:pt-10 lg:pt-14 pb-6 md:pb-10 lg:pb-14 px-5 md:px-8 lg:px-11 xl:px-16 border gradient-border-2">
        <h3 className="main-heading gradient-text w-fit text-center md:text-left  leading-3 font-bold md:leading-[40px]  lg:leading-main mb-3">
          {title}
        </h3>

        <RsvForm description={form_description} rsvpFormData={rsvpFormData[0]} />
      </div>
    </section>
  );
};

export default RsvpSectionOne;
