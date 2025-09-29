import BecomeSponsorForm from "@/components/Forms/BecomeSponsorMain";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import SponsorBenifits from "@/components/Sponsors/SponsorBenifits";
import WhySponsorOne from "@/components/Sponsors/WhySponsorOne";
import WhySponsorSectionThree from "@/components/Sponsors/WhySponsorSectionThree";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(71, "why-sponsor", false);
}

const WhySponsor = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=71`
  );
  const {
    page_top_banner,
    key_sponsorship_benefits,
    become_a_sponsor_form,
    sponsors,
    supporting_associations,
    media_partners,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <WhySponsorOne />
      <SponsorBenifits {...key_sponsorship_benefits} />
      <WhySponsorSectionThree {...key_sponsorship_benefits} />
      <BecomeSponsorForm {...become_a_sponsor_form} />
      <div className="section-wrapper section-wrapper">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />{" "}
      </div>
    </>
  );
};

export default WhySponsor;
