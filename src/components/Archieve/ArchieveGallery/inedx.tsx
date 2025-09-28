"use client";
import GalleryAccordion from "@/components/Gallery/GalleryAccordion";
import React, { useState } from "react";

type Props = {
  data: any;
};

const ArchieveGallery = ({ data }: Props) => {
  const [selectedConferece, setSelectedConference] = useState(data[0]?.name);
  const filteredAlbum = data?.find(
    (item: any) => item?.name === selectedConferece
  );

  return (
    <section className="section-wrapper pt-6 md:pt-8 lg:pt-10 xl:pt-14 pb-8 md:pb-12 lg:pb-16 xl:pb-20">
      <div className="hidden md:block">
        <div className="flex gap-x-2.5 md:gap-x-5 lg::gap-x-8 lg:justify-center  overflow-x-auto whitespace-nowrap no-scrollbar w-full flex-nowrap border-b pb-5 gradient-border-2 ">
          {data &&
            data?.map((item: any, index: number) => {
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

        {/* PubHTML5 Goes Here */}

        <div className="mt-4 md:mt-6 lg:mt-8">
          {filteredAlbum?.winners_catalogue ? (
            <iframe
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:[650px] 2xl:h-[700px]"
              // src="https://online.pubhtml5.com/kmcsa/ezhw/"
              src={filteredAlbum?.winners_catalogue}
              // seamless="seamless"
              scrolling="no"
              frameBorder="0"
              allowTransparency={true}
              allowFullScreen={true}
            ></iframe>
          ) : (
            <p className="text-xl md:tet-2xl text-center text-dark-alter">
              There is No Winner Catelouge For this Conference Year
            </p>
          )}
        </div>
      </div>

      <div className="md:hidden">
        <GalleryAccordion galleryData={data} isArchives={true} />
      </div>
    </section>
  );
};

export default ArchieveGallery;
