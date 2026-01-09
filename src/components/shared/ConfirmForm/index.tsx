"use client";

import React from "react";

type Props = {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal({ open, onConfirm, onCancel }: Props) {
  if (!open) return null;

  return (
    <div className="testm fixed inset-0 z-999956 flex items-center justify-center bg-[#000000c9]">
      <div className="bg-white rounded-lg w-[100%] max-w-xl p-6">
        <h3 className="text-lg font-bold mb-4 text-[#0078bb]">
          Confirm Submission
        </h3>

        <p className="text-gray-600 mb-6">
          Kindly review your details carefully, as your pass will be generated based on these details.
        </p>

        <div className="flex justify-center gap-3">
          <button
            onClick={onCancel}
            className=" text-black rounded-sm border text-sm sm:text-base md:text-lg font-bold leading-5 md:py-3 w-fit  py-3 px-8 md:px-11  text-center mt-4 
          transition-all duration-300"
          >
            Edit Details
          </button>

          <button
            onClick={onConfirm}
            className="bg-tms-blue rounded-sm text-sm border sm:text-base md:text-lg font-bold leading-5 text-white md:py-3 w-fit  py-3 px-8 md:px-16  text-center mt-4 
          transition-all duration-300"
          style={{background: "linear-gradient(93deg, #38C7FF 4.01%, #008F57 82.77%)",}}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
