import React from "react";
import { Meta,  StoryFn } from "@storybook/react";
import ChooseBank from ".";

export default {
  component: ChooseBank,
  title: "Organisms/ChooseBank",
} as Meta<typeof ChooseBank>;

const Template: StoryFn<typeof ChooseBank> = (args) => <ChooseBank {...args} />;
export const Default = Template.bind({});
Default.args = {
  onClickCancelButton:() => {},
  onClickBankAccount:() => {}
};
