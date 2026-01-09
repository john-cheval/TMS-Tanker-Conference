import React from "react";
import PlansTable from "../PlansTable";
import DelegateRegisterForm from "../RegisterForm";

type Props = {
  heading: string;
  price_list: any;
  table_heading: string;
  table_heading_2: string;
  register_heading: string;
  register_price: any;
  companyList: any;
  earlyBirdsDate?: string;
};

const PricingPlans = ({
  heading,
  price_list,
  table_heading,
  table_heading_2,
  register_heading,
  register_price,
  companyList,
  earlyBirdsDate
}: Props) => {
  return (
    <section className="pt-5 md:pt-8 lg:pt-12  xl:pt-14 section-wrapper">
      <div>
        <h2
          className="main-heading-2   mx-auto w-fit mb-4 md:mb-5 xl:mb-6 font-bold"
          style={{
            background: "linear-gradient(90deg, #38C7FF 0.19%, #00A25D 66.61%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {heading}
        </h2>

        <PlansTable
          data={price_list}
          heading_1={table_heading}
          heading_2={table_heading_2}
        />
      </div>

      <DelegateRegisterForm
        heading={register_heading}
        priceDetails={register_price}
        NatureOfCompanyList={companyList}
        earlyBirdDates={earlyBirdsDate}
      />
    </section>
  );
};

export default PricingPlans;
