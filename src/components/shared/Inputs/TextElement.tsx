import React, { InputHTMLAttributes } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  ValidationRule,
  Path,
} from "react-hook-form";
import { CiEdit } from "react-icons/ci";

// Make the interface generic
interface TextElementProps<TFieldValues extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  rules?: ValidationRule<any>;
  isBlue?: boolean;
  isLight?: boolean;
  isIcon?: boolean;
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

// Make the component function generic
const TextElement = <TFieldValues extends FieldValues>({
  label,
  name,
  register,
  errors,
  rules = {},
  isBlue = false,
  isLight = false,
  isIcon = false,
  ...rest
}: TextElementProps<TFieldValues>) => {
  const errorMessage = getNestedError(errors, name);
  return (
    <div className="flex flex-col gap-y-2 flex-grow-1 relative">
      <input
        className={` "fix-autofill-dark" 
          no-arrow-number   ${
            isLight ? "input-alter " : " input gradient-border-2"
          } `}
        id={name}
        {...register(name, rules)}
        {...rest}
      />
      {isIcon && (
        <CiEdit className="absolute top-3 md:top-5 text-white  right-5 text-lg md:text-xl" />
      )}
      {errorMessage && (
        <p className="text-red-500 text-sm">{errorMessage as string}</p>
      )}
    </div>
  );
};

export default TextElement;
