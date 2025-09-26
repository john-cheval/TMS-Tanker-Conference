"use client";
import React, { useState } from "react";
import { PhotoGalleryType } from "../GalleryAlbums";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";
import { accordionVariants } from "@/constants/motionVariants";
import GalleryCard from "@/components/shared/ui/Cards/GalleryCard";
import VideoCard from "@/components/shared/ui/Cards/VideoCard";
import { getYoutubeId } from "@/utils/getYouyubeId";

interface GalleryType {
  id: number;
  name: string;
  year: string;
  photo_gallery?: PhotoGalleryType[];
  video_gallery?: any;
}

type Props = {
  galleryData: GalleryType[];
};

const GalleryAccordion = ({ galleryData }: Props) => {
  console.log(galleryData, "this is the gallery data");
  const [openIndex, setOpenIndex] = useState<number | null>(galleryData[0]?.id);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  if (!galleryData || galleryData.length === 0) {
    return (
      <p className="text-2xl text-center text-tms-blue font-bold">
        No Packages Available
      </p>
    );
  }

  return (
    <article className="w-full">
      {galleryData?.map((item, index) => {
        const isAccordionOpen = openIndex === item?.id;
        return (
          <div className="py-2 border-b border-b-tms-tanker-blue-2" key={index}>
            <>
              <button
                className={`flex gap-x-5 items-center justify-between w-full   leading-1 py-2`}
                onClick={() => toggleAccordion(item.id as number)}
              >
                <p
                  className={`gradient-text w-fit  text-left transition-all duration-300 ${
                    isAccordionOpen
                      ? "text-2xl sm:text-[25px] mb-5 font-bold"
                      : "text-xl font-semibold"
                  }`}
                >
                  {item?.name}
                </p>
                {isAccordionOpen ? (
                  <FaMinus className="text-black text-sm" />
                ) : (
                  <FaPlus className="text-black" />
                )}
              </button>

              <AnimatePresence>
                {isAccordionOpen && (
                  <motion.div
                    key="accordion-content"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={accordionVariants}
                    className="overflow-hidden"
                  >
                    {item?.photo_gallery && (
                      <div>
                        {Array.isArray(item?.photo_gallery) &&
                        item?.photo_gallery?.length > 0 ? (
                          <div className="space-y-3 sm:space-y-5">
                            {item?.photo_gallery?.map(
                              (gallery: any, index: number) => {
                                return (
                                  <GalleryCard
                                    key={index + 1}
                                    {...gallery}
                                    isAlbumPage={true}
                                  />
                                );
                              }
                            )}
                          </div>
                        ) : (
                          <p className="text-base text-center text-tms-blue font-bold">
                            No Packages Available
                          </p>
                        )}
                      </div>
                    )}
                    {item?.video_gallery && (
                      <div>
                        {Array.isArray(item?.video_gallery) &&
                        item?.video_gallery?.length > 0 ? (
                          <div className="space-y-3 sm:space-y-5">
                            {item?.video_gallery?.map(
                              (gallery: any, index: number) => {
                                const youtubeId = getYoutubeId(gallery.link);
                                return (
                                  <VideoCard
                                    key={index + 1}
                                    title={gallery.title}
                                    link={gallery.link}
                                    youtube_id={youtubeId ?? ""}
                                  />
                                );
                              }
                            )}
                          </div>
                        ) : (
                          <p className="text-base text-center text-tms-blue font-bold">
                            No Packages Available
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          </div>
        );
      })}
    </article>
  );
};

export default GalleryAccordion;
