import { styled, Autocomplete, Box, TextField } from "@mui/material";
import theme from "../../../theme";
import React, { useState } from "react";
import search from "../../../../public/assets/icons/search.svg";

interface InputProps {
  placeholder?: string;
  options: string[];
  onChange: (value: string) => void;
  value: string;
  onValueClick: (value: string) => void;
}
const CustomTextField = styled(TextField)((props: { open?: boolean }) => ({
  maxWidth: "516px",
  "& label.Mui-focused": {
    color: theme.palette.text.lowemphasis,
  },
  "& .MuiOutlinedInput-root": {
    paddingRight: "17px !important",
    ...theme.typography.body2,
    color: theme.palette.text.medium,
    "&.Mui-focused fieldset": {
      border: `${theme.spacing(0.25)} solid ${theme.palette.grey[100]}`,
      borderBottom: props.open
        ? "none"
        : `${theme.spacing(0.25)} solid ${theme.palette.grey[100]}`,
      borderBottomRightRadius: "0",
      borderBottomLeftRadius: "0",
    },
    "&.Mui-focused .search": {
      display: "none",
    },
    "& fieldset": {
      border: `1px solid ${theme.palette.grey[100]}`,
      borderRadius: `${theme.spacing(2)} !important`,
    },
  },
}));
const StyledBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  borderTop: "none",
  borderRadius: theme.spacing(2),
  backgroundColor: "white",
  borderTopRightRadius: "0",
  borderTopLeftRadius: "0",
  ...theme.typography.body2,
  "& .styleFooter": {
    padding: "18px",
    paddingBottom: "22px",
    color: theme.palette.text.medium,
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
}));
const OptionCard = (children: React.ReactNode) => {
  return (
    <StyledBox>
      {children}
      <div className="styleFooter">
        Can’t find your business?{" "}
        <span style={{ color: theme.palette.primary[500] }}>
          Enter your details
        </span>
      </div>
    </StyledBox>
  );
};
const Search = (props: InputProps) => {
  const [listboxActive, setListboxActive] = useState(false);
  return (
    <Autocomplete
      disableClearable
      freeSolo
      onChange={(_, value) => {
        props.onChange(value);
        props.onValueClick(value);
      }}
      value={props.value}
      options={props.options}
      renderInput={(params) => (
        <CustomTextField
          {...params}
          placeholder={props.placeholder}
          InputProps={{
            ...params.InputProps,
            endAdornment: !listboxActive && (
              <img src={search} alt="search icon" />
            ),
          }}
          open={listboxActive}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} style={{ padding: theme.spacing(4), height: "56px" }}>
          {option}
        </li>
      )}
      PaperComponent={({ children }) => OptionCard(children)}
      ListboxProps={{
        style: {
          minHeight: "60px",
          maxHeight: "300px",
          overflow: "auto",
        },
      }}
      onOpen={() => setListboxActive(true)}
      onClose={() => setListboxActive(false)}
    />
  );
};

export default Search;
