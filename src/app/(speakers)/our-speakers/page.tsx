import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import OurSpeakersSectionOne from "@/components/Speakers/OurSpeakersSection1";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(81, "our-speakers", false);
}

const OurSpeakers = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=81`
  );

  const {
    page_top_banner,
    our_speakers,
    sponsors,
    supporting_associations,
    media_partners,
  } = pageContent?.data?.section_list;

  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <OurSpeakersSectionOne {...our_speakers} />

      <div className="section-wrapper sponsor-wrapper ">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default OurSpeakers;
