import BecomeSponsorForm from "@/components/Forms/BecomeSponsorMain";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import SponsorsList from "@/components/Sponsors/SponsorsList";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(75, "media-partners", false);
}

const MediaPartners = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=75`
  );
  const {
    page_top_banner,
    become_a_sponsor_form,
    sponsors,
    supporting_associations,
    media_partners,
  } = pageContent?.data?.section_list;
  return (
    <>
      {" "}
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <SponsorsList
        sponsors={media_partners?.data}
        isButton={true}
        isAssosiation={true}
      />
      <BecomeSponsorForm {...become_a_sponsor_form} isPaddingTop={false} />
      {/* {sponsors && (
        <div className="section-wrapper sponsor-wrapper">
            <Sponsors data={sponsors} isSponsor={true} />
            <Sponsors data={supporting_associations} />
            <Sponsors data={media_partners} />{" "}
        </div>
      )} */}
    </>
  );
};

export default MediaPartners;
