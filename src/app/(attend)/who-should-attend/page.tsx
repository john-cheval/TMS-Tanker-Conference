import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import WhoShouldAttendSectionOne from "@/components/WhoShouldAttend/Section1";
import WhyAttendSection from "@/components/WhoShouldAttend/Section2/WhyAttendSection";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(78, "who-should-attend", false);
}

const WhoShouldAttend = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=78`
  );

  const {
    page_top_banner,
    sponsors,
    supporting_associations,
    media_partners,
    who_should_attend,
    why_attend,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <WhoShouldAttendSectionOne {...who_should_attend} />
      <WhyAttendSection {...why_attend} />
      {sponsors && (
        <div className="section-wrapper pb-8 md:pb-10 lg:pb-12 xl:pb-14">
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

export default WhoShouldAttend;
