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
  const totalItems =
    content?.reduce((sum: any, row: any) => sum + row.length, 0) ?? 0;
  let currentItemCount = 0;

  return (
    <section className="section-wrapper mt-8 pb-8 md:pb-12 lg:pb-16 ">
      <h4 className="text-center main-heading-2 md:text-left gradient-text w-fit leading-3 font-bold md:leading-[40px]  lg:leading-main mb-6 ">
        Conference Programme outline
      </h4>

      <div className="">
        {" "}
        {content?.map((row: any, index: number) => {
          const isAnyItemASession = row.some(
            (item: any) => item?.is_session === "1"
          );
          return row?.map((innerItem: any, innerIndex: number) => {
            currentItemCount++;
            const isLastItem = currentItemCount === totalItems;

            const timeObject = dayjs(`2000-01-01T${innerItem?.Time}`);
            const formattedTime = timeObject.format("h:mm");

            return (
              <>
                <div
                  className={`bg-[#EFFAFF] grid grid-cols-12 gap-x-8   `}
                  key={innerIndex + 1}
                >
                  <div
                    className={`col-span-3 p-8 conference-item relative  ${
                      isAnyItemASession
                        ? ""
                        : "border-r-4 gradient-border-image"
                    }`}
                  >
                    <p className="  flex items-center gap-x-1.5 md:gap-x-2.5 text-lg md:text-xl lg:text-3xl font-semibold text-tms-tanker-blue-2 leading-3 relative">
                      <MdAccessAlarms className="shrink-0" />
                      {formattedTime}
                    </p>

                    {isAnyItemASession && (
                      <>
                        {innerItem?.sponsor_list?.length && (
                          <div className="pt-6 flex gap-y-5 flex-col items-center w-fit ">
                            <p className="text-sm md:text-base lg:text-2xl font-semibold text-dark-alter ">
                              Sponsor
                            </p>
                            {innerItem?.sponsor_list?.map(
                              (
                                sponsorListItem: any,
                                sponsorListIndex: number
                              ) => {
                                return (
                                  <Image
                                    key={sponsorListIndex}
                                    src={
                                      sponsorListItem?.image_url ?? "imnagw2"
                                    }
                                    // alt={sponsorListItem?.name}
                                    alt={sponsorListItem?.image_alt_tag ?? ""}
                                    width={360}
                                    height={80}
                                    className="w-fit object-contain max-w-[200px] md:max-w-full"
                                  />
                                );
                              }
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <div className="col-span-8 p-8">
                    {!isAnyItemASession && (
                      <>
                        <p className="text-base sm:text-xl md:text-2xl font-medium leading-4 text-[#2a2a2a]">
                          {" "}
                          {innerItem?.name}
                        </p>

                        {innerItem?.speakers_users !== null &&
                          innerItem?.speakers_users?.length > 0 && (
                            <div className="pt-2.5 space-y-2">
                              {innerItem?.speakers_users?.map(
                                (speakerItem: any, speakerindex: number) => {
                                  return (
                                    <div key={speakerindex}>
                                      <p className="text-base md:text-lg  text-[#2a2a2a] font-medium leading-[28px]">
                                        {speakerItem?.title}
                                      </p>
                                      <p className="description text-[#2a2a2a] leading-5 mt-1">
                                        {speakerItem?.description}
                                      </p>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          )}

                        {innerItem?.moderator_list !== null &&
                          innerItem?.moderator_list?.length > 0 && (
                            <div className="pt-2.5 space-y-2">
                              {innerItem?.moderator_list?.map(
                                (
                                  moderatorItem: any,
                                  moderatorIndex: number
                                ) => {
                                  return (
                                    <div key={moderatorIndex}>
                                      <p className="text-base md:text-lg  text-[#2a2a2a] font-medium leading-[28px]">
                                        {moderatorItem?.name}
                                      </p>
                                      <p className="description text-[#2a2a2a] leading-5 mt-1">
                                        {moderatorItem?.post}
                                      </p>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          )}

                        <div
                          className="w-[350px] h-[1px] mt-6"
                          style={{
                            background:
                              "linear-gradient(90deg, #38C7FF 0%, #FFF 100%)",
                          }}
                        />

                        {innerItem?.sponsor_list?.length && (
                          <div className="pt-6 flex gap-x-6 items-center ">
                            <p className="description text-dark-alter">
                              Sponsor
                            </p>
                            {innerItem?.sponsor_list?.map(
                              (
                                sponsorListItem: any,
                                sponsorListIndex: number
                              ) => {
                                return (
                                  <Image
                                    key={sponsorListIndex}
                                    src={
                                      sponsorListItem?.image_url ?? "imnagw2"
                                    }
                                    // alt={sponsorListItem?.name}
                                    alt={sponsorListItem?.image_alt_tag ?? ""}
                                    width={360}
                                    height={80}
                                    className="w-fit object-contain max-w-[200px] md:max-w-full"
                                  />
                                );
                              }
                            )}
                          </div>
                        )}
                      </>
                    )}

                    {isAnyItemASession && (
                      <>
                        <h6 className="text-lg md:text-xl lg:text-2xl  font-bold leading-3 text-[#2a2a2a]">
                          {" "}
                          {innerItem?.post}: {innerItem?.name}{" "}
                        </h6>

                        <div className="pt-2 session-description">
                          <p className="description text-dark-alter">
                            Speakers with high levels of responsibility and
                            knowledge within tanker shipping will reflect on
                            their approaches to implementing sustainable
                            shipping regimes. They will draw on their own
                            experiences to assess the best way to reach
                            ambitious net zero targets while maintaining optimum
                            levels of profitability and operational
                            efficiency. Speakers will discuss the key
                            environmental challenges and opportunities presented
                            to the tanker shipping business, in the context of
                            contemporary market trends in the crude, chemical
                            and product tanker trades, as well as the gas
                            carrier segment. Topics will include:
                          </p>

                          <ul>
                            <li>
                              Setting a course to meet IMO and other
                              environmental targets in the context of uncertain
                              tanker shipping markets
                            </li>
                            <li>
                              How are geopolitical trends influencing
                              market activity?
                            </li>
                            <li>
                              Assessing global demand for oil and oil products
                              and impact on tonnes-mile tanker requirements
                            </li>
                            <li>
                              Newbuilding investment – what will it take
                              to resurrect a strong order book?
                            </li>
                            <li>
                              Best practice strategies to sustain the
                              momentum towards decarbonisation in tanker
                              shipping
                            </li>
                          </ul>
                        </div>

                        {innerItem?.moderator_list && (
                          <div className="mt-4 md:mt-6">
                            <p className="text-dark text-base md:text-lg lg:text-2xl font-semibold leading-5">
                              Moderator
                            </p>

                            <div className="mt-3 space-y-4">
                              {innerItem?.moderator_list?.map(
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
                                        // alt={moderatorItem?.name}
                                        alt={moderatorItem?.image_alt_tag ?? ""}
                                        width={63}
                                        height={63}
                                        className=" w-[65px]- h-[65px]- w-fit"
                                      />
                                      <div>
                                        <p className="text-base md:text-lg lg:text-xl text-tms-tanker-blue-2 font-medium leading-[28px] border-b border-b-[#d9d9d9] pb-2">
                                          {moderatorItem?.name}
                                        </p>
                                        <p className="text-sm sm:text-base md:text-lg text-tms-tanker-blue-2 leading-5 md:mt-1">
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

                        {innerItem?.speakers_list && (
                          <div className="mt-4 md:mt-6">
                            <p className="text-dark text-base md:text-lg lg:text-2xl font-semibold leading-5">
                              Speakers
                            </p>

                            <div className="mt-3 space-y-4">
                              {innerItem?.speakers_list?.map(
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
                                        // alt={spekersItem?.name}
                                        alt={spekersItem?.image_alt_tag ?? ""}
                                        width={63}
                                        height={63}
                                        className=" w-[65px]- h-[65px]- w-fit"
                                      />
                                      <div>
                                        <p className="text-base md:text-lg lg:text-xl text-tms-tanker-blue-2 font-medium leading-[28px] border-b border-b-[#d9d9d9] pb-2">
                                          {spekersItem?.name}
                                        </p>
                                        <p className="text-sm sm:text-base md:text-lg text-tms-tanker-blue-2 leading-5 md:mt-1">
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
                      </>
                    )}
                  </div>
                </div>

                {!isLastItem && (
                  <div
                    className=" bg-white
                 gradient-border-image grid grid-cols-12 gap-x-8"
                  >
                    <div className="col-span-3 py-5 border-r-4 gradient-border-image"></div>
                    <div className="col-span-8 py-5"></div>
                  </div>
                )}
              </>
            );
          });
        })}
      </div>
    </section>
  );
};

export default ConferenceProgrammeSectionTwo;
