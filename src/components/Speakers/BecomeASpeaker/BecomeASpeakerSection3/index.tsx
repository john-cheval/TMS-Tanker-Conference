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
    <section className=" mt-5 md:mt-8 lg:mt-10 mb-12">
      {/* Announcement */}
      <ListOfDates data={list_of_date} />

      <div className="section-wrapper mt-5 md:mt-8 lg:mt-11">
        <div className="space-y-4 md:space-y-6">
          <p className="description text-dark-alter">{note}</p>

          <div className="bg-[#f5f5f5] rounded-sm py-7 md:py-8 lg:py-12 xl:py-16 px-5 md:px-8 lg:px-12 xl:px-16 space-y-3">
            <h4 className="main-heading-2 !text-dark-alter">{heading_2}</h4>
            <div
              className="become-sponsoe-description"
              dangerouslySetInnerHTML={{ __html: description_2 }}
            />
          </div>
        </div>

        <div className="mt-5 md:mt-8 lg:mt-11 space-y-4 md:space-y-6">
          <h4 className="main-heading-2 !text-dark-alter">{form_heading}</h4>
          <BecomeSponsorPageForm
            formDescription={form_description}
            NatureOfCompanyList={companyList}
          />
        </div>
      </div>
    </section>
  );
};

export default BecomeASpeakerSectionThree;
