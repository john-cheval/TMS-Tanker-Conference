"use client";
import { baseUrl } from "@/lib/api";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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
        className="w-full bg-transparent placeholder:text-[#bbbbbbba]   text-white text-base border border-[#1C75BC] rounded-sm pl-6 pr-24 py-2.5 transition duration-300 ease-in-out focus:outline-none focus:border-[#1C75BC] hover:border-tms-purple"
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
        className="absolute right-0 top-0 rounded-tr-sm rounded-br-sm bg-[#1C75BC] py-4 px-7 border border-transparent text-center text-base font-medium text-white transition-all  focus:bg-[#1C75BC]  active:bg-[#1C75BC]    hover:bg-[#1C75BC]  disabled:pointer-events-none h-full flex items-center justify-center "
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default FooterNewsLetterForm;
