import React from "react";
import { Box, Stack, styled } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";
import MuiIcon from "../../atoms/Icon";
import LEFTARROW from "../../../../public/assets/icons/leftArrow.svg";
import MuiButton from "../../atoms/Button";
import { TransferDetailsCardValues } from "../../../constants";

interface ReceiverData {
  email: string;
  accountNo: string;
  firstName: string;
  lastName: string;
  ifsc: string;
  accountType: string;
}
interface TransferDetailsCardProps {
  payState: boolean;
  receiverCurrencyType: string;
  senderCurrencyType: string;
  currencyExchangeRate: number;
  receiverData: ReceiverData;
  fee: number;
  totalAmount: number;
  amount_to_convert: number;
  handleContinueButton?: () => void;
  handleCancelButton?: () => void;
}
const StyledStack = styled(Box)({
  maxWidth: "29.625rem",
  width: "100%",
  height: "40.625rem",
  padding: "3rem 2rem",
  border: `1px solid ${Theme.palette.otherColors.stroke2}`,
  borderRadius: "1rem",
});

const StyledContinueToPayButton = styled(MuiButton)({
  width: "15.625rem",
  height: "3.5rem",
  boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  "&:hover": {
    boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  },
  padding: "1rem 2.688rem 1rem 2.688rem",
  borderRadius: "3.5rem",
});

const StyledMuiIcon = styled(MuiIcon)({
  width: "1.5rem",
  height: "1.5rem",
});
const StyledCancelTransferButton = styled(MuiButton)({
  padding: "1rem 2.688rem 1rem 2.688rem",
  borderRadius: "3.5rem",
  width: "15.625rem",
  height: "3.5rem",
  boxShadow: "0px 0.125rem 0.5rem 0px #1414141F",
  "&:hover": {
    boxShadow: "0px 0.125rem 0.5rem 0px #1414141F",
  },
  "&:disabled": {
    backgroundColor: Theme.palette.structuralColors.white,
    boxShadow: "0px 0.125rem 0.5rem 0px #1414141F",
  },
});

const IconTypoStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "0.5rem",
  marginTop: "0.25rem",
});
const StyledButtonStack = styled(Stack)({
  marginTop: "1.5rem",
  alignItems: "center",
  gap: "1.25rem",
});

const TypoStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  marginBottom: "0.625rem",
});

export const TransferDetailsCard = ({
  payState,
  receiverCurrencyType,
  currencyExchangeRate,
  senderCurrencyType,
  fee,
  totalAmount,
  amount_to_convert,
  receiverData,
  handleCancelButton,
  handleContinueButton,
}: TransferDetailsCardProps) => {
  const FeeDetails = [
    {
      id: 1,
      label: "Fee:",
      text: `${fee.toFixed(2).padStart(5, "0")} ${senderCurrencyType}`,
    },
    {
      id: 2,
      label: "Amount we’ll convert:",
      text: `${amount_to_convert
        .toFixed(2)
        .padStart(5, "0")} ${senderCurrencyType}`,
    },
    {
      id: 3,
      label: "Guranteed rate:",
      text: `1 ${senderCurrencyType} = ${currencyExchangeRate} ${receiverCurrencyType}`,
    },
  ];
  const RecipientDetails = [
    {
      id: 1,
      label: "Name:",
      text: `${receiverData.firstName} ${receiverData.lastName}`,
    },
    {
      id: 2,
      label: "Email:",
      text: receiverData.email,
    },
    {
      id: 3,
      label: "Account number:",
      text: receiverData.accountNo,
    },
    {
      id: 4,
      label: "Account type:",
      text: receiverData.accountType,
    },
  ];

  return (
    <StyledStack>
      <Stack gap={"1rem"}>
        <TypographyComponent
          variant="caption1"
          color={Theme.palette.text.lowemphasis}
          text={TransferDetailsCardValues.heading1}
        />
        <IconTypoStack>
          <TypographyComponent
            variant="body2"
            color={Theme.palette.text.high}
            text={`${totalAmount} ${senderCurrencyType}`}
          />
          <StyledMuiIcon src={LEFTARROW} alt="LeftArrow" />
          <TypographyComponent
            variant="body2"
            color={Theme.palette.text.high}
            text={`${(totalAmount * currencyExchangeRate).toFixed(
              2
            )} ${receiverCurrencyType}`}
          />
        </IconTypoStack>
        <Stack>
          {FeeDetails.map((item) => (
            <TypoStack key={item.id}>
              <TypographyComponent
                variant="body2"
                color={Theme.palette.text.medium}
                text={item.label}
              />
              <TypographyComponent
                variant="body2"
                color={Theme.palette.text.high}
                text={item.text}
              />
            </TypoStack>
          ))}
        </Stack>
      </Stack>
      <Stack gap={"1.25rem"} marginTop={"2.5rem"}>
        <TypographyComponent
          variant="caption1"
          color={Theme.palette.text.lowemphasis}
          text={TransferDetailsCardValues.heading2}
        />
        <Stack>
          {RecipientDetails.map((item) => (
            <TypoStack key={item.id}>
              <TypographyComponent
                variant="body2"
                color={Theme.palette.text.medium}
                text={item.label}
              />
              <TypographyComponent
                variant="body2"
                color={Theme.palette.text.high}
                text={item.text}
              />
            </TypoStack>
          ))}
        </Stack>
      </Stack>
      {payState && (
        <StyledButtonStack>
          <StyledContinueToPayButton
            variant="contained"
            onClick={handleContinueButton}
            backgroundColor={Theme.palette.primary[500]}
            text={
              <TypographyComponent
                variant="body2"
                color={Theme.palette.structuralColors.white}
                text={TransferDetailsCardValues.continueButton}
              />
            }
          />
          <StyledCancelTransferButton
            variant="contained"
            onClick={handleCancelButton}
            backgroundColor={Theme.palette.structuralColors.white}
            text={
              <TypographyComponent
                variant="body2"
                color={Theme.palette.primary[500]}
                text={TransferDetailsCardValues.cancelTransferButton}
              />
            }
          />
        </StyledButtonStack>
      )}
    </StyledStack>
  );
};
