import React, { InputHTMLAttributes, useState, useEffect } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  ValidationRule,
  Path,
  UseFormSetValue,
  PathValue,
} from "react-hook-form";
import { IoMdArrowDropdown } from "react-icons/io";

// Define the shape of a country object
interface CountryType {
  name: {
    common: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  dialCode: string;
}

interface NumbertElementProps<TFieldValues extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  codeName: Path<TFieldValues>;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  rules?: ValidationRule<any>;
  setValue: UseFormSetValue<TFieldValues>;
  isBlue?: boolean;
  isLight?: boolean;
}

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

const formatDialCode = (idd: CountryType["idd"]): string => {
  if (!idd || !idd.root) return "";
  const suffix = idd.suffixes && idd.suffixes.length > 0 ? idd.suffixes[0] : "";
  return `${idd.root}${suffix}`;
};

const NumberElement = <TFieldValues extends FieldValues>({
  label,
  name,
  codeName,
  register,
  errors,
  rules = {},
  isBlue = false,
  setValue,
  isLight = false,
  ...rest
}: NumbertElementProps<TFieldValues>) => {
  // const errorMessage = errors[name]?.message;
  const errorMessage = getNestedError(errors, name);

  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(
    null
  );

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,idd"
        );
        const data = await response.json();

        if (!Array.isArray(data)) {
          console.error("API response is not an array");
          return;
        }

        const formattedCountries: CountryType[] = data
          .filter((country: any) => country.idd && country.idd.root)
          .map((country: any) => ({
            name: country.name,
            idd: country.idd,
            dialCode: formatDialCode(country.idd),
          }))
          .sort((a, b) => a.name.common.localeCompare(b.name.common));

        const uae = formattedCountries.find(
          (country) => country.name.common === "United Arab Emirates"
        );

        if (uae) {
          const otherCountries = formattedCountries.filter(
            (country) => country.name.common !== "United Arab Emirates"
          );
          setCountries([uae, ...otherCountries]);
          setSelectedCountry(uae);
          setValue(
            codeName,
            uae.dialCode as PathValue<TFieldValues, Path<TFieldValues>>
          );
        } else {
          setCountries(formattedCountries);

          if (formattedCountries.length > 0) {
            setSelectedCountry(formattedCountries[0]);
            setValue(
              codeName,
              formattedCountries[0].dialCode as PathValue<
                TFieldValues,
                Path<TFieldValues>
              >
            );
          }
        }
      } catch (error) {
        console.error("Failed to fetch country data:", error);
      }
    };
    fetchCountries();
  }, [setValue, codeName]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCountrySelect = (country: CountryType) => {
    setSelectedCountry(country);
    setIsOpen(false);

    setValue(
      codeName,
      country.dialCode as PathValue<TFieldValues, Path<TFieldValues>>
    );
  };

  const { onChange, ...registeredProps } = register(name, rules);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const maxLengthRule = rules?.maxLength as {
      value: number;
      message: string;
    };
    const maxLength = maxLengthRule?.value || 15;

    const truncatedValue = value.slice(0, maxLength);

    setValue(
      name,
      truncatedValue as PathValue<TFieldValues, Path<TFieldValues>>
    );

    onChange(e);
  };

  return (
    <div className="flex flex-col gap-y-2 flex-grow">
      <div className="flex items-center relative">
        <div
          id="dropdown-phone"
          className={`absolute left-0 top-full mt-2 w-52 overflow-y-scroll max-h-52 bg-tms-tanker-blue rounded-md border border-light-grey shadow-sm z-50 no-scrollbar ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul
            className="py-2 text-dark text-sm md:text-base"
            aria-labelledby="dropdown-phone-button"
          >
            {countries.map((country, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`inline-flex w-full px-4 py-2 text-tms-dark-1 hover:bg-tms-blue/[.2] dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white text-sm md:text-base`}
                  role="menuitem"
                  onClick={() => handleCountrySelect(country)}
                >
                  <div className="inline-flex items-center text-left ">
                    {country.name.common} ({country.dialCode})
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full overflow-hidden">
          <button
            id="dropdown-phone-button"
            data-dropdown-toggle="dropdown-phone"
            className={`z-10 inline-flex items-center h-full py-2.5 px-4 font-normal text-center bg-transparent text-sm md:text-base gap-x-1.5 ${
              isLight ? "text-white" : "text-black"
            } outline-none absolute left-0 ${
              errorMessage ? "-top-3s" : "top-0"
            }`}
            type="button"
            onClick={handleButtonClick}
          >
            {selectedCountry?.dialCode}{" "}
            <IoMdArrowDropdown color={isLight ? "#fff" : "#0078BA"} size={18} />
          </button>

          <input
            type="hidden"
            {...register(codeName as Path<TFieldValues>)}
            value={selectedCountry?.dialCode || ""}
          />

          <input
            className={`${
              isLight ? "input-alter " : " input gradient-border-2"
            } fix-autofill-dark no-arrow-number !pl-[90px] w-full`}
            id={name}
            type="tel"
            {...registeredProps}
            onChange={handleInputChange}
            {...rest}
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">
              {errorMessage as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NumberElement;
