"use client";
import { baseUrl } from "@/lib/api";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import sendSvg from "@/assets/icons/send.svg";
import Image from "next/image";

type FormData = {
  email: string;
};

const FooterNewsLetterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${baseUrl}/submitnewsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data?.email }),
      });

      const result = await response.json();

      if (result.errors) {
        const errorMessage =
          result.errors.email[0] || "An unexpected error occurred.";
        toast.error(errorMessage);
      } else {
        toast.success("Newsletter subscribed successfully.");
        reset();
      }

      // Reset the form after successful submission
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    }
  };
  return (
    <form className="relative" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        className="w-full mt-3 md:mt-5  lg:mt-8 xl:mt-12 bg-transparent placeholder:text-[#bbbbbbba]   text-[#bbb]  text-base border-b border-b-[#BBBBBB] pb-4 md:pb-5 lg:pb-8  pr-24 5transition duration-300 ease-in-out focus:outline-none focus:border-[#BBBBBB] "
        placeholder="Enter your email here"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address",
          },
        })}
      />

      {errors.email && (
        <p className="absolute left-0 bottom-0 text-red-500 text-sm mt-1 -mb-6">
          {errors.email.message}
        </p>
      )}
      <button
        className="absolute right-0 top-0 rounded-tr-sm h-full flex items-center justify-center "
        type="submit"
      >
        <Image
          src={sendSvg}
          alt="sendSvg"
          className="w-full max-w-5 sm:max-w-6 md:max-w-8 mt-1 h-auto"
        />
      </button>
    </form>
  );
};

export default FooterNewsLetterForm;
