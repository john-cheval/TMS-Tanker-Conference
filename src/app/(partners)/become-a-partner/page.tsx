import BecomeSponsorForm from "@/components/Forms/BecomeSponsor";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(76, "become-a-partner", false);
}

const BecomePartner = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=76`
  );
  const generalSettings = pageContent?.gernalsettings;
  const conferenceData =
    pageContent?.gernalsettings?.current_year_coneference[0];
  const { AWARD_YEAR } = generalSettings?.general_settings;

  return (
    <>
      <SharedTopSection
        {...pageContent?.data?.section_list?.page_top_banner}
        title={pageContent?.data?.name}
        awardTitle={AWARD_YEAR?.title}
        conferenceTitle={conferenceData?.Coneference_title}
        conferenceLocation={conferenceData.location}
        conferenceDate={conferenceData.end_date}
      />

      <div
        className="section-wrapper pt-8 md:pt-10 lg:pt-12  xl:pt-16 2xl:pt-20 description font-normal text-dark-alter pb-6 md:pb-0 text-center"
        dangerouslySetInnerHTML={{
          __html:
            pageContent?.data?.section_list?.page_description?.description,
        }}
      />
      <BecomeSponsorForm
        {...pageContent?.data?.section_list?.become_a_sponsor_form}
        isPartnerForm={true}
      />

      <div className="section-wrapper pb-12 md:pb-20 space-y-5">
        <Sponsors
          data={pageContent?.data?.section_list?.sponsors}
          isSponsor={true}
        />
        <Sponsors
          data={pageContent?.data?.section_list?.supporting_associations}
        />
        <Sponsors data={pageContent?.data?.section_list?.media_partners} />
      </div>
    </>
  );
};

export default BecomePartner;
