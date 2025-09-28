import React from "react";
import RecentlyViewedSwiper from "./RecentlyViewedSwiper";

type Props = {
  data: any;
};

const RecentlyViewed = ({ data }: Props) => {
  return (
    <section className="pb-8 md:pb-10 section-wrapper">
      <h4 className="main-heading gradient-text  leading-3 font-bold md:leading-[40px]  lg:leading-main   w-fit">
        Recently Viewed
      </h4>

      <div className="mt-5 md:mt-7">
        <RecentlyViewedSwiper swiperData={data} />
      </div>
    </section>
  );
};

export default RecentlyViewed;
