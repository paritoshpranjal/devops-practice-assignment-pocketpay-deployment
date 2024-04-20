import { Grid, MenuItem, SelectChangeEvent, SxProps } from "@mui/material";
import React, { useState } from "react";
import { InputField } from "../../atoms/InputField";
import Theme from "../../../theme";
import chevronDown from "../../../../public/assets/icons/chevron-down.svg";
import chevronDownGrey from "../../../../public/assets/icons/chervorDownGrey.svg";
import TypographyComponent from "../../atoms/Typography";
interface DropdownProps {
  value: string;
  onSelectValue?: (value: any) => void;
  placeholder: string;
  label: string;
  items?: string[];
  countries?: {
    icon: string;
    value: string;
  }[];
  error?: boolean;
  helperText?: string;
}
const IconComponent = (
  open: boolean,
  onClick: () => void,
  isValue: boolean
) => (
  <img
    src={isValue ? chevronDown : chevronDownGrey}
    alt="chevron"
    style={{
      paddingRight: Theme.spacing(5),
      cursor: "pointer",
      visibility: open ? "hidden" : "inherit",
    }}
    onClick={onClick}
  />
);
const PlaceholderComponent = (placeholder: string) => (
  <TypographyComponent
    variant="body2"
    color={Theme.palette.text.lowemphasis}
    text={placeholder}
  />
);
export const paperDropdownSxProps: SxProps = {
  maxHeight: "460px",
  overflow: "auto",
  boxShadow: "none",
  border: `1px solid ${Theme.palette.grey[100]}`,
  borderTop: "none",
  borderRadius: "0 0 8px 8px",
  [`& .MuiList-root`]: {
    padding: 0,
    [`& .MuiMenuItem-root`]: {
      padding: "16px 18px",
    },
  },
};
export const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [isValue, setIsValue] = useState(props.value != "");

  const handleOpen = () => {
    setOpen(!open);
  };
  const label = props.value === "" ? null : props.label;
  return (
    <InputField
      select
      label={label}
      value={props.value}
      fullWidth
      error={props.error}
      helperText={props.helperText}
      sx={{
        "& .MuiOutlinedInput-root fieldset": {
          borderBottom: open ? "none !important" : "",
          borderRadius: open ? "8px 8px 0 0" : "8px",
        },
        "maxWidth": "516px",
      }}
      SelectProps={{
        IconComponent: () => IconComponent(open, handleOpen, isValue),
        onOpen: handleOpen,
        onClose: handleOpen,
        open: open,
        onChange: (event: SelectChangeEvent<unknown>) => {
          props.onSelectValue?.(event.target.value);
          setIsValue(true);
        },
        displayEmpty: true,
        renderValue: () =>
          props.value === "" ? (
            PlaceholderComponent(props.placeholder)
          ) : (
            <TypographyComponent variant="body2" text={props.value} />
          ),
        MenuProps: {
          PaperProps: {
            sx: paperDropdownSxProps,
          },
        },
      }}
      onClick={handleOpen}
      autoFocus={open}
    >
      {props.items?.map((item) => (
        <MenuItem value={item} key={item}>
          <TypographyComponent variant="body2" text={item} />
        </MenuItem>
      ))}
      {props.countries?.map((item) => (
        <MenuItem value={item.value} key={item.icon}>
          <Grid container columnGap={6} alignItems={"center"}>
            <img src={item.icon} alt="icon" />
            <TypographyComponent variant="body2" text={item.value} />
          </Grid>
        </MenuItem>
      ))}
    </InputField>
  );
};
