"use client";
import VideoCard from "@/components/shared/ui/Cards/VideoCard";
import { getYoutubeId } from "@/utils/getYouyubeId";
import React, { useState } from "react";
import GalleryAccordion from "../GalleryAccordion";

interface videoGalleryType {
  id: number;
  title: string;
  link: string;
}
interface GalleryType {
  id: number;
  name: string;
  year: string;
  video_gallery: videoGalleryType[];
}

type Props = {
  data: GalleryType[];
};

const VideoGallery = ({ data }: Props) => {
  const [selectedConferece, setSelectedConference] = useState(data[0]?.name);
  const filteredAlbum = data?.find((item) => item?.name === selectedConferece);
  return (
    <section className="section-wrapper pt-6 md:pt-8 lg:pt-10 xl:pt-14 pb-8 md:pb-12 lg:pb-16 xl:pb-20">
      <div className="hidden md:block">
        <div className="flex gap-x-2.5 md:gap-x-3 lg:justify-center  overflow-x-auto whitespace-nowrap no-scrollbar w-full flex-nowrap border-b pb-5 gradient-border-2 ">
          {data &&
            data?.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setSelectedConference(item?.name)}
                  className={`
                   leading-5 text-center
                  font-medium 
                  overflow-hidden transition-all duration-500 flex-shrink-0 ${
                    selectedConferece === item?.name
                      ? "font-semibold text-xl gradient-text-3"
                      : "text-[#6f6e6e] text-xl font-medium"
                  }
                `}
                >
                  {item?.name}
                </button>
              );
            })}
        </div>
        <div className="mt-6 md:mt-8 lg:mt-9 grid grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-2.5 md:gap-3 lg:gap-4">
          {Array.isArray(filteredAlbum?.video_gallery) &&
          filteredAlbum.video_gallery.length > 0 ? (
            filteredAlbum?.video_gallery?.map((item, index) => {
              const youtubeId = getYoutubeId(item.link);
              return (
                <VideoCard
                  key={index + 1}
                  title={item.title}
                  link={item.link}
                  youtube_id={youtubeId ?? ""}
                  // onPlay={() => setActiveVideo(index)}
                  // isActive={activeVideo === index}
                />
              );
            })
          ) : (
            <p className="text-lg sm:text-xl md:text-2xl col-span-12 font-medium text-center">
              There is No Video in this Conference Year
            </p>
          )}
        </div>
      </div>

      <div className="  md:hidden">
        <GalleryAccordion galleryData={data} />
      </div>
    </section>
  );
};

export default VideoGallery;
