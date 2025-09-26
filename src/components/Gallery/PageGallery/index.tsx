import GalleryCard from "@/components/shared/ui/Cards/GalleryCard";
import React from "react";
type Props = {
  galleryData: any;
};
const PageGallery = ({ galleryData }: Props) => {
  return (
    <section className="section-wrapper pt-6 md:pt-8 lg:pt-10 xl:pt-14 2xl:pt-16 pb-8 md:pb-12 lg:pb-16 xl:pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-2.5 md:gap-3 lg:gap-4">
        {galleryData?.map((item: any, index: number) => {
          return (
            <GalleryCard
              key={index + 1}
              {...item}
              index={index}
              gallery={galleryData}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PageGallery;
