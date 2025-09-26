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
      <MdOutlineArrowDropDown className="text-2xl text-white mr-3" />
    </div>
  );
};

const NationalitySelectElement = <TFieldValues extends FieldValues>({
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
    { value: "Indian", label: "Indian" },
    { value: "American", label: "American" },
    { value: "British", label: "British" },
    { value: "Brazilian", label: "Brazilian" },
  ];

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      borderColor: "#fff",
      borderRadius: "0",
      backgroundColor: "transparent",
      paddingBlock: "8px",
      paddingLeft: getPaddingLeft(),
      color: "#fff",
      "&:hover": {
        borderColor: "#fff",
      },
    }),
    menu: (styles: any) => ({
      ...styles,
      marginTop: "10px",
      borderRadius: "8px",
      backgroundColor: "#0078bb",
      zIndex: 9999999,
    }),
    option: (
      styles: any,
      { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }
    ) => ({
      ...styles,
      backgroundColor: isFocused ? "transparent" : isSelected ? "#4d1592" : "",
      color: "#fff",
      borderRadius: "4px",
      zIndex: 9999999,
      "&:hover": {
        borderColor: "#fff",
      },
    }),
    placeholder: (styles: any) => ({
      ...styles,
      color: "#fff",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: "#fff",
    }),
  };

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
        // CORRECTED: Pass an object with the component
        components={{ DropdownIndicator: DropdownIndicator }}
      />
      {errors[name]?.message && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default NationalitySelectElement;
