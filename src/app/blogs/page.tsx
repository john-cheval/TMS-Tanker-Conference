// import PreReleaseCardResponsive from "@/components/PreRelease/PreReleseCardResponsive";
// import SharedTopSection from "@/components/shared/Sections/TopSection";
// import Sponsors from "@/components/shared/Sponsors";
// import { baseUrl } from "@/lib/api";
// import { fetchData } from "@/lib/fetchData";
// import generateMetadDataDetails from "@/lib/generateMetaData";
// import dayjs from "dayjs";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export async function generateMetadata() {
//   return await generateMetadDataDetails(68, "blogs", false);
// }

// const Blogs = async () => {
//   const pageContent = await fetchData(
//     `${baseUrl}/getmasterdetails?master_name=cms&id=68`
//   );

//   const generalSettings = pageContent?.gernalsettings;
//   const conferenceData =
//     pageContent?.gernalsettings?.current_year_coneference[0];
//   const { AWARD_YEAR } = generalSettings?.general_settings;
//   const {
//     page_top_banner,
//     sponsors,
//     supporting_associations,
//     media_partners,
//     blog_list,
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

//       <section className="section-wrapper pt-5 md:pt-8 lg:pt-14  xl:pt-16">
//         <div
//           className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0
//          md:gap-x-4 lg:gap-x-6"
//         >
//           {blog_list?.data?.slice(0, 2)?.map((item: any, index: number) => {
//             return (
//               <div key={index + 1}>
//                 <Image
//                   src={item?.image_url}
//                   alt={item?.title}
//                   width={600}
//                   height={300}
//                   className="responsive-radius overflow-hidden w-full h-auto object-cover"
//                 />
//                 <div className="mt-3 md:mt-7  space-y-2 md:space-y-3">
//                   {" "}
//                   <h3 className="main-heading-2 !text-dark-alter">
//                     {item?.title}
//                   </h3>
//                   <p className="description text-tms-purple font-medium !leading-3">
//                     {dayjs(item.date).format("MMMM YYYY")}
//                   </p>
//                   <div
//                     className="description text-dark-alter space-y-4"
//                     dangerouslySetInnerHTML={{ __html: item?.description }}
//                   />
//                   <Link
//                     href={`/blogs/${item?.slug}`}
//                     className="description text-dark-alter !leading-3 hover:underline hover:text-tms-purple transition-all duration-300"
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {blog_list?.data?.length > 2 && (
//         <section className=" section-wrapper grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 lg:mt-8 xl:mt-10  hidden sm:grid">
//           {blog_list?.data?.slice(2)?.map((item: any, index: number) => {
//             return (
//               <div key={index + 1} className="space-y-4 lg:space-y-6">
//                 <Image
//                   src={item?.image_url}
//                   alt={item?.title}
//                   width={700}
//                   height={350}
//                   className="responsive-radius overflow-hidden w-full h-auto object-cover  "
//                 />

//                 <div>
//                   <p className="description text-tms-purple font-medium !leading-3">
//                     {dayjs(item.date).format("MMMM YYYY")}
//                   </p>
//                   <h6 className="text-dark-alter text-lg lg:text-xl lg:leading-3  font-normal mb-2">
//                     {" "}
//                     {item.title}
//                   </h6>

//                   <Link
//                     href={`press-release/${item.slug}`}
//                     className="description text-dark-alter !leading-3 hover:underline hover:text-tms-purple transition-all duration-300"
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </section>
//       )}

//       <div className="sm:hidden section-wrapper mt-10">
//         <PreReleaseCardResponsive detail={blog_list?.data} />
//       </div>
//       <div className="section-wrapper pb-16 md:pb-20  space-y-5 pt-6 md:pt-8 lg:pt-14  ">
//         <Sponsors data={sponsors} isSponsor={true} />
//         <Sponsors data={supporting_associations} />
//         <Sponsors data={media_partners} />
//       </div>
//     </>
//   );
// };

// export default Blogs;
