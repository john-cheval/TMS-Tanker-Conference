import ArchieveGallery from "@/components/Archieve/ArchieveGallery/inedx";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(85, "archives", false);
}

const Archives = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=85`
  );

  const {
    page_top_banner,
    sponsors,
    supporting_associations,
    media_partners,
    archive_section,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <ArchieveGallery data={archive_section?.data} />
      <div className="section-wrapper pb-16 md:pb-20  space-y-9">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default Archives;
