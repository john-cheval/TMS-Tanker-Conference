import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import SponsorShipOppSectionOne from "@/components/SponsorShipOpportuity/Section1";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(72, "sponsorship-opportunities", false);
}

const SponsorshipOppurtunities = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=72`
  );
  const generalSettings = pageContent?.gernalsettings;
  const conferenceData =
    pageContent?.gernalsettings?.current_year_coneference[0];
  const { AWARD_YEAR } = generalSettings?.general_settings;

  const sposnorshipPageContent = pageContent?.data?.section_list;
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
      <SponsorShipOppSectionOne
        {...sposnorshipPageContent?.why_sponsor_tms_ai_tech_sponsorship_opportunities}
        formData={pageContent?.data?.section_list?.become_a_sponsor_form}
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

export default SponsorshipOppurtunities;
