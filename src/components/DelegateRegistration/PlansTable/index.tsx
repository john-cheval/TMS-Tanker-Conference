import React from "react";

type Props = {
  data: any;
  heading_1?: string;
  heading_2?: string;
};

const PlansTable = ({ data, heading_1, heading_2 }: Props) => {
  return (
    <>
      <div className="relative  block max-w-5xl overflow-x-auto  border-tms-blue rounded-sm border mx-auto">
        <table className="w-full text-sm  text-left rtl:text-right   ">
          <thead
            className="text-sm md:text-base lg:text-2xl text-white border-b border-b-tms-blue border-dotted  "
            style={{
              background:
                "linear-gradient(249deg, #4D1592 13.95%, #0078BB 80.04%)",
            }}
          >
            <tr>
              <th
                scope="col"
                className="px-6 py-4  sm:py-5 w-1/2 text-center border-r border-r-tms-blue border-dotted"
              >
                {heading_1}
              </th>
              <th scope="col" className="px-6 py-5 w-1/2 text-center">
                {heading_2}
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data?.map((item: any, index: number) => {
              return (
                <tr
                  key={index}
                  className="bg-[#EDF9FF] border-b border-b-[#0078BB] border-dotted last:border-0 lg:text-lg text-sm md:text-base   leading-3  "
                >
                  <td
                    scope="row"
                    className="w-1/2 text-center py-4  sm:py-7 border-r border-r-tms-blue border-dotted px-4 "
                  >
                    {item?.title}
                  </td>
                  <td className="w-1/2 text-center">{item?.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <div className="border-tms-blue border-b-0 overflow-hidden rounded-t-sm border sm:hidden">
        <div>
          <h3
            className="text-base   text-white border-b border-b-tms-blue border-dotted px-6 py-4 text-left font-bold   "
            style={{
              background:
                "linear-gradient(249deg, #4D1592 13.95%, #0078BB 80.04%)",
            }}
          >
            {" "}
            {heading_1}
          </h3>
          <div className="bg-[#EDF9FF]">
            {data?.map((item: any, index: number) => {
              const isLastItem = index === data.length - 1;
              const borderClass = isLastItem
                ? ""
                : "border-b border-b-tms-blue border-dotted";

              return (
                <p
                  className={`text-dark-alter px-6 py-2 text-sm font-medium leading-3 ${borderClass}`}
                  key={index}
                >
                  {item?.title}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-tms-blue overflow-hidden rounded-b-sm border sm:hidden">
        <div>
          <h3
            className="text-base   text-white border-b border-b-tms-blue border-dotted px-6 py-4 text-left font-bold   "
            style={{
              background:
                "linear-gradient(249deg, #4D1592 13.95%, #0078BB 80.04%)",
            }}
          >
            {" "}
            {heading_2}
          </h3>
          <div className="bg-[#EDF9FF]">
            {data?.map((item: any, index: number) => {
              const isLastItem = index === data.length - 1;
              const borderClass = isLastItem
                ? ""
                : "border-b border-b-tms-blue border-dotted";

              return (
                <p
                  className={`text-dark-alter px-6 py-2 text-sm font-medium leading-3 ${borderClass}`}
                  key={index}
                >
                  {item?.price}
                </p>
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PlansTable;
