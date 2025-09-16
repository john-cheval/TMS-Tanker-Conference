import DetailsSectionone from "@/components/PreRelease/DetailsSectionone";
import RecentlyViewed from "@/components/PreRelease/RecentlyViewed";
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
  return await generateMetadDataDetails(id, `blog/${id}`, true, "blog");
}
const BogsInnerPage = async ({ params }: Props) => {
  const { id } = await params;
  const [pageContent, blogContent] = await Promise.all([
    fetchData(`${baseUrl}/getmasterdetails?master_name=cms&id=68`),
    fetchData(`${baseUrl}/getmasterdetails?master_name=blog&slug=${id}`),
  ]);
  const generalSettings = pageContent?.gernalsettings;
  const conferenceData =
    pageContent?.gernalsettings?.current_year_coneference[0];
  const { AWARD_YEAR } = generalSettings?.general_settings;

  const {
    page_top_banner,
    press_release,
    sponsors,
    supporting_associations,
    media_partners,
  } = pageContent?.data?.section_list;

  return (
    <>
      <SharedTopSection
        {...page_top_banner}
        title={pageContent?.data?.name}
        awardTitle={AWARD_YEAR?.title}
        conferenceTitle={conferenceData?.Coneference_title}
        conferenceLocation={conferenceData.location}
        conferenceDate={conferenceData.end_date}
      />
      <DetailsSectionone isBlog={true} content={blogContent?.data} />
      {blogContent?.data?.length > 0 && (
        <RecentlyViewed data={press_release?.data} />
      )}
      <div className="section-wrapper pb-16 md:pb-20  space-y-5">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default BogsInnerPage;
