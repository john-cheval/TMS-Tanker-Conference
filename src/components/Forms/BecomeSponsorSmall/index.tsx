"use client";
import NumberElement from "@/components/shared/Inputs/NumberElement";
import TextAreaElement from "@/components/shared/Inputs/TextAreaElement";
import TextElement from "@/components/shared/Inputs/TextElement";
import { baseUrl } from "@/lib/api";
import ReCaptcha from "@/utils/ReCaptcha";
import React, { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  fullName: string;
  email: string;
  company: string;
  contact: number;
  comments: string;
  contactCountryCode: string;
};

interface RecaptchaRefType {
  resetCaptcha: () => void;
}

type Props = {
  title?: string | undefined;
};

const BecomeSponsorSmall = ({ title }: Props) => {
  const recaptchaRef = useRef<RecaptchaRefType>(null);
  const [token, setToken] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
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
          name: data?.fullName,
          email: data?.email,
          companyName: data?.company,
          contactno: data?.contact,
          comments: data?.comments,
          country_code: data?.contactCountryCode,
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
    <div className=" py-5 px-5 bg-tms-tanker-blue-2 border-tms-tanker-blue ">
      <h4 className="text-white text-2xl font-semibold leading-3 text-center md:text-left mb-5">
        {title}
      </h4>
      <form
        className="space-y-2.5 md:space-y-3 lg:space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextElement
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Your Name"
          register={register}
          errors={errors}
          rules={{
            required: "Name is required.",
          }}
          isLight={true}
        />

        <TextElement
          label="Email Address"
          name="email"
          type="email"
          placeholder="Your Email"
          register={register}
          errors={errors}
          rules={{
            required: "Email is required.",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email address.",
            },
          }}
          isLight={true}
        />
        <TextElement
          label="Name of the Company "
          name="company"
          type="text"
          placeholder="Name of the Company "
          register={register}
          errors={errors}
          rules={{
            required: "Company Name is required.",
          }}
          isLight={true}
        />
        <div className="flex-1">
          <NumberElement
            label="Contact Number"
            name="contact"
            codeName="contactCountryCode"
            type="tel"
            setValue={setValue}
            placeholder="Contact Number"
            register={register}
            errors={errors}
            rules={{
              required: "Number is required.",
              minLength: {
                value: 5,
                message: "The minimum value should be 5.",
              },
              maxLength: {
                value: 15,
                message: "The maximum value should be 15.",
              },
              pattern: {
                value: /^\d+$/,
                message: "Please enter a valid number.",
              },
            }}
            isLight={true}
          />
        </div>
        <TextAreaElement
          label="Comments"
          name="comments"
          placeholder="Additional Comments"
          register={register}
          errors={errors}
          rows={3}
          rules={{
            required: "comments is required.",
          }}
          isLight={true}
        />

        <div className="mt-4 md:mt-6 flex justify-center ">
          <ReCaptcha
            siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            callback={handleToken}
            ref={recaptchaRef}
          />
        </div>

        <button
          className={`text-black py-3 bg-white w-full text-center text-sm md:text-base font-medium ${
            !token ? "cursor-not-allowed" : "cursor-pointer"
          } `}
          disabled={!token}
        >
          Send Enquiry
        </button>
      </form>
    </div>
  );
};

export default BecomeSponsorSmall;
