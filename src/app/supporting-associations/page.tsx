// import BecomeSponsorForm from "@/components/Forms/BecomeSponsor";
// import SharedTopSection from "@/components/shared/Sections/TopSection";
// import SponsorsList from "@/components/Sponsors/SponsorsList";
// import { baseUrl } from "@/lib/api";
// import { fetchData } from "@/lib/fetchData";
// import generateMetadDataDetails from "@/lib/generateMetaData";
// import React from "react";

// export async function generateMetadata() {
//   return await generateMetadDataDetails(74, "supporting-associations", false);
// }

// const SupportingAssosiations = async () => {
//   const pageContent = await fetchData(
//     `${baseUrl}/getmasterdetails?master_name=cms&id=74`
//   );
//   const generalSettings = pageContent?.gernalsettings;
//   const conferenceData =
//     pageContent?.gernalsettings?.current_year_coneference[0];
//   const { AWARD_YEAR } = generalSettings?.general_settings;
//   const SponsorsData =
//     pageContent?.data?.section_list?.supporting_associations?.data;
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
//       <SponsorsList sponsors={SponsorsData} isButton={false} />

//       <div className="pb-5 md:pb-10">
//         <BecomeSponsorForm
//           {...pageContent?.data?.section_list?.become_a_sponsor_form}
//           isPartnerForm={true}
//         />
//       </div>
//     </>
//   );
// };

// export default SupportingAssosiations;
