"use client";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

type Props = {
  detail: any;
};

const PreReleaseCardResponsive = ({ detail }: Props) => {
  const ITEMS_PER_LOAD = 4;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [isLoading, setIsLoading] = useState(false);
  const allItemsLoaded = visibleCount >= (detail?.length || 0) - 1;

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 &&
      !isLoading &&
      !allItemsLoaded
    ) {
      setIsLoading(true);
      // Simulate a small delay for a better user experience
      setTimeout(() => {
        setVisibleCount((prevCount) => prevCount + ITEMS_PER_LOAD);
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, allItemsLoaded]);

  const itemsToRender = detail?.slice(1, visibleCount + 1) || [];

  return (
    <div className="mt-5 space-y-5">
      {itemsToRender.map((item: any, index: number) => {
        return (
          <div
            key={item.id || index}
            className="space-y-3 border-b pb-2 border-b-[#D8D8D8]"
          >
            <Image
              src={item?.image_url}
              alt={item?.title}
              width={700}
              height={350}
              className="responsive-radius overflow-hidden w-full h-auto object-cover"
            />

            <div>
              <p className="description text-tms-purple font-medium lg:!leading-3">
                {dayjs(item?.date).format("MMMM YYYY")}
              </p>
              <h6 className="text-dark-alter text-lg lg:leading-3 font-normal">
                {item.title}
              </h6>

              <Link
                href={`press-release/${item.slug}`}
                className="description text-dark-alter !leading-3 hover:underline hover:text-tms-purple transition-all duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}

      {isLoading && (
        <div className="text-center py-4">
          <p className="text-tms-purple font-medium">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default PreReleaseCardResponsive;
