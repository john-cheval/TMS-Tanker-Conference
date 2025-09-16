// import SharedTopSection from "@/components/shared/Sections/TopSection";
// import Sponsors from "@/components/shared/Sponsors";
// import BecomeASpeakerSectionThree from "@/components/Speakers/BecomeASpeaker/BecomeASpeakerSection3";
// import { baseUrl } from "@/lib/api";
// import { fetchData } from "@/lib/fetchData";
// import generateMetadDataDetails from "@/lib/generateMetaData";
// import React from "react";

// export async function generateMetadata() {
//   return await generateMetadDataDetails(82, "become-a-speaker", false);
// }

// const BecomeASpeaker = async () => {
//   const pageContent = await fetchData(
//     `${baseUrl}/getmasterdetails?master_name=cms&id=82`
//   );

//   const generalSettings = pageContent?.gernalsettings;
//   const conferenceData =
//     pageContent?.gernalsettings?.current_year_coneference[0];
//   const { AWARD_YEAR } = generalSettings?.general_settings;
//   const { page_top_banner, become_a_speaker_page } =
//     pageContent?.data?.section_list;
//   return (
//     <>
//       <SharedTopSection
//         {...page_top_banner}
//         title={pageContent?.data?.name}
//         awardTitle={AWARD_YEAR?.title}
//         conferenceTitle={conferenceData?.Coneference_title}
//         conferenceLocation={conferenceData.location}
//         conferenceDate={conferenceData.end_date}
//       />
//       <section className="section-wrapper">
//         <div className="border-b border-b-light-grey-1 py-5 md:py-8 lg:py-10 xl:py-12 2xl:py-14 space-y-3 md:space-y-4 lg:space-y-5 ">
//           <h3 className="main-heading text-tms-purple font-bold leading-3 lg:leading-2 xl:leading-1 text-left md:text-center">
//             {become_a_speaker_page?.heading}
//           </h3>
//           <div
//             className="description text-dark-alter leading-5 space-y-4 "
//             dangerouslySetInnerHTML={{
//               __html: become_a_speaker_page?.description,
//             }}
//           />
//         </div>
//       </section>

//       <BecomeASpeakerSectionThree {...become_a_speaker_page} />

//       <div className="section-wrapper pb-12 md:pb-20 space-y-5">
//         <Sponsors
//           data={pageContent?.data?.section_list?.sponsors}
//           isSponsor={true}
//         />
//         <Sponsors
//           data={pageContent?.data?.section_list?.supporting_associations}
//         />
//         <Sponsors data={pageContent?.data?.section_list?.media_partners} />
//       </div>
//     </>
//   );
// };

// export default BecomeASpeaker;
