import React from "react";
import { Box, styled, Step, StepLabel } from "@mui/material";
import theme from "../../../theme";
import TypographyComponent from "../../atoms/Typography";
import { MuiStepper } from "../../atoms/Stepper";

export interface StepperProps {
  presentValue: number;
  verticalStepperValues: StepObject[];
}

type StepObject = {
  leftLable: string;
  rightLable: string;
};

const StepperStyled = styled(MuiStepper)({
  "& .MuiTypography-root": {
    lineHeight: 0,
    width: "26.313rem",
    textAlign: "right",
    color: theme.palette.text.lowemphasis,
  },
  "& .MuiStepConnector-line.MuiStepConnector-lineVertical": {
    width: "0.125rem",
    background: theme.palette.primary[500],
    borderLeft: "none",
    height: "1.938rem",
  },
  "& .MuiStepLabel-iconContainer.Mui-disabled": {
    "& .dot": {
      background: theme.palette.otherColors.stroke2,
    },
  },
  "& .MuiStepConnector-root.MuiStepConnector-vertical.Mui-disabled": {
    "& span": {
      background: theme.palette.otherColors.stroke2,
    },
  },
  "& .MuiStepConnector-root.MuiStepConnector-vertical": {
    display: "flex",
    justifyContent: "center",
    marginLeft: "0",
    width: "100%",
    margin: "0 auto",
  },
  "& .MuiStepLabel-root.MuiStepLabel-vertical": {
    padding: "0",
  },
  "& .MuiStepLabel-iconContainer": {
    padding: "0",
  },
  "& .right-typo": {
    textAlign: "left",
  },
  "& .dot": {
    borderRadius: "100%",
    background: theme.palette.primary[500],
    width: "0.5rem",
    height: "0.5rem",
  },
  "& .MuiStep-root.MuiStep-vertical.Mui-completed": {
    "& .MuiTypography-root": {
      color: theme.palette.text.high,
    },
  },
  "& .active-step .MuiTypography-root": {
    color: theme.palette.primary[500],
  },
});

const StyledStepperContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
});

const StyledStepLabelContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

const Circle = () => {
  return <Box className="dot" />;
};

export const TransactionStepper = ({
  presentValue,
  verticalStepperValues,
}: StepperProps) => {
  return (
    <StepperStyled
      orientation="vertical"
      activeStep={presentValue - 1}
      data-testid="transaction-stepper"
    >
      {verticalStepperValues.map((step, index) => (
        <Step
          key={step.leftLable}
          className={index === presentValue - 1 ? "active-step" : ""}
        >
          <StyledStepperContainer>
            <StyledStepLabelContainer>
              <TypographyComponent variant="caption1" text={step.leftLable} />
            </StyledStepLabelContainer>
            <Box margin={"0rem 2rem"}>
              <StepLabel StepIconComponent={Circle} />
            </Box>
            <StyledStepLabelContainer>
              <TypographyComponent
                variant="caption1"
                className="right-typo"
                text={step.rightLable}
              />
            </StyledStepLabelContainer>
          </StyledStepperContainer>
        </Step>
      ))}
    </StepperStyled>
  );
};
