import React from "react";
import RecentlyViewedSwiper from "./RecentlyViewedSwiper";

type Props = {
  data: any;
};

const RecentlyViewed = ({ data }: Props) => {
  return (
    <section className="pb-8 md:pb-10 section-wrapper">
      <h4 className="main-heading-2 gradient-text  w-fit">Recently Viewed</h4>

      <div className="mt-5 md:my-8  ">
        <RecentlyViewedSwiper swiperData={data} />
      </div>
    </section>
  );
};

export default RecentlyViewed;
