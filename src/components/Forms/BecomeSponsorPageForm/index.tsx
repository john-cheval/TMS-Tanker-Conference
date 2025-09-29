"use client";
import TitleSelectElement from "@/components/shared/Inputs/TitleSelectElement";
import React, { useCallback, useRef, useState } from "react";
import { Controller, useForm, Path } from "react-hook-form";
import FormRow from "../FormRow";
import TextElement from "@/components/shared/Inputs/TextElement";
import NumberElement from "@/components/shared/Inputs/NumberElement";
import ImageUploadElemet from "@/components/shared/Inputs/ImageUploadElemet";
import BioUploadElemet from "@/components/shared/Inputs/BioUploadElement";
import NatureOfCompanySelectElement from "@/components/shared/Inputs/NatureOfCompanySelect";
import TextAreaElementTwo from "@/components/shared/Inputs/TextAreaElementTwo";
import useMediaQuery from "@/hooks/useMediaQuery";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { toast } from "sonner";
import ReCaptcha from "@/utils/ReCaptcha";
import { baseUrl } from "@/lib/api";
interface AboutYouData {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  contact: number;
  linkedinUrl: string;
  headshotFile: FileList | null;
  bio: FileList | null;
  contactCountryCode: string;
}

interface CompanyData {
  designation: string;
  company: string;
  natureOfCompany: string;
  ifOthers: string;
}

interface PresentationData {
  presentationTitle: string;
  abstract: string;
  takewayas: string;
  aboutPresentation: string;
  paperSubmit: FileList | null;
}

type FormData = {
  aboutYou: AboutYouData;
  aboutCompany: CompanyData;
  aboutPresentation: PresentationData;
};

interface RecaptchaRefType {
  resetCaptcha: () => void;
}
type Props = {
  formDescription: string;
  NatureOfCompany: any;
};
const BecomeSponsorPageForm = ({ formDescription, NatureOfCompany }: Props) => {
  const recaptchaRef = useRef<RecaptchaRefType>(null);
  const [token, setToken] = useState("");
  const isSmallScreen = useMediaQuery("(max-width: 650px)");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
    reset,
    setFocus,
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
      const formData = new FormData();

      // Append all text fields to the FormData object
      formData.append("title", data?.aboutYou?.title);
      formData.append("fname", data?.aboutYou.firstName);
      formData.append("lname", data?.aboutYou.lastName);
      formData.append("email_address", data?.aboutYou?.email);
      formData.append("country_code", data?.aboutYou?.contactCountryCode);
      formData.append("telephone", data?.aboutYou?.contact.toString()); // Convert number to string
      formData.append("linkedin_url", data?.aboutYou?.linkedinUrl);

      formData.append("designation", data?.aboutCompany?.designation);
      formData.append("c_name", data?.aboutCompany?.company);
      formData.append("nature_company", data?.aboutCompany?.natureOfCompany);
      formData.append("nature_company_other", data?.aboutCompany?.ifOthers);

      formData.append("job_title", data?.aboutPresentation?.presentationTitle);
      formData.append("abstract_details", data?.aboutPresentation?.abstract);
      formData.append(
        "your_presentation",
        data?.aboutPresentation?.aboutPresentation
      );
      formData.append("additional_details", data?.aboutPresentation?.takewayas);

      // Append file fields to FormData
      // Always check if the file exists before appending
      if (data?.aboutYou?.headshotFile?.[0]) {
        formData.append("headshot", data.aboutYou.headshotFile[0]);
      }
      if (data?.aboutYou?.bio?.[0]) {
        formData.append("bio", data.aboutYou.bio[0]);
      }
      if (data?.aboutPresentation?.paperSubmit?.[0]) {
        formData.append(
          "papers_details",
          data.aboutPresentation.paperSubmit[0]
        );
      }

      const response = await fetch(`${baseUrl}/becomeaspeaker`, {
        method: "POST",

        body: formData,
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        reset();

        if (recaptchaRef.current) {
          recaptchaRef.current.resetCaptcha();
        }
        setToken("");
      } else {
        // You might want to handle error responses from the server here
        const errorData = await response.json();
        console.error("Server error:", errorData);
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  // This is the new function to find the first nested error
  const getFirstErrorPath = (errors: any, path: string = ""): string | null => {
    const errorKeys = Object.keys(errors);

    for (const key of errorKeys) {
      const currentPath = path ? `${path}.${key}` : key;

      // If the current field has an error message, we've found it
      if (errors[key]?.message) {
        return currentPath;
      }

      // If it's a nested object, check for errors inside it
      if (
        typeof errors[key] === "object" &&
        errors[key] !== null &&
        !Array.isArray(errors[key])
      ) {
        const nestedErrorPath = getFirstErrorPath(errors[key], currentPath);
        if (nestedErrorPath) {
          return nestedErrorPath;
        }
      }
    }
    return null;
  };

  const onError = (errors: any) => {
    // Find the full path to the first error
    const firstErrorName = getFirstErrorPath(errors);

    // If a field with an error is found, set focus on it
    if (firstErrorName) {
      setFocus(firstErrorName as Path<FormData>);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="  bg-tms-green px-5 md:px-10 lg:px-16  xl:px-[72px]pb-8 md:pb-12 lg:pb-16 xl:pb-20 border border-tms-green border-b-0">
        <h4 className=" form-heading text-white  pt-8 md:pt-10 lg:pt-14 mb-4  md:mb-5">
          About You
        </h4>

        <div className="flex flex-col gap-y-2.5 md:gap-y-3 lg:gap-y-5">
          <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
            <div className="flex-1">
              <Controller
                name="aboutYou.title"
                control={control}
                rules={{ required: "Title is required." }}
                render={({ field }) => (
                  <TitleSelectElement
                    {...field}
                    name="aboutYou.title"
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
              name="aboutYou.firstName"
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
              name="aboutYou.lastName"
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
              <TextElement
                label="Email"
                name="aboutYou.email"
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
                isLight={true}
              />
            </div>

            <div className="flex-1">
              <NumberElement
                label="Mobile Numberr"
                name="aboutYou.contact"
                codeName="aboutYou.contactCountryCode"
                type="tel"
                setValue={setValue}
                placeholder="Mobile "
                register={register}
                errors={errors}
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
                isLight={true}
              />
            </div>
          </FormRow>

          <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
            <div className="flex-1">
              <TextElement
                label="LinkedIn Profile url "
                name="aboutYou.linkedinUrl"
                type="text"
                placeholder="LinkedIn Profile url"
                register={register}
                errors={errors}
                rules={{
                  required: "LinkedIn Url is required.",
                  pattern: {
                    // Regex to validate a URL format (including http/https)
                    value: /^(http|https):\/\/[^ "]+$/,
                    message: "Please enter a valid URL.",
                  },
                }}
                isLight={true}
              />
            </div>

            <div className="flex-1">
              <Controller
                name="aboutYou.headshotFile"
                control={control}
                rules={{
                  required: "Image is required.",
                  validate: {
                    isImage: (value: FileList | null) => {
                      if (!value || value.length === 0)
                        return "Image is required.";
                      const file = value.item(0);
                      if (!file) return "Image is required.";
                      const validExtensions = [".jpeg", ".jpg", ".png"];
                      const lowerName = file.name.toLowerCase();
                      if (
                        !validExtensions.some((ext) => lowerName.endsWith(ext))
                      ) {
                        return "Invalid file type. Only PNG, JPEG, and JPG are allowed.";
                      }
                      if (lowerName.endsWith(".webp")) {
                        return "WebP format is not allowed.";
                      }
                      return true;
                    },
                    maxSize: (value: FileList | null) => {
                      // Size validation should be handled in ImageUploadElemet before setting value
                      return true;
                    },
                  },
                }}
                render={({ field: { name, onChange, value } }) => (
                  <ImageUploadElemet
                    name={name as Path<FormData>}
                    onChange={onChange}
                    value={value}
                    errors={errors}
                  />
                )}
              />
            </div>
          </FormRow>

          <FormRow className="md:flex-row flex-col md:-mt-6 gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
            <div className="flex-1">
              <Controller
                name="aboutYou.bio"
                control={control}
                rules={{
                  required: "Bio file is required.",
                  validate: {
                    isPdf: (files: FileList | null) => {
                      if (!files || !files[0]) return "File is required.";
                      const file = files[0];
                      if (file.type !== "application/pdf") {
                        return "Invalid file type. Only PDF is allowed.";
                      }
                      return true;
                    },
                    maxSize: (files: FileList | null) => {
                      const maxFileSize = 5 * 1024 * 1024; // 5 MB
                      if (files && files[0] && files[0].size > maxFileSize) {
                        return "File size must be 5MB or less.";
                      }
                      return true;
                    },
                  },
                }}
                render={({ field: { name, onChange, value } }) => (
                  <BioUploadElemet
                    name={name as Path<FormData>}
                    onChange={onChange}
                    value={value}
                    errors={errors}
                  />
                )}
              />
            </div>
            <div className="flex-1 hidden md:block" />
          </FormRow>
        </div>
      </div>

      <div className=" bg-white px-5 md:px-10 lg:px-16  xl:px-[72px] pb-6 md:pb-8  lg:pb-11 -mt-0 md:-mt-10 border border-tms-tanker-blue">
        <div>
          <h4 className=" form-heading pt-8 md:pt-10 lg:pt-14 mb-4  md:mb-5 gradient-text w-fit">
            About the company
          </h4>
          <div className="flex flex-col gap-y-2.5 md:gap-y-3 lg:gap-y-5">
            <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
              <TextElement
                label="Designation"
                name="aboutCompany.designation"
                type="text"
                placeholder="Designation"
                register={register}
                errors={errors}
                rules={{
                  required: "Designation is required.",
                }}
              />

              <TextElement
                label="Company Name"
                name="aboutCompany.company"
                type="text"
                placeholder="Company Name"
                register={register}
                errors={errors}
                rules={{
                  required: "Company Nameis required.",
                }}
              />
            </FormRow>

            <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
              <div className="flex-1">
                <Controller
                  name="aboutCompany.natureOfCompany"
                  control={control}
                  rules={{ required: "Nature of Company is required." }}
                  render={({ field }) => (
                    <NatureOfCompanySelectElement
                      {...field}
                      name="aboutCompany.natureOfCompany"
                      errors={errors}
                      companyListData={NatureOfCompany}
                      isLight={true}
                    />
                  )}
                />
              </div>

              <div className="flex-1">
                <TextElement
                  label="Please specify others"
                  name="aboutCompany.ifOthers"
                  type="text"
                  placeholder="Please specify others"
                  register={register}
                  errors={errors}
                />
              </div>
            </FormRow>
          </div>
        </div>

        <div>
          <h4 className="form-heading gradient-text w-fit pt-6 md:pt-8 mb-4  md:mb-5">
            About your presentation
          </h4>
          <div className="flex flex-col gap-y-2.5 md:gap-y-3 lg:gap-y-5">
            <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
              <div className="flex-1">
                <TextElement
                  label="Title of your presentation"
                  name="aboutPresentation.presentationTitle"
                  type="text"
                  placeholder="Title of your presentation"
                  register={register}
                  errors={errors}
                  rules={{
                    required: "Presentation Title is required.",
                  }}
                />
              </div>

              <div className="flex-1 hidden md:block" />
            </FormRow>
            <TextAreaElementTwo
              label="Abstract"
              name="aboutPresentation.abstract"
              placeholder="Abstract"
              register={register}
              errors={errors}
              rows={3}
              rules={{
                required: "Abstract is required.",
              }}
              wordLimit={500}
            />

            <TextAreaElementTwo
              label="Key Takeaways"
              name="aboutPresentation.takewayas"
              placeholder="What would be the three key takeaways from your session? "
              register={register}
              errors={errors}
              rows={3}
              rules={{
                required: "Key Takeaways is required.",
              }}
              wordLimit={500}
            />

            <TextAreaElementTwo
              label="About Presentation"
              name="aboutPresentation.aboutPresentation"
              placeholder="Tell us a little more about you and your presentation "
              register={register}
              errors={errors}
              rows={isSmallScreen ? 8 : 4}
              rules={{
                required: "About Presentation is required.",
              }}
              isBlue={true}
              wordLimit={500}
              isFakePlaceHolder={true}
            />

            <div className="flex-1">
              <Controller
                name="aboutPresentation.paperSubmit"
                control={control}
                rules={{
                  required: "Bio file is required.",
                  validate: {
                    isPdf: (files: FileList | null) => {
                      if (!files || !files[0]) return "File is required.";
                      const file = files[0];
                      if (file.type !== "application/pdf") {
                        return "Invalid file type. Only PDF is allowed.";
                      }
                      return true;
                    },
                    maxSize: (files: FileList | null) => {
                      const maxFileSize = 5 * 1024 * 1024; // 5 MB
                      if (files && files[0] && files[0].size > maxFileSize) {
                        return "File size must be 5MB or less.";
                      }
                      return true;
                    },
                  },
                }}
                render={({ field: { name, onChange, value } }) => (
                  <BioUploadElemet
                    name={name as Path<FormData>}
                    onChange={onChange}
                    value={value}
                    errors={errors}
                    isPresentation={true}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div
          className="mt-3 md:mt-5 lg:mt-7 space-y-3 md:space-y-4"
          dangerouslySetInnerHTML={{ __html: formDescription }}
        />

        <div className="mt-4 md:mt-6 flex justify-center ">
          <ReCaptcha
            siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            callback={handleToken}
            ref={recaptchaRef}
          />
        </div>
        <div className="mt-4 md:mt-5 flex justify-center">
          <button
            type="submit"
            className={`gradient-master text-white text-sm sm:text-base  font-medium leading-normal  py-3  px-10 md:px-14 ${
              !token ? "opacity-50 cursor-not-allowed" : " hover:text-white"
            }`}
            disabled={!token}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default BecomeSponsorPageForm;
