import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TransactionStepper } from ".";
import { TransactionStepperValues } from "../../../constants";
import { Box } from "@mui/material";

export default {
  title: "Molecules/TransactionStepper",
  component:TransactionStepper,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof TransactionStepper>;

const Template: StoryFn<typeof TransactionStepper> = (args) => <Box width={"26.313rem"}><TransactionStepper {...args} /></Box>;

export const VerticalStepper = Template.bind({});
VerticalStepper.args = {
    presentValue: 3,
  verticalStepperValues: TransactionStepperValues
};

