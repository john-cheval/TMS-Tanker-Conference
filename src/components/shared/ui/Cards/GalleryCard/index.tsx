"use client";
import { PhotoGalleryType } from "@/components/Gallery/GalleryAlbums";
import GalleryModal from "@/components/Gallery/GalleryModal";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TopImageIcon from "@/assets/icons/Vector1.png";

interface GalleryCardProps extends PhotoGalleryType {
  isAlbumPage?: boolean;
  index?: number;
  gallery?: any;
}

const GalleryCard = ({
  id,
  image_url,
  title,
  slug,
  isAlbumPage = false,
  index,
  gallery,
}: GalleryCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(index);

  const handleOpenModal = (index: any) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  if (isAlbumPage) {
    return (
      <Link
        href={`/photo-gallery/${id}`}
        className="border gradient-border-2 p-4 md:p-5 relative block"
      >
        <div className="overflow-hidden relative cursor-pointer z-40">
          <div className="relative">
            <Image
              src={image_url}
              alt={title || slug || "image"}
              width={400}
              height={300}
              sizes="100vw"
              className="w-full h-auto object-cover"
            />
            <div
              className="w-full h-full absolute left-0 bottom-0 max-h-[150px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 162, 93, 0.00) 0%, #0078BA 100%)",
              }}
            />
          </div>

          {title && (
            <>
              <p className="description text-tms-tanker-blue-2 font-semibold text-base md:text-xl lg:text-2xl text-center mt-3 md:mt-4  z-50 ">
                {title}
              </p>
            </>
          )}
        </div>
        <Image
          src={TopImageIcon}
          alt="TopImageIcon"
          className="w-full h-full max-w-[250px] absolute top-0 right-0"
        />
      </Link>
    );
  }

  return (
    <>
      <div
        onClick={() => handleOpenModal(index)}
        className=" overflow-hidden relative cursor-pointer"
      >
        <Image
          src={image_url}
          alt={title || slug || "image"}
          width={400}
          height={300}
          sizes="100vw"
          className="w-full h-auto object-cover"
        />
        {title && (
          <>
            <div className="CardGraient absolute bottom-0 left-0 w-full h-full max-h-[190px]" />
            <p className="description text-white font-bold absolute z-50 bottom-5 lg:bottom-8 left-4 md:left-6 lg:left-10">
              {title}
            </p>
          </>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <GalleryModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            data={gallery}
            initialIndex={currentIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryCard;
