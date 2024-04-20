import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CheckboxAtom, { CheckboxProps } from ".";

export default {
  title: "Atoms/CheckboxAtom",
  component: CheckboxAtom,
  
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <CheckboxAtom {...args} />;

export const UnCheckedBox = Template.bind({});
UnCheckedBox.args = {
  checked: false,
};
export const CheckedBox = Template.bind({});
CheckedBox.args = {
  checked: true,
};
