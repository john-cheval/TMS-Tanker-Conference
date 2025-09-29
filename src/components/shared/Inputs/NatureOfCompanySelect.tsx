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
  companyListData: any;
  isDark?: boolean;
  isLight?: boolean;
}

import { GroupBase } from "react-select";

const NatureOfCompanySelectElement = <TFieldValues extends FieldValues>({
  name,
  onChange,
  onBlur,
  value,
  errors,
  companyListData,
  isDark = false,
  isLight = false,
}: TitleSelectProps<TFieldValues>) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

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
        <MdOutlineArrowDropDown
          className={`text-2xl ${
            isDark ? "text-white" : "text-[#1C75BC]"
          } mask-r-from-3`}
        />
      </div>
    );
  };

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

  const options = companyListData?.value.map((item: any) => ({
    value: item,
    label: item,
  }));

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      borderColor: "#fff",
      borderImage: isLight
        ? "linear-gradient(90deg, #38c7ff 4.01%, #008f57 82.77%)"
        : "none",
      borderImageSlice: isLight ? 1 : 0,
      borderRadius: "0px",
      backgroundColor: "transparent",
      paddingBlock: "8px",
      paddingLeft: getPaddingLeft(),
      color: "",
      "&:hover": {
        borderColor: "#fff",
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
      color: isLight ? "#000" : "#fff",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: isLight ? "#000" : "#fff",
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
        value={options.find((option: any) => option.value === value) || null}
        styles={customStyles}
        placeholder="Nature of Company"
        components={{ DropdownIndicator: DropdownIndicator }}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage as string}</p>
      )}
    </div>
  );
};

export default NatureOfCompanySelectElement;
