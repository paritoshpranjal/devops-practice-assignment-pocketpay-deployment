import { Meta, StoryFn } from "@storybook/react";
import StepperWithLabel, { StepperProps } from "./index";
import {
  HORIZONTAL_STEPPER_VALUES,
  SETUP_HORIZONTAL_STEPPER_VALUES,
} from "../../../constants";
import React from "react";
import { Box } from "@mui/material";

export default {
  title: "Molecules/StepperWithLabel",
  component: StepperWithLabel,
} as Meta;

const Template: StoryFn<StepperProps> = (args) => (
  <Box paddingLeft="20px">
    <StepperWithLabel {...args} />
  </Box>
);

export const HorizontalStepper = Template.bind({});
HorizontalStepper.args = {
  horizontalStepperValues: SETUP_HORIZONTAL_STEPPER_VALUES,
  presentValue: 2,
  width: "700px",
};

export const HorizontalOne = Template.bind({});
HorizontalOne.args = {
  horizontalStepperValues: HORIZONTAL_STEPPER_VALUES,
  presentValue: 4,
  width: "800px",
};
