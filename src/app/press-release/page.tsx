import PreReleaseSectionOne from "@/components/PreRelease/PreReleaseSectionOne";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(17, "press-release", false);
}

const PressRelease = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=17`
  );

  const {
    page_top_banner,
    sponsors,
    supporting_associations,
    media_partners,
    press_release,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <PreReleaseSectionOne data={press_release?.data} />
      <div className="section-wrapper section-wrapper">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default PressRelease;
