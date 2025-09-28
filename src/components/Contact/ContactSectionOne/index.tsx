import Image from "next/image";
import Link from "next/link";
import React from "react";
import ai from "@/assets/shared/ai_small_24.svg";
import ContactForm from "@/components/Forms/ContactForm";

type Props = {
  content: any;
};

const ContactSectionOne = ({ content }: Props) => {
  return (
    <section className="section-wrapper  pt-8 m lg:pt-10 xl:pt-16 pb-8 md:pb-12 lg:pb-16 xl:pb-20">
      <div className="px-5 md:px-8 lg:px-11 pt-8 md:pt-10 lg:pt-14 xl:pt-16 2xl:pt-24 pb-6 md:pb-12 bg-[#F4F4F4]  gap-x-8 xl:gap-x-16 2xl:gap-x-24 grid grid-cols-1  md:grid-cols-2">
        <div>
          <h3 className="main-heading gradient-text w-fit  leading-3 font-bold md:leading-[40px]  xl:leading-main mb-4 mx-auto md:mx-0 text-center md:text-left ">
            {content?.heading}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-y-4 lg:gap-y-0 lg:gap-x-5 ">
            {content?.contact_persons &&
              content?.contact_persons?.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={` flex flex-col  items-center w-full md:items-start${
                      index === 0
                        ? "border-b lg:border-r lg:border-b-0 pb-3 m:pb-5 lg:pb-0 border-b-light-grey-1 lg:border-r-light-grey-1"
                        : "lg:place-content-end lg:ml-auto"
                    }`}
                  >
                    <h5 className=" w-fit text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-3">
                      {item?.title}
                    </h5>
                    <p className="description text-tms-tanker-blue-2 font-semibold mt-1">
                      {item?.position}
                    </p>

                    {item?.phone_no !== null ? (
                      <div className="mt-2">
                        <div className="flex flex-col">
                          <Link
                            href={`tel: ${item?.mobile_no}`}
                            className="description text-[#2a2a2a] leading-3"
                          >
                            M: {item?.mobile_no}
                          </Link>
                          <Link
                            href={`tel:${item?.phone_no}`}
                            className="description text-[#2a2a2a] leading-3"
                          >
                            T: {item?.phone_no}
                          </Link>
                        </div>
                        <Link
                          href={`mailto: ${item?.email_address}`}
                          className="description text-[#2a2a2a] leading-3 "
                        >
                          E: {item?.email_address}
                        </Link>
                      </div>
                    ) : (
                      <div className="flex flex-col mt-2">
                        <Link
                          href={`tel: ${item?.mobile_no}`}
                          className="description text-[#2a2a2a] leading-3"
                        >
                          M: {item?.mobile_no}
                        </Link>
                        <Link
                          href={`mailto: ${item?.email_address}`}
                          className="description text-[#2a2a2a] leading-3"
                        >
                          E: {item?.email_address}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSectionOne;
