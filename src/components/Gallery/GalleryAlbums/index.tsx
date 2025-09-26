"use client";
import React, { useState } from "react";
import GalleryCard from "@/components/shared/ui/Cards/GalleryCard";
import GalleryAccordion from "../GalleryAccordion";

export interface PhotoGalleryType {
  id: number;
  award_id: number;
  photo_order: number;
  main_image: string | null;
  title: string;
  slug: string;
  sponsers_id: number | null;
  status: string;
  image: string;
  created_at: string;
  updated_at: string;
  image_url: string;
}

interface GalleryType {
  id: number;
  name: string;
  year: string;
  photo_gallery: PhotoGalleryType[];
}

type Props = {
  data: GalleryType[];
};

const GalleryAlbums = ({ data }: Props) => {
  const [selectedConferece, setSelectedConference] = useState(data[0]?.name);
  const filteredAlbum = data?.find((item) => item?.name === selectedConferece);
  return (
    <section className="section-wrapper pt-6 md:pt-8 lg:pt-10 xl:pt-14 pb-8 md:pb-12 lg:pb-16 xl:pb-20">
      <div className="  grid-cols-12 gap-x-10 md:gap-x-12 xl:gap-x-20 hidden md:grid">
        <div className="col-span-4">
          {data &&
            data?.map((item, index) => {
              return (
                <button
                  key={index + 1}
                  onClick={() => setSelectedConference(item?.name)}
                  className={` leading-5  flex flex-col border-b gradient-border-2 w-full text-left ${
                    index === 0 ? "pb-5" : "py-5"
                  } hover:text-tms-green transition-all duration-300 ${
                    selectedConferece === item?.name
                      ? "font-semibold text-xl gradient-text-3"
                      : "text-[#6f6e6e] text-xl font-medium"
                  }`}
                >
                  {item?.name}
                </button>
              );
            })}
        </div>
        <div className="col-span-8 grid grid-cols-2 gap-5">
          {Array.isArray(filteredAlbum?.photo_gallery) &&
          filteredAlbum.photo_gallery.length > 0 ? (
            filteredAlbum?.photo_gallery?.map((item, index) => {
              return (
                <GalleryCard key={index + 1} {...item} isAlbumPage={true} />
              );
            })
          ) : (
            <p className="text-lg sm:text-xl md:text-2xl col-span-12 font-medium text-center">
              There is No Albums in this Conference Year
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

export default GalleryAlbums;
