import BecomeSponsorForm from "@/components/Forms/BecomeSponsorMain";
import SharedTopSection from "@/components/shared/Sections/TopSection";
// import Sponsors from "@/components/shared/Sponsors";
import SponsorsList from "@/components/Sponsors/SponsorsList";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(74, "supporting-associations", false);
}

const SupportingAssosiations = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=74`
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
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <SponsorsList
        sponsors={supporting_associations?.data}
        isButton={true}
        isAssosiation={true}
      />
      <BecomeSponsorForm {...become_a_sponsor_form} isPaddingTop={false} />

      {/* {sponsors && (
        <div className="section-wrapper pb-8 md:pb-10 lg:pb-12 xl:pb-16">
          <div className="space-y-9">
            <Sponsors data={sponsors} isSponsor={true} />
            <Sponsors data={supporting_associations} />
            <Sponsors data={media_partners} />{" "}
          </div>
        </div>
      )} */}
    </>
  );
};

export default SupportingAssosiations;
