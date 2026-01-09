import PricingPlans from "@/components/DelegateRegistration/Plans";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import Image from "next/image";
import React from "react";
import Sponsors from "@/components/shared/Sponsors";
import generateMetadDataDetails from "@/lib/generateMetaData";
import { delegateDataList } from "@/constants/sponsorOppData";
import cardTopIcon from "@/assets/icons/delegateCardVector.png";

export async function generateMetadata() {
  return await generateMetadDataDetails(79, "delegate-registration", false);
}

const DelegateRegistration = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=79`
  );

  const conferenceData =
    pageContent?.gernalsettings?.current_year_coneference[0];
  const generalSettings = pageContent?.gernalsettings;
  const { Enquery_emails_nature_of_company_list } =
    generalSettings?.general_settings;
  const {
    page_top_banner,
    sponsors,
    supporting_associations,
    media_partners,
    pricing_plans,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />

      <div className="section-wrapper pt-8 md:pt-10 lg:pt-12  xl:pt-14 ">
        <p className="text-center description text-black mx-0 md:mx-5 lg:mx-14">
          The Maritime Standard Tanker Conference will take place on October
          30th 2025 at The Atlantis, The Palm, Dubai, UAE. The Maritime Standard
          Tanker Conference has been designed specifically for top executives
          involved in the tanker shipping market, and those companies which
          provide products and services to tanker shipping specialists.
        </p>

        <div className="pt-6 md:pt-8 lg:pt-12 xl:pt-14 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 md:gap-x-4 xl:gap-x-5 overflow-hidden">
          {delegateDataList?.map((item, index) => {
            return (
              <div
                key={index + 1}
                className="border gradient-border-2 pt-5 lg:pt-8 px-5 md:px-8 lg:px-10 pb-6 relative"
              >
                <h6 className="text-[#008ac0] text-xl md:text-2xl leading-3 font-medium mb-2">
                  {item?.title}
                </h6>

                <div className="delegateDescription description text-black">
                  <p>discount</p>
                  <ul>
                    {item?.lists?.map((list, idx) => {
                      return <li key={idx + 1}>{list}</li>;
                    })}
                  </ul>
                </div>

                <div className="absolute top-5 md:top-2 xl:top-5 right-5 xl:right-10">
                  <Image
                    src={cardTopIcon}
                    alt="cardTopIcon"
                    className="w-full h-auto "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <PricingPlans
        {...pricing_plans}
        companyList={Enquery_emails_nature_of_company_list}
        earlyBirdsDate={conferenceData?.Early_Bird_date}
      />
      <div className="section-wrapper sponsor-wrapper pt-7 md:pt-8 lg:pt-14 xl:pt-16 2xl:pt-20 ">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default DelegateRegistration;
