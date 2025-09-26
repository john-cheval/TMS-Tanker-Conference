import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import WhyAttendSectionOne from "@/components/why-attend/Section1";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import Link from "next/link";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(77, "why-attend", false);
}

const WhyAttend = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=77`
  );
  const {
    page_top_banner,
    sponsors,
    supporting_associations,
    media_partners,
    why_attend_page,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <div
        className="section-wrapper pt-8 md:pt-10 lg:pt-12  xl:pt-14 description font-normal text-dark-alter pb-6 md:pb-0 text-center"
        dangerouslySetInnerHTML={{
          __html: why_attend_page?.description,
        }}
      />
      <WhyAttendSectionOne data={why_attend_page?.why_attend_list} />

      <section className="section-wrapper mt-4 sm:mt-5 md:mt-6 lg:mt-8 mb-5 md:mb-8 xl:mb-12">
        <div className="  bg-[#f0f0f0] px-5 pt-5 md:pt-7 lg:pt-9 xl:pt-12 pb-8 w-full flex flex-col items-center justify-center">
          <h4 className="gradient-text-3 main-heading leading-3  md:leading-[40px]  lg:leading-main font-bold">
            Next Steps
          </h4>
          <p className="text-black description text-center mt-1">
            Sign up now and attend this year’s high profile and
            thought-provoking The Maritime Standard Tanker Conference!
          </p>
          <Link
            href={"#"}
            className="buttonGradient-3 px-6 md:px-8 py-3 md:py-4 text-white text-center font-medium block mt-3 md:mt-5 hover:scale-[1.02] transition-all duration-300 text-sm md:text-base w-fit"
          >
            Sign Up Now.
          </Link>
        </div>
      </section>
      {sponsors && (
        <div className="section-wrapper pb-8 md:pb-10 lg:pb-12 xl:pb-16">
          <div className="space-y-9">
            <Sponsors data={sponsors} isSponsor={true} />
            <Sponsors data={supporting_associations} />
            <Sponsors data={media_partners} />{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default WhyAttend;
