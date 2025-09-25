import BecomeSponsorForm from "@/components/Forms/BecomeSponsorMain";
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

      <div
        className="section-wrapper pt-8 md:pt-10 lg:pt-12  xl:pt-16 2xl:pt-20 description font-normal text-dark-alter pb-6 md:pb-0 text-center"
        dangerouslySetInnerHTML={{
          __html:
            pageContent?.data?.section_list?.page_description?.description,
        }}
      />
      <BecomeSponsorForm {...become_a_sponsor_form} isPaddingTop={true} />

      {sponsors && (
        <div className="section-wrapper pb-8 md:pb-10 lg:pb-12 xl:pb-16">
          <div className="space-y-9">
            <Sponsors data={sponsors} isSponsor={true} />
            <Sponsors data={supporting_associations} />
            <Sponsors data={media_partners} />{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default BecomePartner;
