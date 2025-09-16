import clsx from "clsx";
import React from "react";
type ForRowPropsType = {
  children: React.ReactNode;
  className?: string;
};

const FormRow = ({ children, className }: ForRowPropsType) => {
  return <div className={clsx("flex  w-full", className)}>{children}</div>;
};

export default FormRow;
