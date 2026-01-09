import React from 'react';
import SpeakersCard from "@/components/shared/ui/Cards/SpeakerCard/SpeakerCardAlter";

type SpeakersCardData = {
  name: string;
  slug: string;
  post: string;
  company: string;
  image_url: string;
  presentation_pdf_url:string;
};

type Props = {
  data: SpeakersCardData[];
};

function SpeakerPresentation({data}:Props) {
    return (
        <section className="section-wrapper pt-3 md:pt-6 lg:pt-11 mb-7 md:mb-8 lg:mb-12 xl:mb-14 ">
            <div className="border-b border-dashed border-b-[#8E8E8E] pb-7 md:pb-8 lg:pb-10 ">
                <div className="mt-5  md:mt-8  lg:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-3 lg:gap-4 auto-rows-fr   ">
                {data &&
                    data?.map((speaker, index) => {
                    return <SpeakersCard key={index} {...speaker} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default SpeakerPresentation;