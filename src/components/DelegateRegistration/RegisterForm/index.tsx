"use client";
import FormRow from "@/components/Forms/FormRow";
import NationalitySelectElement from "@/components/shared/Inputs/NationalitySElectElement";
import NatureOfCompanySelectElement from "@/components/shared/Inputs/NatureOfCompanySelect";
import NumberElement from "@/components/shared/Inputs/NumberElement";
import TextAreaElement from "@/components/shared/Inputs/TextAreaElement";
import TextElement from "@/components/shared/Inputs/TextElement";
import TitleSelectElement from "@/components/shared/Inputs/TitleSelectElement";
import { accordionVariants } from "@/constants/motionVariants";
import { baseUrl } from "@/lib/api";
import ReCaptcha from "@/utils/ReCaptcha";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { toast } from "sonner";

type Props = {
  heading?: string;
  priceDetails: {
    title: string;
    description: string;
    min_delegates: string;
    price: string;
  }[];
  NatureOfCompanyList: any;
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
interface RecaptchaRefType {
  resetCaptcha: () => void;
}
const DelegateRegisterForm = ({
  heading,
  priceDetails,
  NatureOfCompanyList,
}: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [token, setToken] = useState("");
  const recaptchaRef = useRef<RecaptchaRefType>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData & { termsAccepted: boolean }>({
    defaultValues: {
      planType: priceDetails[0]?.title || "Individual",
      numberOfDelegates: parseInt(priceDetails[0]?.min_delegates) || 1,
      delegates: [],
      termsAccepted: false,
    },
    mode: "onBlur",
  });

  const termsAccepted = watch("termsAccepted");
  const isFormValid = termsAccepted && token;

  const handleToken = useCallback((recaptchaToken: string | null) => {
    if (recaptchaToken) {
      setToken(recaptchaToken);
    } else {
      setToken("");
    }
  }, []);

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

  // Add this to your DelegateRegisterForm component
  // after the onSubmit function
  const onSubmit = async (data: any) => {
    const formData = new FormData();

    // Append basic form data
    formData.append("booking_type", selectedPlan);
    formData.append("single_seat_price", ticketPrice.toFixed(2));
    formData.append("total_seat", data.numberOfDelegates.toString());
    formData.append("total_withouttax", subtotal.toFixed(2));
    formData.append("total_tax", vat.toFixed(2));
    formData.append("total_amount", grandTotal.toFixed(2));

    // Assuming you'll add a state for the checkbox
    formData.append("terms_conditions", "1"); // Or `data.agreedToTerms ? '1' : '0'`

    data.delegates.forEach((delegate: any, index: number) => {
      formData.append(`delegate[${index}][title]`, delegate.title);
      formData.append(`delegate[${index}][fname]`, delegate.firstName);
      formData.append(`delegate[${index}][lname]`, delegate.lastName);
      formData.append(`delegate[${index}][nationality]`, delegate.nationality);
      formData.append(`delegate[${index}][country]`, delegate.country);
      formData.append(
        `delegate[${index}][country_code]`,
        delegate.contactCountryCode
      );
      formData.append(
        `delegate[${index}][telephone]`,
        delegate.contact.toString()
      );
      formData.append(`delegate[${index}][email_address]`, delegate.email);
      formData.append(`delegate[${index}][job_title]`, delegate.designation); // Note: Renamed from designation
      formData.append(`delegate[${index}][c_name]`, delegate.company);
      formData.append(
        `delegate[${index}][tax_number]`,
        delegate.taxRegisterationNumber
      );
      formData.append(
        `delegate[${index}][nature_company]`,
        delegate.natureOfCompany
      );
      formData.append(
        `delegate[${index}][nature_company_other]`,
        delegate.ifOthers
      );
      formData.append(
        `delegate[${index}][additional_details]`,
        delegate.addditionalDetails
      );
    });

    try {
      const response = await fetch(`${baseUrl}/registergueststore`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        // reset();
        if (recaptchaRef.current) {
          recaptchaRef.current.resetCaptcha();
        }
        setToken("");
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className=" mt-8 lg:mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-[#f5f5f5]  pt-5 md:pt-8 lg:pt-10  xl:pt-11 pb-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 3xl:px-36">
          <h3
            className=" main-heading-2 w-fit md:mx-auto font-bold"
            style={{
              background:
                "linear-gradient(90deg, #38C7FF 0.19%, #00A25D 66.61%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
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
        <div className="bg-tms-green  pt-8 sm:pt-10 lg:pt-12 xl:pt-14 px-5 sm:px-6 md:px-10 lg:px-16 xl:px-[70px] pb-7 md:pb-10 lg:pb-12 xl:pb-16 2xl:pb-20 mt-[-50px] w-full">
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
                    <span className="main-heading-2 font-bold !text-white">
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
                            <p className="mb-4 text-white font-medium text-xl md:text-2xl leading-5">
                              Personal Details
                            </p>

                            <div className=" flex flex-col gap-y-2.5 md:gap-y-3 lg:gap-y-5">
                              <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
                                <div className="flex-1">
                                  <Controller
                                    name={`delegates.${index}.title`}
                                    control={control}
                                    rules={{ required: "Title is required." }}
                                    render={({ field }) => (
                                      <TitleSelectElement
                                        {...field}
                                        name={`delegates.${index}.title`}
                                        errors={errors}
                                      />
                                    )}
                                  />
                                </div>
                                <div className="flex-1 hidden md:block" />
                              </FormRow>
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
                                  isLight={true}
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
                                  isLight={true}
                                />
                              </FormRow>

                              <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
                                <div className="flex-1">
                                  <Controller
                                    name={`delegates.${index}.nationality`}
                                    control={control}
                                    rules={{
                                      required: "Nationality is required.",
                                    }}
                                    render={({ field }) => (
                                      <NationalitySelectElement
                                        {...field}
                                        name={`delegates.${index}.nationality`}
                                        errors={errors}
                                      />
                                    )}
                                  />
                                </div>

                                <div className=" flex-1">
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
                                    isLight={true}
                                  />
                                </div>
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
                                    isLight={true}
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
                                    isLight={true}
                                  />
                                </div>
                              </FormRow>
                            </div>
                          </div>

                          <div className="mt-5 md:mt-7 lg:mt-9">
                            <p className="mb-4 text-white font-medium text-xl md:text-2xl leading-5">
                              Company Details
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
                                  isLight={true}
                                  isIcon={true}
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
                                  isLight={true}
                                  isIcon={true}
                                />
                              </FormRow>

                              <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
                                <div className="flex-1">
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
                                    isLight={true}
                                    isIcon={true}
                                  />
                                </div>

                                <div className="flex-1">
                                  <Controller
                                    name={`delegates.${index}.natureOfCompany`}
                                    control={control}
                                    rules={{
                                      required:
                                        "Nature of Company is required.",
                                    }}
                                    render={({ field }) => (
                                      <NatureOfCompanySelectElement
                                        {...field}
                                        name={`delegates.${index}.natureOfCompany`}
                                        errors={errors}
                                        companyListData={NatureOfCompanyList}
                                        isDark={true}
                                      />
                                    )}
                                  />
                                </div>
                              </FormRow>

                              <TextAreaElement
                                label="If other, Please specify here"
                                name={`delegates.${index}.ifOthers`}
                                placeholder="If other, Please specify here"
                                register={register}
                                errors={errors}
                                rows={3}
                                isLight={true}
                                isIcon={true}
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
                                isLight={true}
                                isIcon={true}
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
              // value=""
              {...register("termsAccepted", { required: true })}
              className="w-5 h-5 text-blue-600 outline-0  border-white rounded-sm focus:ring-0 dark:bg-gray-700 bg-transparent "
            />{" "}
            <label
              htmlFor="default-checkbox"
              className="ms-2 description text-white leading-3"
            >
              I agree to the delegate booking{" "}
              <Link
                href="/delegate-booking-terms-and-conditions"
                className="underline"
              >
                Terms and Conditions
              </Link>
            </label>
          </div>
          {errors.termsAccepted && (
            <p className="text-red-500 text-sm mt-1">
              Please accept the terms and conditions.
            </p>
          )}
          <div className="mt-4 md:mt-6 flex justify-center ">
            <ReCaptcha
              siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              callback={handleToken}
              ref={recaptchaRef}
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className={`bg-white text-black text-base font-medium leading-5  py-3 px-8 flex gap-x-2.5 group items-center border border-white hover:bg-transparent hover:text-white transiiton-colors duration-300 ${
                isFormValid ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DelegateRegisterForm;
