import React from "react";
import ListOfDates from "../ListOfDate";
import BecomeSponsorPageForm from "@/components/Forms/BecomeSponsorPageForm";

export type ListofDateType = {
  title: string;
  description: string;
  image_url?: string;
};

type Props = {
  note: string;
  heading_2: string;
  description_2: string;
  form_heading: string;
  form_description: string;
  list_of_date: ListofDateType[];
  companyList: any;
};

const BecomeASpeakerSectionThree = (props: Props) => {
  const {
    list_of_date,
    note,
    heading_2,
    description_2,
    form_heading,
    form_description,
    companyList,
  } = props;
  return (
    <section className=" section-wrapper mt-5 md:mt-8 lg:mt-10 mb-12">
      <div className="mt-5 md:mt-8 lg:mt-11 space-y-4 md:space-y-6">
        <h4 className=" text-3xl md:text-[40px] text-center md:text-left text-[#008AC0] font-bold ">
          {form_heading}
        </h4>
        <BecomeSponsorPageForm
          formDescription={form_description}
          NatureOfCompanyList={companyList}
        />
      </div>
    </section>
  );
};

export default BecomeASpeakerSectionThree;
