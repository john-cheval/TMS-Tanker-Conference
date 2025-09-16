// import SharedTopSection from "@/components/shared/Sections/TopSection";
// import Sponsors from "@/components/shared/Sponsors";
// import OurSpeakersSectionOne from "@/components/Speakers/OurSpeakersSection1";
// import { baseUrl } from "@/lib/api";
// import { fetchData } from "@/lib/fetchData";
// import generateMetadDataDetails from "@/lib/generateMetaData";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export async function generateMetadata() {
//   return await generateMetadDataDetails(81, "our-speakers", false);
// }

// const OurSpeakers = async () => {
//   const pageContent = await fetchData(
//     `${baseUrl}/getmasterdetails?master_name=cms&id=81`
//   );

//   const generalSettings = pageContent?.gernalsettings;
//   const conferenceData =
//     pageContent?.gernalsettings?.current_year_coneference[0];
//   const { AWARD_YEAR } = generalSettings?.general_settings;
//   const {
//     page_top_banner,
//     our_speakers,
//     banner_with_heading,
//     sponsors,
//     supporting_associations,
//     media_partners,
//   } = pageContent?.data?.section_list;

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
//       <OurSpeakersSectionOne {...our_speakers} />

//       <div className="grid grid-cols-12 section-wrapper ">
//         <div className="col-span-12 md:col-span-6 lg:col-span-5 md:rounded-l-2xl  relative overflow-hidden rounded-tr-2xl md:rounded-tr-none rounded-bl-none md:rounded-bl-2xl flex">
//           <Image
//             src={banner_with_heading?.banner_image}
//             // src={imge}
//             alt={banner_with_heading?.heading}
//             width={500}
//             height={300}
//             className="w-full h-auto object-cover flex-grow-1"
//           />
//           <div className="speaker-cta-gradient absolute md:right-0 bottom-0 z-50 w-full h-full hidden md:block" />
//           <div
//             className="absolute  bottom-0 z-50 w-full h-full  md:hidden"
//             style={{
//               background:
//                 "linear-gradient(180deg, rgba(0, 120, 187, 0) 0%, #0078bb 100%)",
//             }}
//           />
//         </div>
//         <div
//           className="col-span-12 md:col-span-6 lg:col-span-7 speaker-cta-gradient-3 md:speaker-cta-gradient-2  md:rounded-r-2xl overflow-hidden relative
//         z-50 p-6 lg:py-8 lg:px-10 xl:px-14 flex flex-col justify-center rounded-b-2xl md:rounded-bl-none"
//         >
//           <h4 className="main-heading-2 !text-white">
//             {banner_with_heading?.heading}
//           </h4>
//           <Link
//             className="rounded-lg bg-white text-tms-purple py-3 px-4 w-fit text-sm sm:text-base md:text-lg font-bold leading-5 mt-3 md:mt-4"
//             href={banner_with_heading?.button_link}
//           >
//             {banner_with_heading?.button_text}
//           </Link>
//         </div>
//       </div>
//       <div className="section-wrapper pb-16 md:pb-20  space-y-5 pt-7 md:pt-8 lg:pt-14 xl:pt-16 2xl:pt-20">
//         <Sponsors data={sponsors} isSponsor={true} />
//         <Sponsors data={supporting_associations} />
//         <Sponsors data={media_partners} />
//       </div>
//     </>
//   );
// };

// export default OurSpeakers;
