import React from "react";
import { Box, Stack } from "@mui/material";
import styled from "@emotion/styled";
import Theme from "../../../theme";
import TypographyComponent from "../../atoms/Typography";
import MuiButton from "../../atoms/Button";
import LIOYDS from "../../../../public/assets/icons/horse.svg";
import MuiIcon from "../../atoms/Icon";
import { OnlineBankingCardValues } from "../../../constants";

interface Data {
  name: string;
  amount: string;
  accountNo: string;
  sortCode: string;
}

interface PayFromAccountCardProps {
  handleContinueButton?: () => void;
  handleCancelTransferButton?: () => void;
  data: Data;
}

const StyledOuterStack = styled(Stack)({
  width: "32.25rem",
  maxHeight: "38.313rem",
  height: "100%",
  gap: "2rem",
  overflowY: "auto",
  ["&::-webkit-scrollbar"]: {
    display: "none",
  },
});
const StyledBox = styled(Stack)({
  height: "auto",
  border: `1px solid ${Theme.palette.otherColors.stroke2}`,
  borderRadius: "1rem",
  padding: "1rem 2rem 3rem 2rem",
  gap: "1rem",
});

const StyledContinueButton = styled(MuiButton)({
  width: "15.625rem",
  height: "3.5rem",
  padding: "1rem 2.688rem 1rem 2.688rem",
  borderRadius: "3.5rem",
  boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  ["&:hover"]: {
    boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  },
});
const StyledPayManualButton = styled(MuiButton)({
  width: "15.625rem",
  height: "3.5rem",
  padding: "1rem 2.688rem 1rem 2.688rem",
  borderRadius: "3.5rem",
  boxShadow: "0px 0.125rem 0.5rem 0px #1414141F",
  ["&:hover"]: {
    boxShadow: "0px 0.125rem 0.5rem 0px #1414141F",
  },
  ["&:disabled"]: {
    backgroundColor: Theme.palette.structuralColors.white,
    boxShadow: "0px 0.125rem 0.5rem 0px #1414141F",
  },
});
const StyledIconBox = styled(Box)({
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "3.125rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `1px solid ${Theme.palette.otherColors.stroke2}`,
});

const StyledButtonStack = styled(Stack)({
  gap: "1.25rem",
  marginTop: "1.5rem",
  alignItems: "center",
});

const DisplayStack = styled(Stack)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2.5rem",
  marginTop: "0.625rem",
});

const StyledIcon = styled(MuiIcon)({
  width: "0.984rem",
  height: "0.984rem",
});

export const OnlineBankingCard = ({
  handleContinueButton,
  handleCancelTransferButton,
  data,
}: PayFromAccountCardProps) => {
  const bankDetails = [
    {
      id: 1,
      label: "Payee name",
      data: data.name,
    },
    {
      id: 2,
      label: "Use this reference",
      data: "#356778810",
    },
    {
      id: 3,
      label: "Amount to send",
      data: data.amount,
    },
    {
      id: 4,
      label: "UK Sort code",
      data: data.sortCode,
    },
    {
      id: 5,
      label: "Account number",
      data: data.accountNo,
    },
  ];

  return (
    <StyledOuterStack>
      <TypographyComponent
        variant="h1"
        color={Theme.palette.text.high}
        text={OnlineBankingCardValues.heading}
      />
      <StyledBox>
        <Stack alignItems={"center"}>
          <StyledIconBox>
            <StyledIcon src={LIOYDS} alt="LIoyds bank" />
          </StyledIconBox>
        </Stack>
        <TypographyComponent
          variant="h1"
          color={Theme.palette.text.high}
          text={OnlineBankingCardValues.subHeading1}
        />
        <TypographyComponent
          variant="caption1"
          color={Theme.palette.text.medium}
          text={OnlineBankingCardValues.subHeading2}
        />
        <DisplayStack>
          {bankDetails.map((item) => (
            <Stack gap={"0.25rem"} key={item.label}>
              <TypographyComponent
                variant="caption1"
                color={Theme.palette.text.lowemphasis}
                text={item.label}
              />
              <TypographyComponent
                variant="caption1"
                color={Theme.palette.text.high}
                text={item.data}
              />
            </Stack>
          ))}
        </DisplayStack>
        <Stack marginTop={"1.5rem"} gap={"0.25rem"}>
          <TypographyComponent
            variant="caption1"
            color={Theme.palette.text.lowemphasis}
            text={OnlineBankingCardValues.bankDetails[0]}
          />
          <TypographyComponent
            variant="caption1"
            color={Theme.palette.text.high}
            style={{ whiteSpace: "pre-line" }}
            text={OnlineBankingCardValues.bankDetails[1]}
          />
        </Stack>
        <Stack marginTop={"1.5rem"}>
          <TypographyComponent
            variant="caption1"
            color={Theme.palette.text.medium}
            text={OnlineBankingCardValues.endText}
          />
        </Stack>

        <StyledButtonStack>
          <StyledContinueButton
            variant="contained"
            backgroundColor={Theme.palette.primary[500]}
            onClick={handleContinueButton}
            text={
              <TypographyComponent
                variant="body2"
                color={Theme.palette.structuralColors.white}
                text={OnlineBankingCardValues.continueButton}
              />
            }
          />
          <StyledPayManualButton
            variant="contained"
            backgroundColor={Theme.palette.structuralColors.white}
            onClick={handleCancelTransferButton}
            text={
              <TypographyComponent
                variant="body2"
                color={Theme.palette.primary[500]}
                text={OnlineBankingCardValues.cancelButton}
              />
            }
          />
        </StyledButtonStack>
      </StyledBox>
    </StyledOuterStack>
  );
};
