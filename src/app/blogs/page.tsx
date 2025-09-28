import PreReleaseCardResponsive from "@/components/PreRelease/PreReleseCardResponsive";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import { truncateHtmlWords } from "@/utils/truncateByWords";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(68, "blogs", false);
}

const Blogs = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=68`
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
    blog_list,
  } = pageContent?.data?.section_list;
  const clonedBlogList = Array.from({ length: 6 }, () => blog_list.data).flat();
  return (
    <>
      <SharedTopSection
        {...page_top_banner}
        title={pageContent?.data?.name}
        awardTitle={AWARD_YEAR?.title}
        conferenceTitle={conferenceData?.Coneference_title}
        conferenceLocation={conferenceData.location}
        conferenceDate={conferenceData.end_date}
      />

      <section className="section-wrapper pt-5 md:pt-8 lg:pt-14 pb-3 md:pb-5  lg:pb-10">
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-0 md:gap-x-3  lg:gap-x-5">
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            {blog_list?.data?.slice(0, 1)?.map((item: any, index: number) => {
              return (
                <div key={index + 1}>
                  <div className="relative">
                    <Image
                      src={item?.image_url}
                      alt={item?.title}
                      width={600}
                      height={300}
                      className=" overflow-hidden w-full h-auto object-cover"
                    />
                    <p
                      className="py-1 md:py-2 text-white text-sm sm:text-base font-medium leading-3 pl-3 pr-5 md:pr-7 w-fit absolute bottom-0 md:bottom-auto md:top-0
                       left-0 md:rounded-tr-none md:rounded-br-[40px]  rounded-tr-[40px]"
                      style={{
                        background:
                          " linear-gradient(93deg, #38C7FF 4.01%, #008F57 82.77%)",
                      }}
                    >
                      {dayjs(item?.date).format("MMMM YYYY")}
                    </p>
                  </div>

                  <div className="md:-mt-5  space-y-2 md:space-y-3 bg-[#f5f5f5] pt-5 px-5 pb-5 md:p-8">
                    <h3 className="text-dark-alter text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left leading-3 lg:leading-2">
                      {item?.title}
                    </h3>

                    <div
                      className="description text-dark-alter leading-5 text-center md:text-left"
                      dangerouslySetInnerHTML={{
                        __html: truncateHtmlWords(item?.description, 50),
                      }}
                    />
                    <Link
                      href={`/blogs/${item?.slug}`}
                      className="text-[#008ac0] text-sm md:text-base leading-3 underline hover:no-underline flex justify-center md:justify-start"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-4 ">
            {blog_list?.data?.slice(0, 1)?.map((item: any, index: number) => {
              return (
                <div key={index + 1}>
                  <div className="relative">
                    <Image
                      src={item?.image_url}
                      alt={item?.title}
                      width={600}
                      height={300}
                      className=" overflow-hidden w-full h-auto object-cover"
                    />
                    <p
                      className="py-1 md:py-2 text-white text-sm sm:text-base font-medium leading-3 pl-3 pr-5 md:pr-7 w-fit absolute bottom-0 md:bottom-auto md:top-0
                       left-0 md:rounded-tr-none md:rounded-br-[40px]  rounded-tr-[40px]"
                      style={{
                        background:
                          " linear-gradient(93deg, #38C7FF 4.01%, #008F57 82.77%)",
                      }}
                    >
                      {dayjs(item?.date).format("MMMM YYYY")}
                    </p>
                  </div>

                  <div className="md:-mt-5  space-y-2 md:space-y-3 bg-[#f5f5f5] pt-5 px-5 pb-5 md:p-8">
                    <h3 className="text-dark-alter text-center md:text-left text-xl sm:text-2xl  leading-3">
                      {item?.title}
                    </h3>

                    <div
                      className="description text-dark-alter text-center md:text-left leading-5"
                      dangerouslySetInnerHTML={{
                        __html: truncateHtmlWords(item?.description, 30),
                      }}
                    />
                    <Link
                      href={`/blogs/${item?.slug}`}
                      className="text-[#008ac0] text-sm md:text-base leading-3 underline hover:no-underline flex justify-center md:justify-start"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-wrapper grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
        {clonedBlogList?.map((item: any, index: number) => {
          return (
            <div key={index + 1}>
              <div className="relative">
                <Image
                  src={item?.image_url}
                  alt={item?.title}
                  width={600}
                  height={300}
                  className=" overflow-hidden w-full h-auto object-cover"
                />
                <p
                  className="py-1 md:py-2 text-white text-sm sm:text-base font-medium leading-3 pl-3 pr-5 md:pr-7 w-fit absolute bottom-0 md:bottom-auto md:top-0
                       left-0 md:rounded-tr-none md:rounded-br-[40px]  rounded-tr-[40px]"
                  style={{
                    background:
                      " linear-gradient(93deg, #38C7FF 4.01%, #008F57 82.77%)",
                  }}
                >
                  {dayjs(item?.date).format("MMMM YYYY")}
                </p>
              </div>

              <div className="md:-mt-5  space-y-2 md:space-y-3 bg-[#f5f5f5] pt-5 px-5 pb-5 md:p-8">
                <h3 className="text-dark-alter text-center md:text-left text-xl sm:text-2xl  leading-3">
                  {item?.title}
                </h3>

                <div
                  className="description text-dark-alter text-center md:text-left leading-5"
                  dangerouslySetInnerHTML={{
                    __html: truncateHtmlWords(item?.description, 30),
                  }}
                />
                <Link
                  href={`/blogs/${item?.slug}`}
                  className="text-[#008ac0] text-sm md:text-base leading-3 underline hover:no-underline flex justify-center md:justify-start"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      <div className="section-wrapper pb-16 md:pb-20  space-y-9 pt-6 md:pt-8 lg:pt-14  ">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default Blogs;
