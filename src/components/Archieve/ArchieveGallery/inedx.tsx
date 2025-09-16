"use client";
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
      <div className="flex gap-x-2.5 md:gap-x-3 lg:justify-center  overflow-x-auto whitespace-nowrap no-scrollbar w-full flex-nowrap border-b border-b-[#D9D9D9] pb-8">
        {data &&
          data?.map((item: any, index: number) => {
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
    </section>
  );
};

export default ArchieveGallery;
