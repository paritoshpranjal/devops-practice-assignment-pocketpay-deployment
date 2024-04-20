import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import AccountType from ".";
import {
  ACCOUNT_TYPE_OPTIONS,
  ACCOUNT_TYPE_SUBTITLE,
  ACCOUNT_TYPE_TITLE,
  SENDING_MONEY,
  SENDING_MONEY_TITLE,
} from "../../../constants";

export default {
  title: "Organisms/AccountType",
  component: AccountType,
} as Meta;

const Template: StoryFn = (args) => <AccountType data={[]} {...args} />;

export const accountType = Template.bind({});
accountType.args = {
  data: ACCOUNT_TYPE_OPTIONS,
  title: ACCOUNT_TYPE_TITLE,
  info: ACCOUNT_TYPE_SUBTITLE,
};
export const transferOptions = Template.bind({});
transferOptions.args = {
  data: SENDING_MONEY,
  title: SENDING_MONEY_TITLE,
};
