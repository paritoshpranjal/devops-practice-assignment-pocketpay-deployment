import React from "react";
import { Stack } from "@mui/material";
import styled from "@emotion/styled";
import Theme from "../../../theme";
import TypographyComponent from "../../atoms/Typography";
import MuiIcon from "../../atoms/Icon";
import ACCOUNT from "../../../../public/assets/images/accounts.svg";
import MuiButton from "../../atoms/Button";
import { PayFromAccountCardValues } from "../../../constants";

interface PayFromAccountCardProps {
  handleContinueButton?: () => void;
  accountType: string;
  amount: string;
}

const StyledOuterStack = styled(Stack)({
  width: "32.25rem",
  maxHeight: "38.313rem",
  height:"100%",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  gap: "2rem",
});
const StyledBox = styled(Stack)({
  height: "auto",
  border: `1px solid ${Theme.palette.otherColors.stroke2}`,
  borderRadius: "1rem",
  padding: "3rem 2rem",
});

const StyledContinueButton = styled(MuiButton)({
  padding: "1rem 2.688rem 1rem 2.688rem",
  borderRadius: "3.5rem",
  width: "13.625rem",
  height: "3.5rem",
  boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  "&:hover": {
    boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  },
});
const StyledPayManualButton = styled(MuiButton)({
  padding: "1rem 2.688rem 1rem 2.688rem",
  borderRadius: "3.5rem",
  width: "13.625rem",
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

const IconButtonStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2.5rem",
  marginTop: "2.5rem",
});

const StyledUl = styled("ul")({
  color: Theme.palette.text.medium,
  padding: "0px 1.625rem",
});

export const PayFromAccountCard = ({
  handleContinueButton,
  accountType,
  amount,
}: PayFromAccountCardProps) => {
  return (
    <StyledOuterStack>
      <TypographyComponent
        variant="h1"
        color={Theme.palette.text.high}
        text={PayFromAccountCardValues.heading}
      />
      <StyledBox>
        <TypographyComponent
          variant="body3"
          color={Theme.palette.text.medium}
          text={
            <>
              {PayFromAccountCardValues.subText_1}
              <span style={{ color: Theme.palette.text.high }}>
                {accountType}
              </span>
              {PayFromAccountCardValues.subText_2}
              <span style={{ color: Theme.palette.text.high }}>{amount}</span>
              {PayFromAccountCardValues.subtext_3}
            </>
          }
        />
        <Stack marginTop={"1.5rem"} gap={"1rem"}>
          <TypographyComponent
            variant="body1"
            color={Theme.palette.text.high}
            text={PayFromAccountCardValues.subText2}
          />
          <StyledUl>
            <Stack gap={"0.75rem"}>
              {PayFromAccountCardValues.list.map((item) => (
                <li key={item}>
                  <TypographyComponent
                    variant="body3"
                    color={Theme.palette.text.medium}
                    text={item}
                  />
                </li>
              ))}
            </Stack>
          </StyledUl>
        </Stack>
        <IconButtonStack>
          <MuiIcon src={ACCOUNT} alt="accounts" />
          <Stack gap={"1.25rem"}>
            <StyledContinueButton
              variant="contained"
              backgroundColor={Theme.palette.primary[500]}
              onClick={handleContinueButton}
              text={
                <TypographyComponent
                  variant="body2"
                  color={Theme.palette.structuralColors.white}
                  text={PayFromAccountCardValues.continueButtonName}
                />
              }
            />
            <StyledPayManualButton
              variant="contained"
              backgroundColor={Theme.palette.structuralColors.white}
              disabled
              text={
                <TypographyComponent
                  variant="body2"
                  color={Theme.palette.primary[500]}
                  text={PayFromAccountCardValues.payManuallyButton}
                />
              }
            />
          </Stack>
        </IconButtonStack>
      </StyledBox>
    </StyledOuterStack>
  );
};
