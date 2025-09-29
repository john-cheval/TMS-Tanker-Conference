import React, { TextareaHTMLAttributes, useState } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  Path,
  RegisterOptions,
} from "react-hook-form";

interface TextAreaElementProps<TFieldValues extends FieldValues>
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name"> {
  label: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  isBlue?: boolean;
  isLight?: boolean;
  wordLimit?: number;
  isFakePlaceHolder?: boolean;
  fakePlaceholderText?: string;
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
}
const getNestedError = (errors: any, name: any) => {
  const parts = name.split(".");
  let currentError = errors;

  for (const part of parts) {
    if (
      currentError &&
      typeof currentError === "object" &&
      part in currentError
    ) {
      currentError = currentError[part];
    } else {
      return undefined;
    }
  }

  return currentError?.message;
};
const TextAreaElementTwo = <TFieldValues extends FieldValues>({
  label,
  name,
  register,
  errors,
  isBlue = false,
  isLight = false,
  wordLimit = 500,
  isFakePlaceHolder = false,
  fakePlaceholderText = "Type something...",
  rules = {},
  ...rest
}: TextAreaElementProps<TFieldValues>) => {
  const { onChange, ...restRegister } = register(name, rules);

  const [wordCount, setWordCount] = useState(0);
  const [value, setValue] = useState("");

  const handleWordCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    const words = inputValue.trim().split(/\s+/).filter(Boolean);
    const count = words.length;

    if (count <= wordLimit) {
      setWordCount(count);
      setValue(inputValue);
      onChange(e);
    } else {
      const trimmedValue = words.slice(0, wordLimit).join(" ");
      e.target.value = trimmedValue;
      setWordCount(wordLimit);
      setValue(trimmedValue);
      onChange(e);
    }
  };
  const errorMessage = getNestedError(errors, name);

  return (
    <div
      className={`flex flex-grow-1 ${errorMessage ? "flex-col gap-y-2 " : ""}`}
    >
      <div className="relative flex w-full">
        <textarea
          className={`relative fix-autofill-dark ${
            isLight ? "input-alter" : "input gradient-border-2"
          } ${isBlue ? "input-alter" : "input"}`}
          id={name}
          {...restRegister}
          value={value}
          onChange={handleWordCount}
          // ✅ force remove placeholder when using fake
          {...rest}
          placeholder={isFakePlaceHolder ? "" : rest.placeholder}
        />

        {isFakePlaceHolder && !value && (
          <p className=" absolute top-5 left-5 text-dark-alter text-base pointer-events-none">
            Tell us a little more about you and your presentation{" "}
            <span className="text-xs md:text-sm text-[#828282]">
              (For example, have there been any papers you have published with
              details of the area on which you would like to present? How are
              you unique/different in the way you apply AI or work in the space?
              Please include any links to you presenting and/or any media
              coverage.)
            </span>
          </p>
        )}

        {/* Word counter */}
        <p className="absolute right-3 md:right-5 bottom-2 md:bottom-5 text-dark-alter text-xs md:text-sm leading-3">
          {wordCount} / {wordLimit} Words
        </p>
      </div>

      {errorMessage && (
        <p className="text-red-500 text-sm">{errorMessage as string}</p>
      )}
    </div>
  );
};

export default TextAreaElementTwo;
