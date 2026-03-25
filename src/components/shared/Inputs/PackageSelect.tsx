// PackageSelect.tsx
"use client";
import React, { forwardRef, useEffect, useState } from "react";
import Select, {
  ActionMeta,
  DropdownIndicatorProps,
  SingleValue,
} from "react-select";
import { FieldValues, FieldErrors, Path } from "react-hook-form";
import { MdOutlineArrowDropDown } from "react-icons/md";

// Define the types for the props
interface TitleSelectProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  onChange: (
    newValue: SingleValue<string>,
    actionMeta?: ActionMeta<any>
  ) => void;
  onBlur: (e: React.FocusEvent) => void;
  value: any;
  isLight?: boolean;
  packageOption?:any[];
  selectedvalue?:string;
}

import { GroupBase } from "react-select";

const DropdownIndicator = (
  props: DropdownIndicatorProps<
    { value: string; label: string },
    false,
    GroupBase<{ value: string; label: string }>
  > & { isLight?: boolean }
) => {
  return (
    <div
      {...props.innerProps}
      style={{ padding: "8px" }}
      className="cursor-pointer"
    >
      <MdOutlineArrowDropDown
        className={`text-2xl mr-3 ${
          props.isLight ? "text-[#0078BA]" : "text-white"
        }`}
      />
    </div>
  );
};

const getNestedError = <TFieldValues extends FieldValues>(
  errors: FieldErrors<TFieldValues>,
  name: Path<TFieldValues>
) => {
  const parts = name.split(".");
  let currentError: any = errors;
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
// Use React.forwardRef to pass the ref down
const PackageSelect = forwardRef(
  <TFieldValues extends FieldValues>(
    {
      name,
      onChange,
      onBlur,
      value,
      errors,
      isLight = false,
      packageOption,
      selectedvalue=''
    }: TitleSelectProps<TFieldValues>,
    ref: React.ForwardedRef<any> // The ref is passed as the second argument
  ) => {
    const [windowWidth, setWindowWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 0
    );

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const getPaddingLeft = () => {
      if (windowWidth >= 1025) {
        return "15px";
      } else if (windowWidth >= 769) {
        return "15px";
      } else {
        return "12px";
      }
    };

    const options = [
      { value: "Mr", label: "Mr" },
      { value: "Mrs", label: "Mrs" },
      { value: "Ms", label: "Ms" },
      { value: "Dr", label: "Dr" },
    ];

    const customStyles = {
      control: (styles: any) => ({
        ...styles,
        borderColor: "#fff",
        backgroundColor: "transparent",
        borderImage: isLight
          ? "linear-gradient(90deg, #38c7ff 4.01%, #008f57 82.77%)"
          : "none",
        borderImageSlice: isLight ? 1 : 0,
        borderRadius: "0",
        paddingBlock: "8px",
        paddingLeft: getPaddingLeft(),
        color: isLight ? "#000" : "#fff",
        "&:hover": {
          borderColor: "#fff",
        },
      }),
      menu: (styles: any) => ({
        ...styles,
        marginTop: "10px",
        borderRadius: "8px",
        backgroundColor: "#0078bb",
      }),
      option: (
        styles: any,
        { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }
      ) => ({
        ...styles,
        backgroundColor: isFocused ? "#0078ee" : isSelected ? "#4d1592" : "",
        color: "#fff",
        "&:hover": {
          borderColor: "#fff",
        },
      }),
      placeholder: (styles: any) => ({
        ...styles,
        color: isLight ? "#000" : "#fff",
      }),
      singleValue: (styles: any) => ({
        ...styles,
        color: isLight ? "#000" : "#fff",
      }),
    };
    // const errorMessage = getNestedError(errors, name);
    const errorMessage = getNestedError<TFieldValues>(errors, name);

    useEffect(() => {
  if (packageOption?.length && selectedvalue) {
    const matched = packageOption.find(
      (opt) => String(opt.value) === String(selectedvalue)
    );

    if (matched && matched.value !== value) {
      onChange(matched.value); // ✅ no actionMeta needed
    }
  }
}, [packageOption, selectedvalue]);

console.log("selectedvalue",selectedvalue,packageOption)

    const selectedOption = packageOption &&  packageOption.find(
    (option) => option.value === (value || selectedvalue)
  ) || null;

    return (
      <div>
        <Select
          ref={ref as any} // Pass the ref down to the Select component
          options={packageOption}
          onChange={(newValue, actionMeta) => {
            const valueStr =
              newValue && typeof newValue === "object" && "value" in newValue
                ? (newValue as { value: string }).value
                : "";
            onChange(valueStr, actionMeta);
          }}
          onBlur={onBlur}
          value={selectedOption}
        //   value={options.find((option) => option.value === value) || null}
          styles={customStyles}
          placeholder="Select Package"
          // components={{ DropdownIndicator: DropdownIndicator }}
          components={{
            DropdownIndicator: (props) => (
              <DropdownIndicator {...props} isLight={isLight} />
            ),
          }}
        />
        {errors["package"]?.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors["package"]?.message as string}
          </p>
        )}
        {/* {errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage as string}</p>
        )} */}
      </div>
    );
  }
);

PackageSelect.displayName = "PackageSelect";

export default PackageSelect;
