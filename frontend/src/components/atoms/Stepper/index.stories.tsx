import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Step, StepLabel} from "@mui/material";
import { MuiStepper } from ".";
import theme from "../../../theme";

export default {
  title: "Atoms/StepperAtom",
  component: MuiStepper,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof MuiStepper>;

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

const CustomStepIcon = ({ active, completed }: { active: boolean, completed: boolean }) => {
  return (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: '50%',
        backgroundColor: active || completed ? theme.palette.primary[500] : theme.palette.otherColors.stroke2,
      }}
    />
  );
};


const Template: StoryFn<typeof MuiStepper> = (args) => <MuiStepper {...args} />;

export const HorizontalStepper = Template.bind({});
HorizontalStepper.args = {
  activeStep: 2,
  orientation: 'horizontal',
  alternativeLabel: true,
  children: (
    steps.map((label) => (
      <Step key={label} >
        <StepLabel StepIconComponent={(props) => <CustomStepIcon {...props} />} />
      </Step>
    ))
  ),
};





