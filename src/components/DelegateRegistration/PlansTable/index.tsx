import React from "react";

type Props = {
  data: any;
  heading_1?: string;
  heading_2?: string;
};

const PlansTable = ({ data, heading_1, heading_2 }: Props) => {
  return (
    <>
      <div className="relative  block max-w-5xl overflow-x-auto  border-[#008AC0]  border mx-auto">
        <table className="w-full text-sm  text-left rtl:text-right   ">
          <thead
            className="text-sm md:text-base lg:text-2xl text-white border-b border-white w-fit "
            style={{
              background:
                "linear-gradient(91deg, rgb(2 53 85) 18.54%, rgba(0, 138, 192, 0.8) 99.96%)",
            }}
          >
            <tr>
              <th
                scope="col"
                className="px-3 sm:px-6 py-4  sm:py-5 w-1/2 text-center border-r border-r-white text-white text-lg sm:text-xl md:text-2xl font-medium leading-5"
              >
                {heading_1}
              </th>
              <th
                scope="col"
                className="px-3 sm:px-6  py-4  sm:py-5 w-1/2 text-center text-white text-lg sm:text-xl md:text-2xl font-medium leading-5"
              >
                {heading_2}
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data?.map((item: any, index: number) => {
              return (
                <tr
                  key={index}
                  className="bg-[#008AC0] border-b border-b-white  last:border-0 lg:text-lg text-sm md:text-base   leading-3 text-white "
                >
                  <td
                    scope="row"
                    className="w-1/2 text-center py-4  sm:py-7 border-r border-r-white px-4 "
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
    </>
  );
};

export default PlansTable;
