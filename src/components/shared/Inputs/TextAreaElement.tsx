import React, { TextareaHTMLAttributes } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  ValidationRule,
  Path,
} from "react-hook-form";
import { CiEdit } from "react-icons/ci";

// Update the interface to extend TextareaHTMLAttributes
interface TextAreaElementProps<TFieldValues extends FieldValues>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  isBlue?: boolean;
  rules?: ValidationRule<any>;
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

// Update the component to use the new interface name
const TextAreaElement = <TFieldValues extends FieldValues>({
  label,
  name,
  register,
  errors,
  isBlue = false,
  isLight = false,
  isIcon = false,
  rules = {},
  ...rest
}: TextAreaElementProps<TFieldValues>) => {
  // const errorMessage = errors[name]?.message;
  const errorMessage = getNestedError(errors, name);

  return (
    <div className="flex flex-col gap-y-2 flex-grow-1 relative">
      <textarea
        className={` fix-autofill-dark ${
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

export default TextAreaElement;
