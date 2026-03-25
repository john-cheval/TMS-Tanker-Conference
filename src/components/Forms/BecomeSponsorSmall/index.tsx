"use client";
import NumberElement from "@/components/shared/Inputs/NumberElement";
import PackageSelect from "@/components/shared/Inputs/PackageSelect";
import TextAreaElement from "@/components/shared/Inputs/TextAreaElement";
import TextElement from "@/components/shared/Inputs/TextElement";
import { baseUrl } from "@/lib/api";
import ReCaptcha from "@/utils/ReCaptcha";
import React, { useCallback, useRef, useState } from "react";
import { useForm,Controller } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type FormData = {
  fullName: string;
  email: string;
  company: string;
  contact: number;
  comments: string;
  contactCountryCode: string;
  package: string;
};

interface RecaptchaRefType {
  resetCaptcha: () => void;
}

type Props = {
  title?: string | undefined;
  mobileId?: string | undefined;
  packageName?: string;
  packageId?: number | string;
  packageOption?:any[];
};

const BecomeSponsorSmall = ({ mobileId,title,  packageName = "",packageId = 0,packageOption=[] }: Props) => {
  const recaptchaRef = useRef<RecaptchaRefType>(null);
  const [token, setToken] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm<FormData>();

  const handleToken = useCallback((recaptchaToken: string | null) => {
    if (recaptchaToken) {
      setToken(recaptchaToken);
    } else {
      setToken("");
    }
  }, []);

  const router = useRouter();

  const onSubmit = async (data: FormData) => {

    let sponsor_cate = null;
    let sponsor_cate_name = null;
    const [id, title,subtitle] =  data?.package.split(" - ");
    const cleanTitle = title.replace(/[()]/g, "");
    const cleansubtitle = subtitle.replace(/[()]/g, "");
    sponsor_cate = id;
    sponsor_cate_name = cleanTitle + " - " + cleansubtitle;

    if (!packageName ) {
      toast.error("Please Select a package first");
      // const packagesSection = document.getElementById("packages");
      // if (packagesSection) {
      //   packagesSection.scrollIntoView({ behavior: "smooth", block: "start" });
      // }
      return;
    }

    try {
      // const response = await fetch(`${baseUrl}/becomearsvp`, {
      const response = await fetch(`${baseUrl}/becomeasponsor`, {
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
          // sponsor_cate: packageId ? packageId : 0,
          // sponsor_cate_name: packageName ? packageName : "",
          sponsor_cate: sponsor_cate ? sponsor_cate : 0,
          sponsor_cate_name: sponsor_cate_name ? sponsor_cate_name : "",
        }),
      });
      if (response.ok) {
        toast.success("Form submitted successfully!");
        router.push('/thank-you-enquiry');
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
    <div id={mobileId} className=" py-5 px-5 bg-tms-tanker-blue-2 border-tms-tanker-blue ">
      <h4 className="text-white text-2xl font-semibold leading-3 text-center md:text-left mb-2">
        {title}
      </h4>
      {/* <p className="mb-3 text-white text-sm"><span>Note:</span> Please click the "Send Enquiry" button on the package you wish to enquire about.</p> */}
      <form
        className="space-y-2.5 md:space-y-3 lg:space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
            name={`package`}
            control={control}
            rules={{ required: "Please Select Package" }}
            render={({ field }) => (
              <PackageSelect
                {...field}
                packageOption={packageOption} 
                selectedvalue={`${packageId} - (${packageName})`}
                name={`package`}
                errors={errors}
              />
            )}
          />
        <TextElement
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Your Name"
          register={register}
          errors={errors}
          rules={{
            required: "Name is required.",
            pattern: {
              value: /\S+/,
              message: "Name is required."
            }
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
              // value: /^\S+@\S+$/i,
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
            pattern: {
              value: /\S+/,
              message: "Company Name is required."
            }
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
                value: 9,
                message: "The maximum value should be 9.",
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
            required: "Comments is required.",
            pattern: {
              value: /\S+/,
              message: "Comments is required."
            }
          }}
          isLight={true}
        />

        {/* <div className="mt-4 md:mt-6 flex justify-center ">
          <ReCaptcha
            siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            callback={handleToken}
            expiredCallback={() => setToken("")}
            ref={recaptchaRef}
          />
        </div> */}
        <ReCaptcha
            siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            callback={handleToken}
            expiredCallback={() => setToken("")}
            ref={recaptchaRef}
          />

        <button
          className={`text-black py-3 bg-white w-full text-center text-sm md:text-base font-medium 
          ${
            !token ? "cursor-not-allowed opacity/50" : "cursor-pointer"
          }   
          `}
          disabled={!token}
        >
          Send Enquiry
        </button>
      </form>
    </div>
  );
};

export default BecomeSponsorSmall;
