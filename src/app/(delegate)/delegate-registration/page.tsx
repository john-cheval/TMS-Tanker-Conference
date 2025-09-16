// import PricingPlans from "@/components/DelegateRegistration/Plans";
// import SharedTopSection from "@/components/shared/Sections/TopSection";
// import { baseUrl } from "@/lib/api";
// import { fetchData } from "@/lib/fetchData";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { MdPhone } from "react-icons/md";
// import { IoMdMail } from "react-icons/io";
// import Sponsors from "@/components/shared/Sponsors";
// import generateMetadDataDetails from "@/lib/generateMetaData";

// export async function generateMetadata() {
//   return await generateMetadDataDetails(79, "delegate-registration", false);
// }

// const DelegateRegistration = async () => {
//   const pageContent = await fetchData(
//     `${baseUrl}/getmasterdetails?master_name=cms&id=79`
//   );
//   const generalSettings = pageContent?.gernalsettings;
//   const conferenceData =
//     pageContent?.gernalsettings?.current_year_coneference[0];
//   const { AWARD_YEAR } = generalSettings?.general_settings;
//   const { delegate_registration, pricing_plans } =
//     pageContent?.data?.section_list;
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

//       <div className="section-wrapper pt-6 md:pt-9 pb-6 lg:pb-11">
//         <h2 className="main-heading-2 text-left  md:text-center w-fit mx-0 md:mx-auto mb-3 md:mb-4 gradient-text ">
//           {delegate_registration?.heading}
//         </h2>
//         <p className="description text-dark-alter text-left  md:text-center">
//           {delegate_registration?.small_description}
//         </p>
//       </div>

//       <section className="grid grid-cols-1 md:grid-cols-2 bg-[#0C1E23]">
//         <div>
//           <Image
//             src={delegate_registration?.image}
//             alt={delegate_registration?.image_alt_tag}
//             width={700}
//             height={900}
//             className="w-full h-full object-cover "
//           />
//         </div>

//         <div className=" px-5 md:px-8 py-7 md:py-12 lg:p-16 xl:p-20 flex flex-col justify-center">
//           <div
//             className="delegate-description"
//             dangerouslySetInnerHTML={{
//               __html: delegate_registration?.description,
//             }}
//           />

//           <div>
//             <Link
//               className="text-sm md:text-base  leading-5 flex items-center gap-x-2 text-white mb-2 md:mb-3"
//               href={`phone:${delegate_registration?.phone_number}`}
//             >
//               <MdPhone color="#0078BB" /> {delegate_registration?.phone_number}
//             </Link>

//             <Link
//               className="text-sm md:text-base  leading-5 flex items-center gap-x-2 text-white"
//               href={`mailto:${delegate_registration?.email_address}`}
//             >
//               <IoMdMail color="#0078BB" />{" "}
//               {delegate_registration?.email_address}
//             </Link>
//           </div>
//         </div>
//       </section>

//       <PricingPlans {...pricing_plans} />
//       <div className="section-wrapper pb-16 md:pb-20 pt-7 md:pt-8 lg:pt-14 xl:pt-16 2xl:pt-20 space-y-5">
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

// export default DelegateRegistration;
