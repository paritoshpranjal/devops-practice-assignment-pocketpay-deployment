import { TextField, styled } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import React, { ReactNode } from "react";
import theme from "../../../theme";

export interface InputFieldProps
  extends Omit<TextFieldProps, "startAdornment" | "endAdornment"> {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  readOnly?: boolean;
  style?: React.CSSProperties;
}

export const TextFieldStyled = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      border: `1px solid ${theme.palette.otherColors.stroke2}`,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${theme.palette.otherColors.stroke2}`,
    },
    "color": theme.palette.text.high,
    "fontSize": theme.typography.body2.fontSize,
    "borderRadius": "8px",
  },

  ".MuiInputLabel-root": {
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.lowemphasis,
  },
  "& .Mui-focused.MuiInputLabel-root": {
    color: theme.palette.text.lowemphasis,
  },
  "& fieldset": {
    border: `1px solid ${theme.palette.otherColors.stroke2}`,
  },
  "& .Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: `red !important`,
  },
  "& .Mui-error .MuiInputLabel-root": {
    color: "red !important",
  },
});

export const InputField = ({
  startAdornment,
  endAdornment,
  readOnly,
  style,
  ...props
}: InputFieldProps) => {
  return (
    <TextFieldStyled
      data-testid="input-field"
      {...props}
      InputProps={{
        startAdornment,
        endAdornment,
        readOnly,
        style,
      }}
      autoComplete="off"
    />
  );
};
