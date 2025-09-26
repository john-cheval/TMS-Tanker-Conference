import PageGallery from "@/components/Gallery/PageGallery";
import SharedTopSection from "@/components/shared/Sections/TopSection";
import Sponsors from "@/components/shared/Sponsors";
import { baseUrl } from "@/lib/api";
import { fetchData } from "@/lib/fetchData";
import generateMetadDataDetails from "@/lib/generateMetaData";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return await generateMetadDataDetails(
    Number(id),
    `photo-gallery/${id}`,
    false,
    "photogallery"
  );
}

const ConfernceGalleryPhotos = async ({ params }: Props) => {
  const { id } = await params;
  const [pageContent, pageGallery] = await Promise.all([
    fetchData(`${baseUrl}/getmasterdetails?master_name=cms&id=21`),
    fetchData(`${baseUrl}/getmasterdetails?master_name=photogallery&id=${id}`),
  ]);

  const { page_top_banner, sponsors, supporting_associations, media_partners } =
    pageContent?.data?.section_list;

  return (
    <>
      {" "}
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      {pageGallery?.data?.length > 0 ? (
        <PageGallery galleryData={pageGallery?.data} />
      ) : (
        <p className="text-lg sm:text-xl md:text-2xl col-span-12 font-medium text-center my-10 md:my-14">
          There is No Albums in this Conference Year
        </p>
      )}
      <div className="section-wrapper pb-16 md:pb-20  space-y-5">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default ConfernceGalleryPhotos;
