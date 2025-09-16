"use client";
import { useForm } from "react-hook-form";
import React, { useCallback, useRef, useState } from "react";
import TextElement from "@/components/shared/Inputs/TextElement";
import TextAreaElement from "@/components/shared/Inputs/TextAreaElement";
import ReCaptcha from "@/utils/ReCaptcha";
import { toast } from "sonner";

type FormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

interface RecaptchaRefType {
  resetCaptcha: () => void;
}

const ContactForm = () => {
  const recaptchaRef = useRef<RecaptchaRefType>(null);
  const [token, setToken] = useState("");
  const {
    register,
    handleSubmit,
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
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log(data, "This is the form data");
      console.log("reCAPTCHA Token:", token);

      // Show a success toast notification
      toast.success("Form submitted successfully!");

      // Reset the form and reCAPTCHA widget
      reset();
      if (recaptchaRef.current) {
        recaptchaRef.current.resetCaptcha();
      }
      setToken("");
    } catch (error) {
      // Handle any submission errors
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:mt-6">
      <div className=" space-y-2.5 md:space-y-3 lg:space-y-4">
        <TextElement
          label="Your Name"
          name="fullName"
          type="text"
          placeholder="Your Name"
          register={register}
          errors={errors}
          rules={{
            required: "Name is required.",
          }}
          isBlue={true}
          isLight={true}
        />

        <TextElement
          label="Your E-mail"
          name="email"
          type="email"
          placeholder="Your E-mail"
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
          isBlue={true}
        />

        <TextElement
          label="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          register={register}
          errors={errors}
          rules={{
            required: "Subject is required.",
          }}
          isBlue={true}
          isLight={true}
        />

        <TextAreaElement
          label="message"
          name="message"
          placeholder="Message"
          register={register}
          errors={errors}
          rows={3}
          rules={{
            required: "Message is required.",
          }}
          isLight={true}
          isBlue={true}
        />
      </div>

      <div className="mt-4 md:mt-6 flex justify-center md:justify-start">
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
          rounded-sm text-sm sm:text-base md:text-lg font-bold leading-5 text-white bg-tms-purple md:py-5 w-fit px-7 py-3 md:w-full mt-4 
          transition-all duration-300 
          ${!token ? "opacity-50 cursor-not-allowed" : "hover:bg-tms-purple/90"}
        `}
          disabled={!token}
        >
          {isSubmitting ? "Submitting..." : "Send Enquire"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
