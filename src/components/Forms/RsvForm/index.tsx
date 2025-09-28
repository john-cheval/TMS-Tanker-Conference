"use client";
import TitleSelectElement from "@/components/shared/Inputs/TitleSelectElement";
import React, { useCallback, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import FormRow from "../FormRow";
import TextElement from "@/components/shared/Inputs/TextElement";
import NumberElement from "@/components/shared/Inputs/NumberElement";
import NationalitySelectElement from "@/components/shared/Inputs/NationalitySElectElement";
import ReCaptcha from "@/utils/ReCaptcha";
import { baseUrl } from "@/lib/api";

type FormData = {
  title: string;
  firstName: string;
  lastName: string;
  companyName: string;
  designation: string;
  email: string;
  contactNumber: number;
  nationality: string;
  countryOfResidence: string;
  contactCountryCode: string;
};

interface RecaptchaRefType {
  resetCaptcha: () => void;
}

type Props = {
  description: string;
};

const RsvForm = ({ description }: Props) => {
  const recaptchaRef = useRef<RecaptchaRefType>(null);
  const [token, setToken] = useState("");
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const handleToken = useCallback((recaptchaToken: string | null) => {
    if (recaptchaToken) {
      setToken(recaptchaToken);
    } else {
      setToken("");
    }
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${baseUrl}/becomearsvp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data?.title,
          fname: data?.firstName,
          lname: data?.lastName,
          c_name: data?.companyName,
          country_code: data?.contactCountryCode,
          telephone: data?.contactNumber,
          email_address: data?.email,
          designation: data?.designation,
          nationality: data?.nationality,
          messcountryage: data?.countryOfResidence,
        }),
      });
      if (response.ok) {
        toast.success("Form submitted successfully!");
        reset();

        if (recaptchaRef.current) {
          recaptchaRef.current.resetCaptcha();
        }
        setToken("");
      }
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-2.5 md:gap-y-3 lg:gap-y-5">
        <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
          <div className="flex-1">
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required." }}
              render={({ field }) => (
                <TitleSelectElement
                  {...field}
                  name="title"
                  errors={errors}
                  isLight={true}
                />
              )}
            />
          </div>
          <div className="flex-1 hidden md:block" />
        </FormRow>
        <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
          <TextElement
            label="First Name"
            name="firstName"
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
            name="lastName"
            type="text"
            placeholder="Last Name"
            register={register}
            errors={errors}
            // rules={{
            //   required: "Last Name is required.",
            // }}
          />
        </FormRow>

        <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
          <TextElement
            label="Company Name"
            name="companyName"
            type="text"
            placeholder="Company Name"
            register={register}
            errors={errors}
            rules={{
              required: "Company Name is required.",
            }}
          />

          <TextElement
            label="Designation"
            name="designation"
            type="text"
            placeholder="Designation"
            register={register}
            errors={errors}
            rules={{
              required: "Designation is required.",
            }}
          />
        </FormRow>

        <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
          <div className="flex-1">
            <TextElement
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              register={register}
              errors={errors}
              rules={{
                required: "Email is required.",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address.",
                },
              }}
            />
          </div>

          <div className="flex-1">
            <NumberElement
              label="Mobile Numberr"
              name="contactNumber"
              type="tel"
              setValue={setValue}
              placeholder="Mobile Number"
              register={register}
              errors={errors}
              codeName="contactCountryCode"
              rules={{
                required: "Mobile Number is required.",
                min: {
                  value: 5,
                  message: "The minimum value should be 5.",
                },
                // max: {
                //   value: 15,
                //   message: "The maximum value should be 15.",
                // },
                pattern: {
                  value: /^\d+$/,
                  message: "Please enter a valid number.",
                },
              }}
            />
          </div>
        </FormRow>

        <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
          <div className="flex-1">
            <Controller
              name="nationality"
              control={control}
              rules={{ required: "Nationality is required." }}
              render={({ field }) => (
                <NationalitySelectElement
                  {...field}
                  name="nationality"
                  errors={errors}
                  isLight={true}
                />
              )}
            />
          </div>

          <div className="flex-1">
            <TextElement
              label="Country of Residence"
              name="countryOfResidence"
              type="text"
              placeholder="Country of Residence"
              register={register}
              errors={errors}
              rules={{
                required: "Country of Residence is required.",
              }}
            />
          </div>
        </FormRow>
      </div>

      <p className="description text-black leading-3 mt-5">{description}</p>

      <div className="mt-4 md:mt-6 flex justify-center ">
        <ReCaptcha
          siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
          callback={handleToken}
          ref={recaptchaRef}
        />
      </div>
      <div className=" w-full flex justify-center">
        <button
          type="submit"
          className={`
           text-sm sm:text-base  font-medium leading-5 text-white w-fit  py-3 px-8 md:px-16 text-center mt-4 
          transition-all duration-300 
          ${
            !token
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-tms-purple/90 hover:text-white"
          }
        `}
          disabled={!token}
          style={{
            background: "linear-gradient(93deg, #38C7FF 4.01%, #008F57 82.77%)",
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default RsvForm;
