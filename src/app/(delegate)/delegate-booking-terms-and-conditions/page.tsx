import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(
    80,
    "delegate-booking-terms-and-conditions",
    false
  );
}

const DelegateBookingTermsAndCondtions = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=80`
  );

  const {
    page_top_banner,
    sponsors,
    supporting_associations,
    media_partners,
    page_description,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <div className="section-wrapper pt-5 md:pt-7 lg:pt-12 pb-8 md:pb-10 lg:pb-14">
        <div
          className="sponsor-terms-description"
          dangerouslySetInnerHTML={{
            __html: page_description?.description,
          }}
        />
      </div>
      <div className="section-wrapper pb-16 md:pb-20  space-y-5">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default DelegateBookingTermsAndCondtions;
