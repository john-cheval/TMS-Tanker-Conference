import React, { InputHTMLAttributes } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  ValidationRule,
  Path,
} from "react-hook-form";

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
  ...rest
}: TextElementProps<TFieldValues>) => {
  const errorMessage = getNestedError(errors, name);
  return (
    <div className="flex flex-col gap-y-2 flex-grow-1">
      <input
        className={` "fix-autofill-dark" 
          no-arrow-number  input gradient-border-2`}
        id={name}
        {...register(name, rules)}
        {...rest}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm">{errorMessage as string}</p>
      )}
    </div>
  );
};

export default TextElement;
