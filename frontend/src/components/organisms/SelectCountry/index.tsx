import React, { useContext, useState } from "react";
import { Stack } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import {
  CONTINUE,
  countriesDropdownList,
  selectCountryHeading,
  selectCountryLabel,
  selectCountryPlaceholder,
} from "../../../constants";
import Theme from "../../../theme";
import { Dropdown } from "../../molecules/Dropdown";
import MuiButton from "../../atoms/Button";
import { styled } from "@mui/system";
import { SignUpDetailsContext } from "../../../context/CountryContext";

interface SelectCountryProps {
  handleClick: () => void;
}
const StyledButton = styled(MuiButton)({
  width: "135px",
  height: "56px",
  padding: "16px 30px",
  borderRadius: "56px",
  right: "20vw",
  bottom: "5vh",
  position: "absolute",
  "&:disabled": {
    backgroundColor: Theme.palette.primary[100],
  },
});

export const SelectCountry = (props: SelectCountryProps) => {
  const { signUpDetails,setSignUpDetails }  = useContext(SignUpDetailsContext);
  const [nation, setNation] = useState<string>(signUpDetails.selectedCountry);
  const handleCountryChange = (value: string) => {
    setNation(value);
  };
  const handleContinueClick = () => {
    setSignUpDetails((prev) => ({ 
      ...prev,
      selectedCountry: nation
     })); 
     props.handleClick();
  };
  return (
    <Stack display={"flex"} alignItems={"center"}>
      <Stack sx={{ width: Theme.spacing(129) }} spacing={Theme.spacing(11)}>
        <TypographyComponent text={selectCountryHeading} variant={"h1"} />
        <Dropdown
          label={selectCountryLabel}
          value={nation}
          onSelectValue={handleCountryChange}
          placeholder={selectCountryPlaceholder}
          countries={countriesDropdownList}
        />
      </Stack>
      <StyledButton
        variant="contained"
        text={CONTINUE}
        disabled={nation === ""}
        onClick={handleContinueClick}
      />
    </Stack>
  );
};
