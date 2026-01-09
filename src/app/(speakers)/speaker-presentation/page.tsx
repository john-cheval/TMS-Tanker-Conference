import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import OurSpeakersSectionOne from "@/components/Speakers/OurSpeakersSection1";
import SpeakerPresentation from "@/components/Speakers/SpeakerPresentation";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

// export async function generateMetadata() {
//   return await generateMetadDataDetails(91, "speaker-presentation", false);
// }

const SpeakerPresentationPage = async () => {
  // const pageContent = await fetchData(
  //   `${baseUrl}/getmasterdetails?master_name=cms&id=91`
  // );

  // const {
  //   page_top_banner,
  //   speaker_presentation,
  //   sponsors,
  //   supporting_associations,
  //   media_partners,
  // } = pageContent?.data?.section_list;

  return (
    <>
      {/* <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <SpeakerPresentation {...speaker_presentation} /> 

      <div className="section-wrapper sponsor-wrapper ">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div> */}
      <h1>Speaker Presentation</h1>
    </>
  );
};

export default SpeakerPresentationPage;
