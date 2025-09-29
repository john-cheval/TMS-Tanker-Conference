import GalleryAlbums from "@/components/Gallery/GalleryAlbums";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadDataDetails(21, "photo-gallery", false);
}

const PhotoGallery = async () => {
  const pageContent = await fetchData(
    `${baseUrl}/getmasterdetails?master_name=cms&id=21`
  );

  const {
    page_top_banner,
    photo_gallery,
    sponsors,
    supporting_associations,
    media_partners,
  } = pageContent?.data?.section_list;
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <GalleryAlbums data={photo_gallery?.data} />
      <div className="section-wrapper sponsor-wrapper">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default PhotoGallery;
