// import BecomeSponsorForm from "@/components/Forms/BecomeSponsor";
// import HomeSectionTwo from "@/components/Home/Section2";
// import SharedTopSection from "@/components/shared/Sections/TopSection";
// import Sponsors from "@/components/shared/Sponsors";
// import SponsorBenifits from "@/components/Sponsors/SponsorBenifits";
// import { baseUrl } from "@/lib/api";
// import { fetchData } from "@/lib/fetchData";
// import generateMetadDataDetails from "@/lib/generateMetaData";
// import React from "react";

// export async function generateMetadata() {
//   return await generateMetadDataDetails(71, "why-sponsor", false);
// }

// const WhySponsor = async () => {
//   const pageContent = await fetchData(
//     `${baseUrl}/getmasterdetails?master_name=cms&id=71`
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
//       <HomeSectionTwo
//         {...pageContent?.data?.section_list?.about_the_conference}
//       />
//       <SponsorBenifits
//         {...pageContent?.data?.section_list?.key_sponsorship_benefits}
//       />
//       <BecomeSponsorForm
//         {...pageContent?.data?.section_list?.become_a_sponsor_form}
//         whySponsorPage={true}
//       />

//       <div className="section-wrapper pb-16 md:pb-20">
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

// export default WhySponsor;
