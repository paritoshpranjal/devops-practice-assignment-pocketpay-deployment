import React, { useContext, useState } from "react";
import { Stack, styled } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";
import { InputField } from "../../atoms/InputField";
import { CheckBoxText } from "../../molecules/CheckboxText";
import { Dropdown } from "../../molecules/Dropdown";
import MuiButton from "../../atoms/Button";
import {
  CONTINUE,
  FillRecipientConst,
  LoginCardValues,
} from "../../../constants";
import {
  isValidEmail,
  validateAccountNo,
  validateFirstName,
  validateIfsc,
  validateLastName,
} from "../../utils/functions";
import { TransactionContext } from "../../../context/TransactionContext";

interface InputFieldData {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error: boolean;
  helperText: string;
}

interface FillRecipientProps {
  handleContinue?: () => void;
}
type FormFields = {
  email: string;
  accountNo: string;
  firstName: string;
  lastName: string;
  ifsc: string;
  accountType: string;
  isValidGmail: boolean;
  accountNoError: boolean;
  firstNameError: boolean;
  lastNameError: boolean;
  ifscError: boolean;
};

const StyledButton = styled(MuiButton)({
  "width": "135px",
  "height": "56px",
  "padding": "16px 30px",
  "borderRadius": "56px",
  "&:disabled": {
    backgroundColor: Theme.palette.primary[100],
  },
});

const OverFlowStyles = styled(Stack)({
  "gap": "32px",
  "maxHeight": "550px",
  "overflowY": "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const FillRecipientDetails = (props: FillRecipientProps) => {
  const { transaction, setTransaction } = useContext(TransactionContext);
  const [formFields, setFormFields] = useState<FormFields>({
    ...transaction.recipientDetails,
    isValidGmail: false,
    accountNoError: false,
    firstNameError: false,
    lastNameError: false,
    ifscError: false,
  });

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setFormFields({
      ...formFields,
      email,
      isValidGmail: !isValidEmail(email),
    });
  };

  const handleAccountNo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormFields({
      ...formFields,
      accountNo: value,
      accountNoError: !validateAccountNo(value),
    });
  };

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const firstName = event.target.value;
    setFormFields({
      ...formFields,
      firstName,
      firstNameError: validateFirstName(firstName),
    });
  };

  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lastName = event.target.value;
    setFormFields({
      ...formFields,
      lastName,
      lastNameError: validateLastName(lastName),
    });
  };

  const handleIfsc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ifscCode = event.target.value;
    setFormFields({
      ...formFields,
      ifsc: ifscCode,
      ifscError: validateIfsc(ifscCode),
    });
  };

  const handleAccountType = (value: "CHECKING" | "SAVING") => {
    setFormFields({
      ...formFields,
      accountType: value,
    });
  };

  const isFormValid = () => {
    return (
      isValidEmail(formFields.email) &&
      validateAccountNo(formFields.accountNo) &&
      !validateFirstName(formFields.firstName) &&
      !validateLastName(formFields.lastName) &&
      !validateIfsc(formFields.ifsc) &&
      formFields.accountType.trim() !== ""
    );
  };

  const inputFields: InputFieldData[] = [
    {
      value: formFields.accountNo,
      onChange: handleAccountNo,
      label: FillRecipientConst.ACCOUNTNUMBER_LABEL,
      error: formFields.accountNoError,
      helperText: formFields.accountNoError
        ? LoginCardValues.AccountNumberText
        : "",
    },
    {
      value: formFields.firstName,
      onChange: handleFirstName,
      label: FillRecipientConst.FIRST_NAME,
      error: formFields.firstNameError,
      helperText: formFields.firstNameError
        ? LoginCardValues.FirstNameErrorText
        : "",
    },
    {
      value: formFields.lastName,
      onChange: handleLastName,
      label: FillRecipientConst.LAST_NAME,
      error: formFields.lastNameError,
      helperText: formFields.lastNameError
        ? LoginCardValues.LastNameErrorText
        : "",
    },
    {
      value: formFields.ifsc,
      onChange: handleIfsc,
      label: FillRecipientConst.IFSC_CODE,
      error: formFields.ifscError,
      helperText: formFields.ifscError ? LoginCardValues.IfscErrorText : "",
    },
  ];
  const handleContinue = () => {
    setTransaction((prev) => ({
      ...prev,
      recipientDetails: {
        email: formFields.email,
        accountNo: formFields.accountNo,
        accountType: formFields.accountType,
        firstName: formFields.firstName,
        ifsc: formFields.ifsc,
        lastName: formFields.lastName,
      },
    }));
    props.handleContinue?.();
  };
  return (
    <Stack maxWidth={"516px"}>
      <OverFlowStyles>
        <TypographyComponent
          variant={"h1"}
          text={FillRecipientConst.MAIN_TEXT}
          color={Theme.palette.text.high}
        />
        <Stack gap={"40px"}>
          <Stack gap={"14px"}>
            <InputField
              value={formFields.email}
              onChange={handleEmail}
              placeholder={FillRecipientConst.EMAIL_PLACEHOLDER}
              error={formFields.isValidGmail}
              helperText={
                formFields.isValidGmail ? LoginCardValues.emailHelperText : ""
              }
            />
            <CheckBoxText
              label={FillRecipientConst.CHECKBOX_LABEL}
              gap={"8px"}
              checked={true}
            />
          </Stack>
          <Stack gap={"26px"}>
            <TypographyComponent
              variant={"body3"}
              text={FillRecipientConst.SUB_TEXT}
              color={Theme.palette.text.high}
            />
            {inputFields.map((inputField) => (
              <InputField
                key={inputField.label}
                value={inputField.value}
                onChange={inputField.onChange}
                label={inputField.label}
                error={inputField.error}
                helperText={inputField.helperText}
              />
            ))}
            <Dropdown
              value={formFields.accountType}
              onSelectValue={handleAccountType}
              placeholder={FillRecipientConst.DROPDOWN_PLACEHOLDER}
              label={FillRecipientConst.DROPDOWN_LABEL}
              items={FillRecipientConst.DROPDOWN_ITEMS}
            />
          </Stack>
        </Stack>
      </OverFlowStyles>
      <Stack marginLeft={"517px"}>
        <StyledButton
          variant="contained"
          disabled={!isFormValid()}
          text={
            <TypographyComponent
              text={CONTINUE}
              variant={"body2"}
              color={Theme.palette.structuralColors.white}
            />
          }
          onClick={handleContinue}
        />
      </Stack>
    </Stack>
  );
};

export default FillRecipientDetails;
