import VideoGallery from "@/components/Gallery/VideoGallery";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(29, "video-gallery", false);
}

const VideoGalleryPage = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=29`
  );

  const {
    page_top_banner,
    video_gallery,
    sponsors,
    supporting_associations,
    media_partners,
  } = pageContent?.data?.section_list;
  return (
    <>
      {" "}
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <VideoGallery data={video_gallery?.data} />
      <div className="sponsor-wrapper section-wrapper">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default VideoGalleryPage;
