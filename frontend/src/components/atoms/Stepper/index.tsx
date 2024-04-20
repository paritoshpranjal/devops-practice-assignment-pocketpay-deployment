import React from "react";
import { Stepper, StepperProps } from "@mui/material";

interface CustomStepperProps extends StepperProps {
  orientation?: "vertical" | "horizontal";
  activeStep: number;
  alternativeLabel?: boolean;
}

export const MuiStepper = ({
  orientation,
  activeStep,
  alternativeLabel,
  ...props
}: CustomStepperProps) => {
  return (
    <Stepper
      data-testid="stepper"
      orientation={orientation}
      activeStep={activeStep}
      alternativeLabel={alternativeLabel}
      {...props}
    >
      {props.children}
    </Stepper>
  );
};
