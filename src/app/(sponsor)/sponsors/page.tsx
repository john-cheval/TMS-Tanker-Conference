// import SharedTopSection from "@/components/shared/Sections/TopSection";
// import SponsorsList from "@/components/Sponsors/SponsorsList";
// import { baseUrl } from "@/lib/api";
// import { fetchData } from "@/lib/fetchData";
// import generateMetadDataDetails from "@/lib/generateMetaData";
// import React from "react";

// export async function generateMetadata() {
//   return await generateMetadDataDetails(15, "sponsors", false);
// }

// const Sponsors = async () => {
//   const sponsorPageContent = await fetchData(
//     `${baseUrl}/getmasterdetails?master_name=cms&id=15`
//   );
//   const generalSettings = sponsorPageContent?.gernalsettings;
//   const conferenceData =
//     sponsorPageContent?.gernalsettings?.current_year_coneference[0];
//   const { AWARD_YEAR } = generalSettings?.general_settings;
//   const SponsorsData = sponsorPageContent?.data?.section_list?.sponsors?.data;
//   return (
//     <>
//       <SharedTopSection
//         {...sponsorPageContent?.data?.section_list?.page_top_banner}
//         title={sponsorPageContent?.data?.name}
//         awardTitle={AWARD_YEAR?.title}
//         conferenceTitle={conferenceData?.Coneference_title}
//         conferenceLocation={conferenceData.location}
//         conferenceDate={conferenceData.end_date}
//       />
//       <SponsorsList sponsors={SponsorsData} />
//     </>
//   );
// };

// export default Sponsors;
