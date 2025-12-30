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
  isAssosiation?: boolean;
  isPartners?: boolean;
};

const Sponsors = ({
  data,
  isSponsor = false,
  isReversed = false,
  isAssosiation = false,
}: // isPartners = false,
SponsorsPropsType) => {
  console.log("isReversed",isReversed)
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const BASE_ITEM_DURATION = 3;

  const listsData = useMemo(() => {
    if (isSponsor && data?.data) {
      const half = Math.ceil(data.data.length / 2);
      const firstList = data.data.slice(0, half);
      const secondList = data.data.slice(half);

      const clonedFirstList = [
        ...firstList,
        ...firstList,
        ...firstList,
        ...firstList,
        ...firstList,
        ...firstList,
      ];
      const clonedSecondList = [
        ...secondList,
        ...secondList,
        ...secondList,
        ...secondList,
        ...secondList,
        ...secondList,
      ];

      return { firstList: clonedFirstList, secondList: clonedSecondList };
    }

    const clonedData = data?.data
      ? [...data.data, ...data.data, ...data.data, ...data.data, ...data.data]
      : [];

    return {
      firstList: clonedData,
      secondList: [],
    };
  }, [data?.data, isSponsor]);

  // Check the number of items in the first list
  const shouldAnimateFirstList = listsData.firstList.length >= 5;

  // Check the number of items in the second list
  const shouldAnimateSecondList = isSponsor && listsData.secondList.length >= 5;

  // New One

  useGSAP(() => {
    if (containerRef1.current && shouldAnimateFirstList) {
      const duration = listsData.firstList.length * BASE_ITEM_DURATION;

      let xTarget = -50;
      let initialSet = {};
      if (isAssosiation) {
        xTarget = 0;
        initialSet = { xPercent: -50 };
      }

      if (Object.keys(initialSet).length > 0) {
        gsap.set(containerRef1.current, initialSet);
      }
      gsap.to(containerRef1.current, {
        xPercent: xTarget,
        repeat: -1,
        duration: duration,
        // duration: 570,
        ease: "none",
      });
    }
  }, [listsData.firstList, shouldAnimateFirstList, isAssosiation]);

  useGSAP(() => {
    if (containerRef2.current && shouldAnimateSecondList) {
      const duration = listsData.secondList.length * BASE_ITEM_DURATION;

      // gsap.set(containerRef2.current, { xPercent: -50 });
      gsap.to(containerRef2.current, {
        xPercent: isAssosiation ? 50 : -50,
        repeat: -1,
        duration: duration,
        // duration: 570,
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
            className={`flex flex-col items-center flex-shrink-0 mx-5 md:mx-12 xl:mx-14- 2xl:mx-16- ${
              isSponsor
                ? "max-w-[90px]  lg:max-w-[120px]  xl:max-w-[150px]  2xl:max-w-[180px] "
                : "max-w-[75px] lg:max-w-[90px]  xl:max-w-[120px] 2xl:max-w-[150px] "
            }`}
          >
            <div
              className={`border rounded-full border-light-grey flex items-center justify-center w-fit- overflow-hidden ${
                isSponsor
                  ? "h-[90px] w-[90px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] 2xl:w-[200px] 2xl:h-[200px]"
                  : "w-[90px] sm:w-[120px] h-[90px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[140px] lg:h-[140px] xl:w-[160px] xl:h-[160px] 2xl:w-[180px] 2xl:h-[180px]"
              }`}
            >
              <Image
                src={item?.image_url}
                alt={item?.image_alt_tag ?? ""}
                width={150}
                height={75}
                sizes="100vw"
                className={`w-full h-auto object-cover ${
                  isSponsor
                    ? "max-w-[70px] sm:max-w-[90px] lg:max-w-[110px] xl:max-w-[120px] 2xl:max-w-[150px]"
                    : "max-w-[60px] sm:max-w-[90px] md:max-w-[100px] lg:max-w-[100px] xl:max-w-[110px] 2xl:max-w-[140px]"
                }`}
              />
            </div>
            {isSponsor && (
              <p className="mt-2.5 md:mt-5 text-tms-tanker-blue-2 text-center text-sm md:text-base leading-[18px] capitalize  ">
                {item?.name}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>

      {isSponsor && listsData.firstList && listsData.firstList.length > 0 ? (
        <>
          <h6 className="mb-6 test main-heading gradient-text-3 leading-3 font-bold md:leading-[40px]  lg:leading-main text-center md:text-left w-fit mx-auto md:mx-0">{data?.heading}</h6>
          {renderSponsorList(listsData.firstList, false)}
          {renderSponsorList(listsData.secondList, true)}
        </>
      ) : (
        listsData.firstList.length > 0 ?
        <>
          <h6 className="mb-6 gradient-text-3 leading-3 font-bold md:leading-[40px]  lg:leading-main text-center md:text-left w-fit mx-auto md:mx-0 text-[23px]">{data?.heading}</h6>
          {renderSponsorList(listsData.firstList, false)}
        </> 
        : ""
      )}
    </div>
  );
};

export default Sponsors;
