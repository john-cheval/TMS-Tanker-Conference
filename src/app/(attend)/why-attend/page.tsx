import SharedTopSection from "@/components/shared/Sections/TopSection";
// import Sponsors from "@/components/shared/Sponsors";
import WhyAttendSectionOne from "@/components/why-attend/Section1";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(77, "why-attend", false);
}

const WhyAttend = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=77`
  );
  const {
    page_top_banner,
    become_a_sponsor_form,
    sponsors,
    supporting_associations,
    media_partners,
    why_attend_page,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <div
        className="section-wrapper pt-8 md:pt-10 lg:pt-12  xl:pt-14 description font-normal text-dark-alter pb-6 md:pb-0 text-center"
        dangerouslySetInnerHTML={{
          __html: why_attend_page?.description,
        }}
      />
      <WhyAttendSectionOne data={why_attend_page?.why_attend_list} />
      {/* <div className="section-wrapper pb-12 md:pb-20 space-y-5 pt-6 md:pt-12 lg:pt-16 xl:pt-20">
        <Sponsors
          data={pageContent?.data?.section_list?.sponsors}
          isSponsor={true}
        />
        <Sponsors
          data={pageContent?.data?.section_list?.supporting_associations}
        />
        <Sponsors data={pageContent?.data?.section_list?.media_partners} />
      </div> */}
    </>
  );
};

export default WhyAttend;
