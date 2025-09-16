// import SharedTopSection from "@/components/shared/Sections/TopSection";
// import Sponsors from "@/components/shared/Sponsors";
// import WhoShouldAttendSectionOne from "@/components/WhoShouldAttend/Section1";
// import WhyAttendSection from "@/components/WhoShouldAttend/Section2/WhyAttendSection";
// import { baseUrl } from "@/lib/api";
// import { fetchData } from "@/lib/fetchData";
// import generateMetadDataDetails from "@/lib/generateMetaData";
// import React from "react";

// export async function generateMetadata() {
//   return await generateMetadDataDetails(78, "who-should-attend", false);
// }

// const WhoShouldAttend = async () => {
//   const pageContent = await fetchData(
//     `${baseUrl}/getmasterdetails?master_name=cms&id=78`
//   );
//   const generalSettings = pageContent?.gernalsettings;
//   const conferenceData =
//     pageContent?.gernalsettings?.current_year_coneference[0];
//   const { AWARD_YEAR } = generalSettings?.general_settings;
//   return (
//     <>
//       <SharedTopSection
//         {...pageContent?.data?.section_list?.page_top_banner}
//         title={pageContent?.data?.name}
//         awardTitle={AWARD_YEAR?.title}
//         conferenceTitle={conferenceData?.Coneference_title}
//         conferenceLocation={conferenceData.location}
//         conferenceDate={conferenceData.end_date}
//       />
//       <WhoShouldAttendSectionOne
//         {...pageContent?.data?.section_list?.who_should_attend}
//       />
//       <WhyAttendSection {...pageContent?.data?.section_list?.why_attend} />
//       <div className="section-wrapper pb-12 md:pb-20 space-y-5 pt-6 md:pt-10 lg:pt-16 2xl:pt-20">
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

// export default WhoShouldAttend;
