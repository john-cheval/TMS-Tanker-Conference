import RsvpSectionOne from "@/components/Rsvp/RsvpSectionOne";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return await generateMetadDataDetails(86, "rsvp", false);
}

const RsvpPage = async ({ searchParams}:any) => {
  // const pageContent = await fetchData(
  //   `${baseUrl}/getmasterdetails?master_name=cms&id=86`
  // );

  const datas = await searchParams;

  const [rsvpFormData,pageContent] = await Promise.all([
    fetchData(`${baseUrl}/getmasterdetails?master_name=rsvpuser&id=${datas.id}`,{ cache: "no-store" }),
    fetchData(`${baseUrl}/getmasterdetails?master_name=cms&id=86`,{ cache: "no-store" })
  ]);

  const {
    page_top_banner,
    sponsors,
    supporting_associations,
    media_partners,
    rsvp_form,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <RsvpSectionOne
        title={rsvp_form?.heading}
        small__title={rsvp_form?.small_title}
        form_description={rsvp_form?.form_description}
        rsvpFormData={rsvpFormData.data}
      />
      <div className="section-wrapper section-wrapper">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default RsvpPage;
