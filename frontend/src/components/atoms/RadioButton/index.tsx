import { Radio, RadioProps } from "@mui/material";
import React from "react";

interface CustomRadioProps extends RadioProps {
  name?: string;
  value?: string;
  checked?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label?: string;
  disabled?: boolean;
  variant?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  size?: "small" | "medium";
}
export const CustomRadio = (props: CustomRadioProps) => {
  return (
      <Radio id="radio" {...props} />
  );
};