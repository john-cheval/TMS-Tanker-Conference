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
  isLight?: boolean;
}

import { GroupBase } from "react-select";
import { baseUrl } from "@/lib/api";
import { toast } from "sonner";

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

const CountryOfResidence = <TFieldValues extends FieldValues>({
  name,
  onChange,
  onBlur,
  value,
  errors,
  isLight = false,
}: TitleSelectProps<TFieldValues>) => {
    console.log("errors",errors)
    console.log("errors name",errors[name]?.message)
    const errorMessage = getNestedError(errors, name);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetcCountries = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/getmasterdetails?master_name=countries`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data?.data) {
          setCountryList(data?.data);
        }
      } catch (error) {
        toast.error("Could not fetch the countries data:");
      }
    };
    fetcCountries();
  }, []);

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

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      borderColor: "#fff",
      borderRadius: "8px",
      borderImage: isLight
        ? "linear-gradient(90deg, #38c7ff 4.01%, #008f57 82.77%)"
        : "none",
      borderImageSlice: isLight ? 1 : 0,
      backgroundColor: "transparent",
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
      zIndex: 999999999999999999,
      scrollBarWidth: "none",
      msOverflowStyle: "none",
    }),
    option: (
      styles: any,
      { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }
    ) => ({
      ...styles,
      backgroundColor: isFocused ? "#0078ee" : isSelected ? "#4d1592" : "",
      color: "#fff",
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

  const options = countryList.map((country: any) => ({
    value: country.countryCode,
    label: country.countryName,
  }));

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
        placeholder="Country of Residence"
        // CORRECTED: Pass an object with the component
        // components={{ DropdownIndicator: DropdownIndicator }}
        components={{
          DropdownIndicator: (props) => (
            <DropdownIndicator {...props} isLight={isLight} />
          ),
        }}
      />
      {/* {errors[name]?.message && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name]?.message as string}
        </p>
      )} */}
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">
          {errorMessage as string}
        </p>
      )}
    </div>
  );
};

export default CountryOfResidence;
