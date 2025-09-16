"use client";
import React, { useState, useEffect } from "react";
import uploadImage from "@/assets/icons/backup_white.svg";
import Image from "next/image";
import { FieldValues, FieldErrors, Path } from "react-hook-form";

interface ImageUploadProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  onChange: (value: FileList | null) => void;
  value: FileList | null;
}

const getNestedError = <TFieldValues extends FieldValues>(
  errors: FieldErrors<TFieldValues>,
  name: Path<TFieldValues>
) => {
  const parts = name.split(".");
  let currentError = errors;
  for (const part of parts) {
    if (
      currentError &&
      typeof currentError === "object" &&
      part in currentError &&
      currentError[part] !== undefined
    ) {
      currentError = currentError[part] as FieldErrors<TFieldValues>;
    } else {
      return undefined;
    }
  }
  return currentError?.message;
};

const ImageUploadElemet = <TFieldValues extends FieldValues>({
  name,
  onChange,
  value,
  errors,
}: ImageUploadProps<TFieldValues>) => {
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (value && value.length > 0) {
      setFileName(value[0].name);
    } else {
      setFileName("");
    }
  }, [value]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      onChange(files);
    } else {
      onChange(null);
    }
  };

  // const errorMessage = errors[name]?.message;
  const errorMessage = getNestedError(errors, name);

  return (
    <div className="flex flex-col gap-y2 flex-grow-1">
      <div className="flex items-center justify-center w-full mb-1">
        <label
          htmlFor={name}
          className="flex flex-col items-center justify-center w-full border border-white border-dashed rounded-sm cursor-pointer bg-transparent text-white"
        >
          <div className="flex items-center justify-center pt-5- pb-6- py-4 gap-x-3">
            <Image src={uploadImage} alt="uploadImage" width={26} height={18} />
            <p className="description text-white underline">
              {fileName ? fileName : "Upload your headshot"}
            </p>
          </div>
          <input
            id={name}
            type="file"
            className="hidden"
            accept="image/png, image/jpeg, image/jpg" // Client-side file type filtering
            onChange={handleFileChange}
          />
        </label>
      </div>
      <span className="text-white text-xs md:text-sm font-normal leading-5">
        Upload a HIGH-RES professional picture to be added on the website. Max
        5MB.
      </span>
      {errorMessage && (
        <p className="text-red-500 text-sm font-normal leading-5 mt-1">
          {typeof errorMessage === "string"
            ? errorMessage
            : typeof errorMessage === "object" &&
              errorMessage &&
              "message" in errorMessage
            ? String((errorMessage as any).message)
            : ""}
        </p>
      )}
    </div>
  );
};

export default ImageUploadElemet;
