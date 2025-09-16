import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { MdAccessAlarms } from "react-icons/md";

type Props = {
  content: any;
};

const ConferenceProgrammeSectionTwo = ({ content }: Props) => {
  if (!content)
    return (
      <p className="text-lg font-medium my-5 text-center md:text-xl">
        There is no conference
      </p>
    );
  return (
    <section className="section-wrapper mt-12 pb-8 md:pb-12 lg:pb-16 ">
      <div className="flex flex-col gap-y-4">
        {content?.map((row: any, rowIndex: number) => {
          const isAnyItemASession = row.some(
            (item: any) => item?.is_session === "1"
          );
          let gridColsClass = "";
          if (isAnyItemASession) {
            gridColsClass = "grid-cols-1";
          } else if (row.length === 3) {
            gridColsClass = "grid-cols-1 md:grid-cols-3";
          } else if (row.length === 2) {
            gridColsClass = "grid-cols-1 md:grid-cols-2";
          } else {
            gridColsClass = "grid-cols-1";
          }

          return (
            <div
              key={rowIndex}
              className={`grid ${gridColsClass} gap-3 md:gap-4`}
            >
              {row?.map((item: any) => {
                const timeObject = dayjs(`2000-01-01T${item?.Time}`);
                const formattedTime = timeObject.format("h:mm");
                return (
                  <div
                    key={item.id}
                    className={`conference-card flex   ${
                      isAnyItemASession
                        ? "flex-row pt-6 pb-8  md:pb-12 lg:pb-16 xl:pb-20"
                        : "flex-col justify-between py-6"
                    }`}
                  >
                    {!isAnyItemASession && (
                      <>
                        {" "}
                        <p className=" bg-tms-blue rounded-r-md w-fit py-2 md:py-3 px-4 md:px-6 flex items-center gap-x-1.5 md:gap-x-2.5 text-base md:text-lg lg:text-2xl text-white leading-3 font-bold conference-time relative">
                          <MdAccessAlarms />
                          {formattedTime}
                        </p>
                        {/* Main content container */}
                        <div className="px-5 mt-3 md:mt-5 flex flex-col flex-grow">
                          <h3 className="text-lg md:text-xl text-tms-blue font-medium leading-3">
                            {item?.name}
                          </h3>

                          {/* Wrap all the content you want at the bottom in this div */}
                          <div className="mt-auto space-y-4 md:space-y-6">
                            {item?.sponsor_list?.length > 0 && (
                              <div className="mt-5 md:mt-8 lg:mt-14">
                                <p className="description text-dark-alter mb-5">
                                  Sponsor
                                </p>
                                {item?.sponsor_list?.map(
                                  (
                                    sponsorListItem: any,
                                    sponsorListIndex: number
                                  ) => {
                                    return (
                                      <Image
                                        key={sponsorListIndex}
                                        src={
                                          sponsorListItem?.image_url ??
                                          "imnagw2"
                                        }
                                        alt={sponsorListItem?.name}
                                        width={360}
                                        height={80}
                                        className="w-fit object-contain max-w-[200px] md:max-w-full"
                                      />
                                    );
                                  }
                                )}
                              </div>
                            )}

                            {item?.speakers_users !== null &&
                              item?.speakers_users?.length > 0 && (
                                <div className="pt-3 md:pt-7 space-y-3 md:space-y-4">
                                  {item?.speakers_users?.map(
                                    (
                                      speakerItem: any,
                                      speakerindex: number
                                    ) => {
                                      return (
                                        <div
                                          key={speakerindex + 1}
                                          className="flex gap-x-3"
                                        >
                                          <Image
                                            src={speakerItem?.image_url}
                                            alt={speakerItem?.title}
                                            width={63}
                                            height={63}
                                            className="rounded-md w-[65px] h-[65px]"
                                          />

                                          <div>
                                            <p className="text-base md:text-lg lg:text-xl text-[#2a2a2a] font-medium leading-[28px]">
                                              {speakerItem?.title}
                                            </p>
                                            <p className="description text-[#2a2a2a] leading-5 mt-1">
                                              {speakerItem?.description}
                                            </p>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              )}

                            {item?.moderator_list && (
                              <div className="mt-4 md:mt-6">
                                <p className="text-dark text-base md:text-lg lg:text-2xl font-semibold leding-5">
                                  Moderator
                                </p>

                                <div className="mt-3 space-y-3 md:space-y-4">
                                  {item?.moderator_list?.map(
                                    (
                                      moderatorItem: any,
                                      moderatorIndex: number
                                    ) => {
                                      return (
                                        <div
                                          className="flex gap-x-3"
                                          key={moderatorIndex + 1}
                                        >
                                          <Image
                                            src={moderatorItem?.image_url}
                                            alt={moderatorItem?.name}
                                            width={63}
                                            height={63}
                                            className="rounded-md w-[65px] h-[65px]"
                                          />
                                          <div>
                                            <p className="text-base md:text-lg lg:text-xl text-[#2a2a2a] font-medium leading-[28px]">
                                              {moderatorItem?.name}
                                            </p>
                                            <p className="description text-[#2a2a2a] leading-5 md:mt-1">
                                              {moderatorItem?.post}
                                            </p>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                    {isAnyItemASession && (
                      <div className=" flex flex-col md:flex-row  md:gap-x-6 lg:gap-x-12 xl:gap-x-16">
                        <div>
                          <p className=" bg-tms-blue rounded-r-md w-fit py-2 md:py-3 px-4 md:px-6 flex items-center gap-x-1.5 md:gap-x-2.5 text-base md:text-lg lg:text-2xl text-white leading-3 font-bold conference-time relative">
                            <MdAccessAlarms />
                            {formattedTime}
                          </p>
                          <div className="px-5 w-fit ">
                            {item?.sponsor_list?.length > 0 && (
                              <div className="mt-auto- mt-7">
                                <p className="text-sm md:text-base lg:text-2xl font-semibold text-dark-alter mb-3">
                                  Sponsor
                                </p>

                                {item?.sponsor_list?.map(
                                  (
                                    sponsorListItemTwo: any,
                                    sponsorListIndexTwo: number
                                  ) => {
                                    return (
                                      <Image
                                        key={sponsorListIndexTwo}
                                        src={
                                          sponsorListItemTwo?.image_url ??
                                          "image"
                                        }
                                        alt={sponsorListItemTwo?.name}
                                        width={360}
                                        height={80}
                                        className="w-fit object-contain"
                                      />
                                    );
                                  }
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="px-5 sm:px-8 md:pr-8 lg:pr-10 mt-7 md:mt-0 ">
                          <h6 className="text-tms-blue text-xl leading-3 font-medium">
                            {item?.post}
                          </h6>
                          <span
                            className="block w-[50px] h-[2px] mt-3"
                            style={{
                              background:
                                "linear-gradient(90deg, #1C75BC 0%, #4D1592 100%)",
                            }}
                          />

                          <h4 className="text-lg md:text-xl lg:text-2xl gradient-text w-fit font-bold leading-4 md:leading-3 lg:leading-2 mt-3 mb-2">
                            {item?.name}
                          </h4>

                          {/* <div className="space-y-4">
                            <p className="description text-dark-alter">
                              This session explores the integration of AI and
                              emerging technologies in reshaping the entire
                              transport and logistics value chain, including
                              ports, shipping, and logistics. It will address
                              the operational and strategic impact of
                              digitalisation, automation, and data intelligence
                              on efficiency, safety, and competitiveness. 
                            </p>
                            <p className="description text-dark-alter">
                              Topics will include: 
                            </p>

                            <div className="space-y-1">
                              <h4 className="description  font-bold text-dark-alter">
                                AI in Maritime and Port Operations: From
                                Automation to Autonomy
                              </h4>
                              <p className="description text-dark-alter">
                                How AI is enabling autonomous vessels, smart
                                scheduling, port optimization, andreal-time
                                decision-making.
                              </p>
                            </div>
                            <div className="space-y-1">
                              <h4 className="description  font-bold text-dark-alter">
                                AI in Maritime and Port Operations: From
                                Automation to Autonomy
                              </h4>
                              <p className="description text-dark-alter">
                                How AI is enabling autonomous vessels, smart
                                scheduling, port optimization, andreal-time
                                decision-making.
                              </p>
                            </div>
                            <div className="space-y-1">
                              <h4 className="description  font-bold text-dark-alter">
                                AI in Maritime and Port Operations: From
                                Automation to Autonomy
                              </h4>
                              <p className="description text-dark-alter">
                                How AI is enabling autonomous vessels, smart
                                scheduling, port optimization, andreal-time
                                decision-making.
                              </p>
                            </div>
                            <div className="space-y-1">
                              <h4 className="description  font-bold text-dark-alter">
                                AI in Maritime and Port Operations: From
                                Automation to Autonomy
                              </h4>
                              <p className="description text-dark-alter">
                                How AI is enabling autonomous vessels, smart
                                scheduling, port optimization, andreal-time
                                decision-making.
                              </p>
                            </div>
                          </div> */}

                          <div
                            className="space-y-4 description text-dark-alter"
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          />

                          {item?.moderator_list && (
                            <div className="mt-4 md:mt-6">
                              <p className="text-dark text-base md:text-lg lg:text-2xl font-semibold leding-5">
                                Moderator
                              </p>

                              <div className="mt-3 space-y-4">
                                {item?.moderator_list?.map(
                                  (
                                    moderatorItem: any,
                                    moderatorIndex: number
                                  ) => {
                                    return (
                                      <div
                                        className="flex gap-x-3"
                                        key={moderatorIndex + 1}
                                      >
                                        <Image
                                          src={moderatorItem?.image_url}
                                          alt={moderatorItem?.name}
                                          width={63}
                                          height={63}
                                          className="rounded-md w-[65px] h-[65px]"
                                        />
                                        <div>
                                          <p className="text-base md:text-lg lg:text-xl text-[#2a2a2a] font-medium leading-[28px]">
                                            {moderatorItem?.name}
                                          </p>
                                          <p className="description text-[#2a2a2a] leading-5 md:mt-1">
                                            {moderatorItem?.post}
                                          </p>
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          )}

                          {item?.speakers_list && (
                            <div className="mt-5  lg:mt-8">
                              <p className="text-dark text-base md:text-lg lg:text-2xl font-semibold leding-5">
                                Speakers
                              </p>

                              <div className="mt-3  grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                                {item?.speakers_list?.map(
                                  (
                                    spekersItem: any,
                                    spekersItemIndex: number
                                  ) => {
                                    return (
                                      <div
                                        className="flex gap-x-3"
                                        key={spekersItemIndex + 1}
                                      >
                                        <Image
                                          src={spekersItem?.image_url}
                                          alt={spekersItem?.name}
                                          width={63}
                                          height={63}
                                          className="rounded-md shrink-0  w-[65px] h-[65px]"
                                        />
                                        <div>
                                          <p className="text-base md:text-lg lg:text-xl text-[#2a2a2a] font-medium leading-[28px]">
                                            {spekersItem?.name}
                                          </p>
                                          <p className="description text-[#2a2a2a] leading-5 md:mt-1">
                                            {spekersItem?.post}
                                          </p>
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ConferenceProgrammeSectionTwo;
