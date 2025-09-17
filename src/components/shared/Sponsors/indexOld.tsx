"use client";
import Image from "next/image";
import React, { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export type SponsorsPropsType = {
  data?: {
    data: any[];
    heading: string;
  };
  isReversed?: boolean;
  isSponsor?: boolean;
};

const SponsorsOld = ({
  data,
  isSponsor = false,
  isReversed = false,
}: SponsorsPropsType) => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  const listsData = useMemo(() => {
    if (isSponsor && data?.data) {
      const half = Math.ceil(data.data.length / 2);
      const firstList = data.data.slice(0, half);
      const secondList = data.data.slice(half);

      const clonedFirstList = [...firstList, ...firstList];
      const clonedSecondList = [...secondList, ...secondList];

      return { firstList: clonedFirstList, secondList: clonedSecondList };
    }

    return {
      firstList: data?.data ? [...data.data, ...data.data] : [],
      secondList: [],
    };
  }, [data?.data, isSponsor]);

  // useGSAP(() => {
  //   if (containerRef1.current) {
  //     gsap.to(containerRef1.current, {
  //       xPercent: -50,
  //       repeat: -1,
  //       duration: 15,
  //       ease: "none",
  //     });
  //   }
  // }, [listsData.firstList]);

  // Check the number of items in the first list
  const shouldAnimateFirstList = listsData.firstList.length >= 5;

  // Check the number of items in the second list
  const shouldAnimateSecondList = isSponsor && listsData.secondList.length >= 5;

  // useGSAP(() => {
  //   if (isSponsor && containerRef2.current) {
  //     gsap.set(containerRef2.current, { xPercent: -50 });
  //     gsap.to(containerRef2.current, {
  //       xPercent: 0,
  //       repeat: -1,
  //       duration: 15,
  //       ease: "none",
  //     });
  //   }
  // }, [isSponsor, listsData.secondList]);

  // New One

  useGSAP(() => {
    if (containerRef1.current && shouldAnimateFirstList) {
      gsap.to(containerRef1.current, {
        xPercent: -50,
        repeat: -1,
        duration: 15,
        ease: "none",
      });
    }
  }, [listsData.firstList, shouldAnimateFirstList]);

  useGSAP(() => {
    if (containerRef2.current && shouldAnimateSecondList) {
      gsap.set(containerRef2.current, { xPercent: -50 });
      gsap.to(containerRef2.current, {
        xPercent: 0,
        repeat: -1,
        duration: 15,
        ease: "none",
      });
    }
  }, [isSponsor, listsData.secondList, shouldAnimateSecondList]);

  const renderSponsorList = (items: any[], isReversed: boolean) => (
    <div
      className={`relative w-full overflow-hidden ${
        isReversed ? "mt-8 xl:mt-10 2xl:mt-14" : ""
      }`}
    >
      <div
        className={`flex ${isReversed ? "justify-end" : "justify-start"} w-fit`}
        ref={isReversed ? containerRef2 : containerRef1}
      >
        {items?.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center flex-shrink-0 mx-5 md:mx-8 xl:mx-10 2xl:mx-14"
          >
            <div
              className={`border rounded-full border-light-grey flex items-center justify-center w-fit- ${
                isSponsor
                  ? "w-[90px] h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[150px] 2xl:w-[180px] 2xl:h-[180px]"
                  : "w-[75px] h-[75px] lg:w-[90px] lg:h-[90px] xl:w-[120px] xl:h-[120px] 2xl:w-[150px] 2xl:h-[150px]"
              }`}
            >
              <Image
                src={item?.image_url}
                alt={item?.name}
                width={150}
                height={75}
                sizes="100vw"
                className={`w-full h-auto object-cover ${
                  isSponsor
                    ? "max-w-[70px] lg:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[150px]"
                    : "max-w-[45px] lg:max-w-[65px] xl:max-w-[90px] 2xl:max-w-[120px]"
                }`}
              />
            </div>
            <p className="mt-2.5 md:mt-5 text-black text-center text-sm md:text-base lg:text-lg - font-semibold leading-[18px] capitalize max-w-[100px]- ">
              {item?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <h6 className="sub_heading-1 mb-4 md:mb-6">{data?.heading}</h6>

      {isSponsor && listsData.firstList ? (
        <>
          {renderSponsorList(listsData.firstList, false)}
          {renderSponsorList(listsData.secondList, true)}
        </>
      ) : (
        renderSponsorList(listsData.firstList, false)
      )}
    </div>
  );
};

export default SponsorsOld;
