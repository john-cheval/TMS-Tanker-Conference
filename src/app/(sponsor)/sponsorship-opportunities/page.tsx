import SharedTopSection from "@/components/shared/Sections/TopSection";
// import Sponsors from "@/components/shared/Sponsors";
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

  const {
    page_top_banner,
    why_sponsor_tms_ai_tech_sponsorship_opportunities,
    become_a_sponsor_form,
    // sponsors,
    // supporting_associations,
    // media_partners,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <SponsorShipOppSectionOne
        {...why_sponsor_tms_ai_tech_sponsorship_opportunities}
        formData={become_a_sponsor_form}
      />

      {/*   <div className="section-wrapper section-wrapper">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div> */}
    </>
  );
};

export default SponsorshipOppurtunities;
