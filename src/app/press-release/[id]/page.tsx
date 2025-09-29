import DetailsSectionone from "@/components/PreRelease/DetailsSectionone";
// import RecentlyViewed from "@/components/PreRelease/RecentlyViewed";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return await generateMetadDataDetails(
    id,
    `press-release/${id}`,
    true,
    "news"
  );
}

const PressReleaseDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const [pageContent, pressReleaseContent] = await Promise.all([
    fetchData(`${baseUrl}/getmasterdetails?master_name=cms&id=17`),
    fetchData(`${baseUrl}/getmasterdetails?master_name=news&slug=${id}`),
  ]);

  const {
    page_top_banner,
    // press_release,
    sponsors,
    supporting_associations,
    media_partners,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <DetailsSectionone content={pressReleaseContent?.data} />
      {/* <RecentlyViewed data={press_release?.data} /> */}
      <div className="section-wrapper section-wrapper">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default PressReleaseDetailPage;
