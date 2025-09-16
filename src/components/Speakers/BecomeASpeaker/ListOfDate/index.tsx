import React from "react";
import { ListofDateType } from "../BecomeASpeakerSection3";
import svgIcon from "@/assets/Home/tms.jpg";

type Props = {
  data: ListofDateType[];
};

const ListOfDates = ({ data }: Props) => {
  if (!data) return;
  return (
    <>
      <div className="section-wrapper">
        <div
          className=" rounded-sm py-10 px-10 lg:px-16 xl:px-20   md:flex justify-between items-stretch- hidden gap-x-5"
          style={{
            background:
              "linear-gradient(68deg, #4D1592 26.51%, #0078BB 86.42%)",
          }}
        >
          <div className="flex flex-col gap-y-2">
            <h5
              className="sub_heading-1 text-center l
                   !text-white"
            >
              {data[0]?.title}
            </h5>
            <p className="md:text-base lg:text-lg  leading-4 text-center !text-white max-w-[350px]">
              {data[0]?.description}
            </p>
          </div>
          <div className="block bg-white w-[1px] h-full-" />
          <div className="flex flex-col gap-y-2">
            <h5
              className="sub_heading-1 text-center l
                   !text-white"
            >
              {data[1]?.title}
            </h5>
            <p className="md:text-base lg:text-lg  leading-4 text-center !text-white max-w-[350px]">
              {data[1]?.description}
            </p>
          </div>
          <div className="block bg-white w-[1px] h-full-" />
          <div className="flex flex-col gap-y-2">
            <h5
              className="sub_heading-1 text-center l
                   !text-white"
            >
              {data[2]?.title}
            </h5>
            <p className="md:text-base lg:text-lg  leading-4 text-center !text-white max-w-[350px]">
              {data[2]?.description}
            </p>
          </div>
        </div>
      </div>
      <div
        className="  py-8 px-5 md:hidden text-white  items-center justify-center flex flex-col w-full gap-y-4"
        style={{
          background: `url(${svgIcon.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="flex flex-col gap-y-1">
          <h5 className="text-xl sm:text-2xl text-center leading-3 font-bold">
            {data[0]?.title}
          </h5>
          <p className="text-base text-center leading-4">
            {data[0]?.description}
          </p>
          <div className="block bg-white  w-[150px] sm:w-[225px] h-[1px] mt-3 mx-auto" />
        </div>
        <div className="flex flex-col gap-y-1">
          <h5 className="text-xl sm:text-2xl text-center leading-3 font-bold">
            {data[1]?.title}
          </h5>
          <p className="text-base text-center leading-4">
            {data[1]?.description}
          </p>
          <div className="block bg-white  w-[150px] sm:w-[225px] h-[1px] mt-3 mx-auto" />
        </div>
        <div className="flex flex-col gap-y-1">
          <h5 className="text-xl sm:text-2xl text-center leading-3 font-bold">
            {data[2]?.title}
          </h5>
          <p className="text-base text-center leading-4">
            {data[2]?.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ListOfDates;
