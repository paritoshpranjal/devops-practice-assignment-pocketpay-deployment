import { Stack, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import MuiButton from "../../atoms/Button";
import Theme from "../../../theme";
import TypographyComponent from "../../atoms/Typography";
import { Dropdown } from "../../molecules/Dropdown";
import { VerificationCardValues } from "../../../constants";
import { TransactionContext } from "../../../context/TransactionContext";

interface VerificationCardProps {
  handleContinueButton?: () => void;
}

const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  maxWidth: "40rem",

  alignItems: "stretch",
  justifyContent: "space-between",
  height: "33.75rem",
  width: "100%",
});

const DropDownStack = styled(Stack)({
  marginBottom: "auto",
  width: "75%",
  gap: Theme.spacing(11),
});
const ContinueButton = styled(MuiButton)({
  padding: "1rem 1.875rem",
  width: "8.438rem",
  borderRadius: "3.5rem",
  height: "3.5rem",

  ["&:hover"]: {
    boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  },
  boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  ["&:disabled"]: {
    backgroundColor: Theme.palette.primary[100],
  },
});
const StyledButtonStack = styled(Stack)({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
});

export const VerificationCard = ({
  handleContinueButton,
}: VerificationCardProps) => {
  const { transaction, setTransaction } = useContext(TransactionContext);
  const [purpose, setPurpose] = useState<string>(transaction.purpose);
  const [buttonDisable, setButtonDisable] = useState(!purpose);
  const handleCountryChange = (value: string) => {
    setPurpose(value);
    setButtonDisable(false);
  };
  const handleContinue = () => {
    setTransaction((prev) => ({
      ...prev,
      purpose,
    }));
    handleContinueButton?.();
  };
  return (
    <StyledStack>
      <DropDownStack>
        <Stack gap={"0.75rem"}>
          <TypographyComponent
            variant="h1"
            color={Theme.palette.text.high}
            text={VerificationCardValues.heading}
          />
          <TypographyComponent
            variant="body3"
            color={Theme.palette.text.medium}
            text={VerificationCardValues.subText}
          />
        </Stack>

        <Dropdown
          label={VerificationCardValues.dropDownLabel}
          value={purpose}
          onSelectValue={handleCountryChange}
          placeholder={VerificationCardValues.dropDownPlaceHolder}
          items={VerificationCardValues.dropDownData}
        />
      </DropDownStack>
      <StyledButtonStack>
        <ContinueButton
          variant={"contained"}
          backgroundColor={Theme.palette.primary[500]}
          onClick={handleContinue}
          disabled={buttonDisable}
          text={
            <TypographyComponent
              variant="body2"
              color={Theme.palette.structuralColors.white}
              text={"Continue"}
            />
          }
        />
      </StyledButtonStack>
    </StyledStack>
  );
};
