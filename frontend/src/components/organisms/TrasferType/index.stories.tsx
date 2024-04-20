import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import TransferType from ".";

export default {
  title: "Organisms/TransferType",
  component: TransferType,
} as Meta;

const Template: StoryFn = (args) => <TransferType {...args} />;

export const Default = Template.bind({});
Default.args = {};
