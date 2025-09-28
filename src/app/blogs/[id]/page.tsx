import DetailsSectionone from "@/components/PreRelease/DetailsSectionone";
import RecentlyViewed from "@/components/PreRelease/RecentlyViewed";
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
  return await generateMetadDataDetails(id, `blog/${id}`, true, "blog");
}
const BogsInnerPage = async ({ params }: Props) => {
  const { id } = await params;
  const [pageContent, blogContent] = await Promise.all([
    fetchData(`${baseUrl}/getmasterdetails?master_name=cms&id=68`),
    fetchData(`${baseUrl}/getmasterdetails?master_name=blog&slug=${id}`),
  ]);

  const {
    page_top_banner,
    blog_list,
    sponsors,
    supporting_associations,
    media_partners,
  } = pageContent?.data?.section_list;
  const clonedBlogList = Array.from({ length: 6 }, () => blog_list.data).flat();
  return (
    <>
      <SharedTopSection {...page_top_banner} title={pageContent?.data?.name} />
      <DetailsSectionone isBlog={true} content={blogContent?.data} />
      {blog_list?.data?.length > 0 && <RecentlyViewed data={clonedBlogList} />}
      <div className="section-wrapper pb-16 md:pb-20  space-y-9">
        <Sponsors data={sponsors} isSponsor={true} />
        <Sponsors data={supporting_associations} />
        <Sponsors data={media_partners} />
      </div>
    </>
  );
};

export default BogsInnerPage;
