"use client";
import React, { useEffect, useState } from "react";
import Select, {
  ActionMeta,
  DropdownIndicatorProps,
  SingleValue,
} from "react-select";
import { FieldValues, FieldErrors, Path } from "react-hook-form";
import { MdOutlineArrowDropDown } from "react-icons/md";

// Define the types for the props

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
interface TitleSelectProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  onChange: (
    newValue: SingleValue<string>,
    actionMeta: ActionMeta<any>
  ) => void;
  onBlur: (e: React.FocusEvent) => void;
  value: any;
}

import { GroupBase } from "react-select";

const DropdownIndicator = (
  props: DropdownIndicatorProps<
    { value: string; label: string },
    false,
    GroupBase<{ value: string; label: string }>
  >
) => {
  return (
    <div
      {...props.innerProps}
      style={{ padding: "8px" }}
      className="cursor-pointer"
    >
      <MdOutlineArrowDropDown className="text-2xl text-[#1C75BC] mr-3" />
    </div>
  );
};

const NatureOfCompanySelectElement = <TFieldValues extends FieldValues>({
  name,
  onChange,
  onBlur,
  value,
  errors,
}: TitleSelectProps<TFieldValues>) => {
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
    { value: "Mohre", label: "Mohre" },
    { value: "FreeZone", label: "FreeZone" },
    { value: "OutSource", label: "OutSource" },
    { value: "Contract", label: "Contract" },
  ];

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      borderColor: "#1C75BC",
      borderRadius: "8px",
      backgroundColor: "transparent",
      paddingBlock: "8px",
      paddingLeft: getPaddingLeft(),
      color: "",
      "&:hover": {
        borderColor: "#1C75BC",
      },
    }),
    menu: (styles: any) => ({
      ...styles,
      marginTop: "10px",
      borderRadius: "8px",
      backgroundColor: "#edf9ff",
    }),
    option: (
      styles: any,
      { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }
    ) => ({
      ...styles,
      backgroundColor: isFocused ? "#0078ee" : isSelected ? "#4d1592" : "",
      //   color: "#00081b",
      color: isFocused ? "#00081b" : isSelected ? "#fff" : "",
      borderRadius: "4px",
      "&:hover": {
        borderColor: "#fff",
      },
    }),
    placeholder: (styles: any) => ({
      ...styles,
      color: "#00081b",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: "#00081b",
    }),
  };
  const errorMessage = getNestedError<TFieldValues>(errors, name);

  return (
    <div>
      <Select
        options={options}
        onChange={(newValue, actionMeta) => {
          const valueStr =
            newValue && typeof newValue === "object" && "value" in newValue
              ? (newValue as { value: string }).value
              : "";
          onChange(valueStr, actionMeta);
        }}
        onBlur={onBlur}
        value={options.find((option) => option.value === value) || null}
        styles={customStyles}
        placeholder="Nationality"
        components={{ DropdownIndicator: DropdownIndicator }}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage as string}</p>
      )}
    </div>
  );
};

export default NatureOfCompanySelectElement;
