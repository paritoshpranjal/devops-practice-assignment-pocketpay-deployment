import { Grid } from "@mui/material";
import React from "react";
import CheckboxAtom from "../../atoms/Checkbox";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";
interface CheckBoxTextProps {
  label: string;
  gap: string;
  checked: boolean;
  onChange?: (e: React.ChangeEvent) => void;
}
export const CheckBoxText = ({ label, gap, ...props }: CheckBoxTextProps) => {
  return (
    <Grid container columnGap={gap}>
      <CheckboxAtom {...props} />
      <TypographyComponent
        variant="body3"
        text={label}
        color={Theme.palette.text.medium}
      />
    </Grid>
  );
};
