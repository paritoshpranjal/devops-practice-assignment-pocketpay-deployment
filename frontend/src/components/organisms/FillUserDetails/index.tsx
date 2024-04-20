import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";
import { InputField } from "../../atoms/InputField";
import { StyledButton } from "../../molecules/TradeAddress";
import Calendar from "../../molecules/CalendarInput";
import { Dropdown } from "../../molecules/Dropdown";
import {
  FILL_USER_DETAILS_HEADER,
  FILL_USER_DETAILS_SUBTEXT,
  countriesDropdownList,
  emptyFieldText,
} from "../../../constants";
import { StyledBox } from "../reviewTransferDetails";
import { UserBusinessDetailsContext } from "../../../context/UserBusinessDetailsContext";
interface FillUserDetailsProps {
  onClickContinue: () => void;
}
interface UserDetailsType {
  firstName: string;
  lastName: string;
  dob: any;
  country: string;
  address: string;
  city: string;
  postalCode: string;
  addressError?: boolean;
  firstNameError?: boolean;
  lastNameError?: boolean;
  cityError?: boolean;
  postalCodeError?: boolean;
}
export const FillUserDetails = ({ onClickContinue }: FillUserDetailsProps) => {
  const { userBusinessDetails, setUserBusinessDetails } = useContext(
    UserBusinessDetailsContext
  );

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    firstName: userBusinessDetails.firstName,
    lastName: userBusinessDetails.lastName,
    dob: userBusinessDetails.dob,
    country: userBusinessDetails.country,
    address: userBusinessDetails.address,
    city: userBusinessDetails.city,
    postalCode: userBusinessDetails.postalCode,
  });

  const validateFields = React.useCallback(() => {
    const { firstName, lastName, address, country, city, postalCode } =
      userDetails;

    return (
      !isEmpty(firstName) &&
      !isEmpty(lastName) &&
      userDetails.dob !== null &&
      !isEmpty(country) &&
      !isEmpty(address) &&
      !isEmpty(city) &&
      !isEmpty(postalCode)
    );
  }, [userDetails]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
      [`${name}Error`]: isEmpty(value),
    }));
  };
  const handleDropDownSelect = (value: string) => {
    setUserDetails((prev) => ({
      ...prev,
      country: value,
    }));
  };

  const isEmpty = (value: string) => {
    return value.length === 0;
  };

  useEffect(() => {
    setIsButtonDisabled(!validateFields());
    setUserBusinessDetails((prev) => ({
      ...prev,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      dob: userDetails.dob,
      country: userDetails.country,
      address: userDetails.address,
      city: userDetails.city,
      postalCode: userDetails.postalCode,
    }));
  }, [userDetails, validateFields]);

  return (
    <Grid
      container
      alignItems="flex-end"
      data-testid="fillUserDetails"
      gap={"1px"}
    >
      <StyledBox maxWidth="516px">
        <Grid container direction="column" rowGap={11}>
          <Grid container item direction="column" rowGap={3}>
            <TypographyComponent variant="h1" text={FILL_USER_DETAILS_HEADER} />
            <TypographyComponent
              variant="body3"
              text={FILL_USER_DETAILS_SUBTEXT}
              color={Theme.palette.text.medium}
            />
          </Grid>
          <Grid container item direction="column" rowGap={7}>
            <InputField
              label="First name"
              name="firstName"
              value={userDetails.firstName}
              onChange={handleChange}
              fullWidth
              error={userDetails.firstNameError}
              helperText={userDetails.firstNameError ? emptyFieldText : ""}
            />
            <InputField
              label="Last name"
              name="lastName"
              value={userDetails.lastName}
              onChange={handleChange}
              fullWidth
              error={userDetails.lastNameError}
              helperText={userDetails.lastNameError ? emptyFieldText : ""}
            />
            <Calendar
              label="Date of birth"
              value={userDetails.dob}
              textFieldWidth="100%"
              onChange={(newDate: Date | null) => {
                setUserDetails((prev) => ({
                  ...prev,
                  dob: newDate,
                }));
              }}
            />

            <Dropdown
              value={userDetails.country}
              onSelectValue={handleDropDownSelect}
              placeholder={"Country of residence"}
              label={"Country of residence"}
              countries={countriesDropdownList}
            />
            <InputField
              label="Home Address"
              value={userDetails.address}
              name="address"
              onChange={handleChange}
              fullWidth
              error={userDetails.addressError}
              helperText={userDetails.addressError ? emptyFieldText : ""}
            />
            <InputField
              label="City"
              value={userDetails.city}
              name="city"
              onChange={handleChange}
              fullWidth
              error={userDetails.cityError}
              helperText={userDetails.cityError ? emptyFieldText : ""}
            />
            <InputField
              label="Postal code"
              value={userDetails.postalCode}
              name="postalCode"
              onChange={handleChange}
              fullWidth
              error={userDetails.postalCodeError}
              helperText={userDetails.postalCodeError ? emptyFieldText : ""}
            />
          </Grid>
        </Grid>
      </StyledBox>
      <Grid item>
        <StyledButton
          variant="contained"
          disabled={isButtonDisabled}
          text={<TypographyComponent variant="body2" text="Continue" />}
          onClick={onClickContinue}
        />
      </Grid>
    </Grid>
  );
};
