"use client";
import FormRow from "@/components/Forms/FormRow";
import NumberElement from "@/components/shared/Inputs/NumberElement";
import TextAreaElement from "@/components/shared/Inputs/TextAreaElement";
import TextElement from "@/components/shared/Inputs/TextElement";
import { accordionVariants } from "@/constants/motionVariants";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiGeminiFill } from "react-icons/ri";

type Props = {
  heading?: string;
  priceDetails: {
    title: string;
    description: string;
    min_delegates: string;
    price: string;
  }[];
};

interface DelegateData {
  title: string;
  firstName: string;
  lastName: string;
  nationality: string;
  country: string;
  contact: number;
  email: string;
  designation: string;
  company: string;
  natureOfCompany: string;
  addditionalDetails: string;
  taxRegisterationNumber: string;
  ifOthers: string;
  contactCountryCode: string;
}

interface FormData {
  planType: string;
  numberOfDelegates: number;
  delegates: DelegateData[];
}

const DelegateRegisterForm = ({ heading, priceDetails }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      planType: priceDetails[0]?.title || "Individual",
      numberOfDelegates: parseInt(priceDetails[0]?.min_delegates) || 1,
      delegates: [],
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "delegates",
  });

  const selectedPlan = watch("planType");
  const numberOfDelegates = watch("numberOfDelegates");

  const findSelectedPlan = priceDetails.find(
    (item) => item.title === selectedPlan
  );

  useEffect(() => {
    if (findSelectedPlan) {
      const minDelegates = parseInt(findSelectedPlan.min_delegates);
      setValue("numberOfDelegates", minDelegates, { shouldValidate: true });
    }
  }, [selectedPlan, findSelectedPlan, setValue]);

  useEffect(() => {
    const currentCount = fields.length;
    if (numberOfDelegates > currentCount) {
      for (let i = currentCount; i < numberOfDelegates; i++) {
        append({
          title: "",
          firstName: "",
          lastName: "",
          nationality: "",
          country: "",
          contact: 0,
          email: "",
          designation: "",
          company: "",
          natureOfCompany: "",
          addditionalDetails: "",
          taxRegisterationNumber: "",
          ifOthers: "",
          contactCountryCode: "+971",
        });
      }
    } else if (numberOfDelegates < currentCount) {
      for (let i = currentCount; i > numberOfDelegates; i--) {
        remove(i - 1);
      }
    }
  }, [numberOfDelegates, fields.length, append, remove]);

  const ticketPrice = findSelectedPlan ? parseFloat(findSelectedPlan.price) : 0;
  const subtotal = ticketPrice * (numberOfDelegates ?? 0);
  const vat = subtotal * 0.05;
  const grandTotal = subtotal + vat;

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className=" mt-8 lg:mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-[#f5f5f5] rounded-2xl pt-5 md:pt-8 lg:pt-10  xl:pt-11 pb-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 3xl:px-36">
          <h3 className="gradient-text main-heading-2 w-fit md:mx-auto">
            {heading}
          </h3>
          <div className="mt-3 md:mt-5 lg:mt-7">
            <p className="description text-dark-alter text-left md:text-center font-bold ">
              Select Plan Type
            </p>
            <div className="flex flex-col md:flex-row justify-center flex-wrap gap-1 md:gap-x-5 xl:gap-x-7 mt-3 md:mt-4">
              {priceDetails?.map((item, index) => {
                return (
                  <label
                    className="flex items-center mb-4 cursor-pointer"
                    key={index}
                  >
                    <input
                      id={item?.title}
                      type="radio"
                      value={item?.title}
                      {...register("planType", {
                        required: "Plan type is required.",
                      })}
                      className="peer sr-only flex-grow-1"
                    />
                    <div
                      className="w-5 h-5 border border-black rounded-sm flex items-center justify-center 
                   peer-checked:bg-[#0078BB] peer-checked:border-[#0078BB]  "
                    >
                      <div className="w-2 h-2 rounded-full bg-white scale-0 transition-transform duration-200 peer-checked:scale-100"></div>
                    </div>
                    <span className="ms-2 leading-5 text-dark-alter text-sm md:text-base lg:text-lg font-bold ">
                      {item?.title}{" "}
                      {item?.description && (
                        <span className="font-normal">
                          ({item?.description})
                        </span>
                      )}
                    </span>
                  </label>
                );
              })}
            </div>
            {errors.planType && (
              <p className="text-red-500 text-center">
                {errors.planType.message}
              </p>
            )}

            <div className="flex  items-center gap-x-4 md:justify-center md:mt-6">
              <label className="text-dark-alter text-sm sm:text-base leading-3 font-bold">
                Number of delegates{" "}
              </label>
              <input
                type="number"
                min={parseInt(findSelectedPlan?.min_delegates ?? "1")}
                max={20}
                {...register("numberOfDelegates", {
                  valueAsNumber: true,
                  required: "Number of delegates is required",
                  min: {
                    value: parseInt(findSelectedPlan?.min_delegates ?? "1"),
                    message: `Value must be ${parseInt(
                      findSelectedPlan?.min_delegates ?? "1"
                    )} or more for ${findSelectedPlan?.title ?? ""} plans`,
                  },
                  max: {
                    value: 20,
                    message: "Maximum number of delegates is 20",
                  },
                })}
                className="border border-black rounded-sm focus:none py-2 md:py-3 pl-3 md:pl-5 lg:pl-7 pr-2 focus:outline-none max-w-20 md:max-w-[100px]"
              />
              {errors.numberOfDelegates && (
                <p className="text-red-500 text-center">
                  {errors.numberOfDelegates.message}
                </p>
              )}
            </div>

            <div className="mt-5 md:mt-8 lg:mt-10 md:max-w-[450px] border-t border-t-black md:mx-auto">
              <div className="py-4 md:py-6 border-b border-b-black">
                <p className="text-dark-alter text-sm sm:text-base font-semibold leading-3 flex justify-between">
                  Ticket Price <span>$ {ticketPrice.toFixed(2)}</span>
                </p>
                <p className="text-dark-alter text-sm sm:text-base font-semibold leading-3 flex justify-between">
                  Subtotal <span>$ {subtotal.toFixed(2)}</span>
                </p>
                <p className="text-dark-alter text-sm sm:text-base font-semibold leading-3 flex justify-between">
                  5% VAT <span>$ {vat.toFixed(2)}</span>
                </p>
              </div>
              <p className="text-dark-alter pt-4 md:pt-6 text-sm sm:text-base font-semibold leading-3 flex justify-between">
                Total Payable <span>$ {grandTotal.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-tms-blue rounded-2xl pt-8 sm:pt-10 lg:pt-12 xl:pt-14 px-5 sm:px-6 md:px-10 lg:px-16 xl:px-[70px] pb-7 md:pb-10 lg:pb-12 xl:pb-16 2xl:pb-20 mt-[-50px] w-full">
          <div className="pb-4 md:pb-6 lg:pb-8">
            {fields.map((field, index) => {
              const isAccordionOpen = openIndex === index;
              return (
                <div
                  className={`${
                    index === 0 ? "border-t border-t-white" : ""
                  } border-b border-b-white py-4 md:pt-5 md:pb-5 lg:pb-8`}
                  key={field.id}
                >
                  <button
                    className="flex items-center justify-between w-full text-white"
                    type="button"
                    onClick={() => toggleAccordion(index as number)}
                  >
                    <span className="main-heading-2 !text-white">
                      Delegate {index + 1}
                    </span>
                    {isAccordionOpen ? (
                      <FaMinus className="text-white font-bold text-lg" />
                    ) : (
                      <FaPlus className="text-white font-bold text-lg" />
                    )}
                  </button>
                  <AnimatePresence>
                    {isAccordionOpen && (
                      <motion.div
                        key="accordion-content"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={accordionVariants}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 md:pt-7 lg:pt-9">
                          <div>
                            <p className="flex items-center gap-x-2.5 mb-4">
                              <RiGeminiFill color="#fff" />
                              <span className="text-white text-base font-bold leading-5">
                                {" "}
                                Personal detail
                              </span>
                            </p>

                            <div className=" flex flex-col gap-y-2.5 md:gap-y-3 lg:gap-y-5">
                              <TextElement
                                label="Title"
                                name={`delegates.${index}.title`}
                                type="text"
                                placeholder="Title"
                                register={register}
                                errors={errors}
                                rules={{
                                  required: "Title is required.",
                                }}
                              />
                              <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
                                <TextElement
                                  label="First Name"
                                  name={`delegates.${index}.firstName`}
                                  type="text"
                                  placeholder="First Name"
                                  register={register}
                                  errors={errors}
                                  rules={{
                                    required: "First Name is required.",
                                  }}
                                />

                                <TextElement
                                  label="Last Name"
                                  name={`delegates.${index}.lastName`}
                                  type="text"
                                  placeholder="Last Name"
                                  register={register}
                                  errors={errors}
                                  rules={{
                                    required: "Last Name is required.",
                                  }}
                                />
                              </FormRow>

                              <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
                                <TextElement
                                  label="Nationality"
                                  name={`delegates.${index}.nationality`}
                                  type="text"
                                  placeholder="Nationality"
                                  register={register}
                                  errors={errors}
                                  rules={{
                                    required: "Nationality is required.",
                                  }}
                                />

                                <TextElement
                                  label="Country of Residence"
                                  name={`delegates.${index}.country`}
                                  type="text"
                                  placeholder="Country of Residence"
                                  register={register}
                                  errors={errors}
                                  rules={{
                                    required:
                                      "Country of Residence is required.",
                                  }}
                                />
                              </FormRow>

                              <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
                                <div className="flex-1">
                                  <NumberElement
                                    label="Mobile"
                                    name={`delegates.${index}.contact`}
                                    codeName={`delegates.${index}.contactCountryCode`}
                                    type="number"
                                    setValue={setValue}
                                    placeholder="Mobile"
                                    register={register}
                                    errors={errors}
                                    rules={{
                                      required: "Number is required.",
                                      min: {
                                        value: 5,
                                        message:
                                          "The minimum value should be 5.",
                                      },
                                      pattern: {
                                        value: /^\d+$/,
                                        message: "Please enter a valid number.",
                                      },
                                    }}
                                  />
                                </div>

                                <div className="flex-1">
                                  <TextElement
                                    label="Email Address"
                                    name={`delegates.${index}.email`}
                                    type="email"
                                    placeholder="Email"
                                    register={register}
                                    errors={errors}
                                    rules={{
                                      required: "Email is required.",
                                      pattern: {
                                        value: /^\S+@\S+$/i,
                                        message:
                                          "Please enter a valid email address.",
                                      },
                                    }}
                                  />
                                </div>
                              </FormRow>
                            </div>
                          </div>

                          <div className="mt-5 md:mt-7 lg:mt-9">
                            <p className="flex items-center gap-x-2.5 mb-4">
                              <RiGeminiFill color="#fff" />
                              <span className="text-white text-base font-bold leading-5">
                                {" "}
                                Company detail
                              </span>
                            </p>

                            <div className=" flex flex-col gap-y-2.5 md:gap-y-3 lg:gap-y-5">
                              <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
                                <TextElement
                                  label="Designation"
                                  name={`delegates.${index}.designation`}
                                  type="text"
                                  placeholder="Designation"
                                  register={register}
                                  errors={errors}
                                  rules={{
                                    required: "Designation is required.",
                                  }}
                                />

                                <TextElement
                                  label="Company"
                                  name={`delegates.${index}.company`}
                                  type="text"
                                  placeholder="Company"
                                  register={register}
                                  errors={errors}
                                  rules={{
                                    required: "Company is required.",
                                  }}
                                />
                              </FormRow>

                              <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
                                <TextElement
                                  label="Tax Registration Number"
                                  name={`delegates.${index}.taxRegisterationNumber`}
                                  type="number"
                                  placeholder="Tax Registration Number"
                                  register={register}
                                  errors={errors}
                                  rules={{
                                    required:
                                      "Tax Registration Number is required.",
                                  }}
                                />

                                <TextElement
                                  label="Nature of Company"
                                  name={`delegates.${index}.natureOfCompany`}
                                  type="text"
                                  placeholder="Nature of Company"
                                  register={register}
                                  errors={errors}
                                  rules={{
                                    required: "Nature of Company is required.",
                                  }}
                                />
                              </FormRow>

                              <TextAreaElement
                                label="If other, Please specify here"
                                name={`delegates.${index}.ifOthers`}
                                placeholder="If other, Please specify here"
                                register={register}
                                errors={errors}
                                rows={3}
                              />

                              <TextAreaElement
                                label="Additional Details"
                                name={`delegates.${index}.addditionalDetails`}
                                placeholder="Additional Details"
                                register={register}
                                errors={errors}
                                rows={3}
                                rules={{
                                  required: "Additional Details is required.",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-5 h-5 text-blue-600 outline-0  border-white rounded-sm focus:ring-0 dark:bg-gray-700 bg-transparent "
            />{" "}
            <label
              htmlFor="default-checkbox"
              className="ms-2 description text-white leading-3"
            >
              I agree to the delegate booking{" "}
              <Link href="#" className="underline">
                Terms and Conditions
              </Link>
            </label>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-white text-tms-purple text-lg font-bold leading-5 rounded-lg py-6 px-5 flex gap-x-2.5 group items-center"
            >
              Proceed to Pay{" "}
              <MdOutlineKeyboardArrowRight className="text-2xl text-tms-purple group-hover:translate-x-1 group-hover:text-tms-blue- transition-all duration-300 ease-in-out" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DelegateRegisterForm;
