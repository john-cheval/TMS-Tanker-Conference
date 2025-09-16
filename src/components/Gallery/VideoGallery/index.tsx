"use client";
import VideoCard from "@/components/shared/ui/Cards/VideoCard";
import { getYoutubeId } from "@/utils/getYouyubeId";
import React, { useState } from "react";

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
  // const [activeVideo, setActiveVideo] = useState<number | null>(null);
  return (
    <section className="section-wrapper pt-6 md:pt-8 lg:pt-10 xl:pt-14 pb-8 md:pb-12 lg:pb-16 xl:pb-20">
      <div className="flex gap-x-2.5 md:gap-x-3 lg:justify-center  overflow-x-auto whitespace-nowrap no-scrollbar w-full flex-nowrap">
        {data &&
          data?.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setSelectedConference(item?.name)}
                className={`
                  relative py-2 sm:py-3 px-4 sm:px-5 text-sm sm:text-base leading-5 text-center rounded-sm
                  border border-[#dbdbdb] font-medium text-dark-alter
                  overflow-hidden transition-all duration-500 flex-shrink-0
                `}
              >
                <span
                  className={`
                    absolute inset-0 z-0 transition-opacity duration-500
                    ${
                      selectedConferece === item?.name
                        ? "opacity-100 bg-gradient-to-r from-[#4d1592] to-[#0078bb]"
                        : "opacity-0"
                    }
                  `}
                />
                {/* text content */}
                <span
                  className={`relative z-10 ${
                    selectedConferece === item?.name
                      ? "text-white font-bold"
                      : "text-dark-alter"
                  }`}
                >
                  {item?.name}
                </span>
              </button>
            );
          })}
      </div>
      <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-12 grid grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-2.5 md:gap-3 lg:gap-4">
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
    </section>
  );
};

export default VideoGallery;
