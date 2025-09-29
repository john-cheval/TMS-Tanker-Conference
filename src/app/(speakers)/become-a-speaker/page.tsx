import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import BecomeASpeakerSectionThree from "@/components/Speakers/BecomeASpeaker/BecomeASpeakerSection3";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(82, "become-a-speaker", false);
}

const BecomeASpeaker = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=82`
  );

  const generalSettings = pageContent?.gernalsettings;
  const { Enquery_emails_nature_of_company_list } =
    generalSettings?.general_settings;
  const {
    page_top_banner,
    become_a_speaker_page,
    sponsors,
    supporting_associations,
    media_partners,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <section className="section-wrapper">
        <div className="border-b border-b-light-grey-1 py-5 md:py-8 lg:py-10  space-y-3 md:space-y-4 ">
          <h3 className="main-heading-2 gradient-text-3 w-fit font-bold leading-3 lg:leading-2 xl:leading-1 text-center md:text-left">
            {become_a_speaker_page?.heading}
          </h3>
          <div
            className="description text-dark-alter leading-5 space-y-4 text-center md:text-left "
            dangerouslySetInnerHTML={{
              __html: become_a_speaker_page?.description,
            }}
          />
        </div>
      </section>

      <BecomeASpeakerSectionThree
        {...become_a_speaker_page}
        companyList={Enquery_emails_nature_of_company_list}
      />

      <div className="section-wrapper sponsor-wrapper">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default BecomeASpeaker;
