import SharedTopSection from "@/components/shared/Sections/TopSection";
import SponsorsList from "@/components/Sponsors/SponsorsList";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(15, "sponsors", false);
}

const Sponsors = async () => {
  const sponsorPageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=15`
  );

  const {
    page_top_banner,

    sponsors,
  } = sponsorPageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection
        {...page_top_banner}
        title={sponsorPageContent?.data?.name}
      />
      <SponsorsList sponsors={sponsors?.data} />
    </>
  );
};

export default Sponsors;
