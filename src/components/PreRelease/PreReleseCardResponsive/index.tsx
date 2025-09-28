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
            className="space-y-3  pb-2 border-b-[3px]  gradient-border-3"
          >
            <Image
              src={item?.image_url}
              alt={item?.title}
              width={700}
              height={350}
              className=" overflow-hidden w-full h-auto object-cover"
            />

            <div>
              <p className="description text-[#919191] font-normal  leading-5 text-center">
                {dayjs(item?.date).format("DD MMMM YYYY")}
              </p>
              <h6 className="text-tms-tanker-blue-2 text-xl md:text-2xl font-semibold leading-3 text-center ">
                {" "}
                {item.title}
              </h6>
              <div
                className="description text-[#2a2a2a] space-y-3 text-center "
                dangerouslySetInnerHTML={{ __html: item?.description }}
              />
              <Link
                href={`press-release/${item.slug}`}
                className="description text-dark-alter w-fit !leading-3 underline hover:no-underline hover:text-tms-green transition-all duration-300 flex justify-center mt-2"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}

      {isLoading && (
        <div className="text-center py-4">
          <p className="text-tms-green font-medium">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default PreReleaseCardResponsive;
