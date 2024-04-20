import React from "react";
import CustomChip from ".";
import { Meta, StoryFn } from "@storybook/react";
import theme from "../../../theme";

export default {
  title: "Atoms/Chip",
  component: CustomChip,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof CustomChip>;

const Template: StoryFn<typeof CustomChip> = (args) => <CustomChip {...args} />;

export const Chips = Template.bind({});
Chips.args = {
  label: "New",
  variant: "filled",
};
export const primary = Template.bind({});
primary.args = {
  label: "New",
  variant: "outlined",
  style: {
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.structuralColors.white,
  },
};
