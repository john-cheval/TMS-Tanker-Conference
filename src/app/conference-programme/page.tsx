import ConferenceProgrammeSectionOne from "@/components/ConferenceProgramme/ConferenceProgrammeSectionOne";
import ConferenceProgrammeSectionTwo from "@/components/ConferenceProgramme/ConferenceProgrammeSectionTwo";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(84, "conference-programme", false);
}

const ConferenceProgramme = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=84`
  );

  const generalSettings = pageContent?.gernalsettings;
  const conferenceData =
    pageContent?.gernalsettings?.current_year_coneference[0];
  const { AWARD_YEAR } = generalSettings?.general_settings;
  const {
    page_top_banner,
    sponsors,
    supporting_associations,
    media_partners,
    event_overview,
  } = pageContent?.data?.section_list;
  return (
    <>
      {" "}
      <SharedTopSection
        {...page_top_banner}
        title={pageContent?.data?.name}
        awardTitle={AWARD_YEAR?.title}
        conferenceTitle={conferenceData?.Coneference_title}
        conferenceLocation={conferenceData.location}
        conferenceDate={conferenceData.end_date}
      />
      <ConferenceProgrammeSectionOne {...event_overview} />
      <ConferenceProgrammeSectionTwo content={event_overview?.data} />
      <div className="section-wrapper pb-16 md:pb-20  space-y-5   ">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default ConferenceProgramme;
