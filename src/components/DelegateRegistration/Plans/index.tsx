import { SectionOnePropsTyps } from "@/types/common";
import React from "react";
import PlansTable from "../PlansTable";
import DelegateRegisterForm from "../RegisterForm";

const PricingPlans = ({
  heading,
  price_list,
  table_heading,
  table_heading_2,
  register_heading,
  register_price,
}: SectionOnePropsTyps) => {
  return (
    <section className="pt-5 md:pt-8 lg:pt-12  xl:pt-16 2xl:pt-20 section-wrapper">
      <div>
        <h2 className="main-heading-2 gradient-text  md:mx-auto w-fit !leading-2 mb-3 md:mb-5 xl:mb-8">
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
      />
    </section>
  );
};

export default PricingPlans;
