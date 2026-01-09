import React, {
  InputHTMLAttributes,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
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
import { toast } from "sonner";

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
  name,
  codeName,
  register,
  errors,
  rules = {},
  setValue,
  isLight = false,
  ...rest
}: NumbertElementProps<TFieldValues>) => {
  // const errorMessage = errors[name]?.message;
  const errorMessage = getNestedError(errors, name);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(
    null
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isOpen) {
        const key = event.key;

        if (key.length === 1 && key.match(/[a-z0-9]/i)) {
          // If the key is alphanumeric, add it to the search term
          setSearchTerm((prevSearchTerm) => prevSearchTerm + key);
        } else if (key === "Backspace") {
          // Handle backspace to delete the last character
          setSearchTerm((prevSearchTerm) => prevSearchTerm.slice(0, -1));
        } else if (key === "Escape") {
          // Handle escape key to close the dropdown
          setIsOpen(false);
          setSearchTerm("");
        }

        // Prevent the key event from propagating (e.g., scrolling the page with space/arrows)
        event.stopPropagation();
        event.preventDefault();
      }
    },
    [isOpen]
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        event.target &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    if (isOpen) {
      // We use keydown because keypress is deprecated, and keyup can be unreliable
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownRef, isOpen, handleKeyDown]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,idd"
        );
        const data = await response.json();

        if (!Array.isArray(data)) {
          toast.error("API response is not an array");
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
        toast.error("Failed to fetch country data:");
      }
    };
    fetchCountries();
  }, [setValue, codeName]);

  const handleButtonClick = () => {
    setIsOpen((prev) => {
      setSearchTerm("");
      return !prev;
    });
  };

  const handleCountrySelect = (country: CountryType) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchTerm("");

    setValue(
      codeName,
      country.dialCode as PathValue<TFieldValues, Path<TFieldValues>>
    );
  };

  const { onChange, ...registeredProps } = register(name, rules);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Allow only digits
    const numericValue = value.replace(/\D/g, "");

    const maxLength =
      typeof rules?.maxLength === "object"
        ? rules.maxLength.value
        : typeof rules?.maxLength === "number"
        ? rules.maxLength
        : 9;

    const truncatedValue = numericValue.slice(0, maxLength);

    setValue(
      name,
      truncatedValue as PathValue<TFieldValues, Path<TFieldValues>>,
      { shouldValidate: true }
    );

    onChange({
      ...e,
      target: {
        ...e.target,
        value: truncatedValue,
      },
    });
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-y-2 flex-grow" ref={dropdownRef}>
      <div className="flex items-center relative">
        <div
          id="dropdown-phone"
          className={`absolute left-0 top-full mt-2 w-52 overflow-y-scroll max-h-52 bg-tms-green rounded-md border border-light-grey shadow-sm z-50 no-scrollbar ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul
            className="py-2 text-dark text-sm md:text-base"
            aria-labelledby="dropdown-phone-button"
          >
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className={`inline-flex w-full px-4 py-2 text-white hover:bg-tms-blue/[.2] dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white text-sm md:text-base`}
                    role="menuitem"
                    onClick={() => handleCountrySelect(country)}
                  >
                    <div className="inline-flex items-center text-left ">
                      {country.name.common} ({country.dialCode})
                    </div>
                  </button>
                </li>
              ))
            ) : (
              <li
                className={`px-4 py-2 ${isLight ? "text-white" : "text-white"}`}
              >
                No country found for {searchTerm}
              </li>
            )}
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
