import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { MOBILE_NUMBER_DROPDOWN } from "../../../constants";
import VerifyPhoneNumber from ".";
import { SignUpContextProvider } from "../../../context/CountryContext";

export default {
  title: "organisms/VerifyPhoneNumber",
  component: VerifyPhoneNumber,
} as Meta<typeof VerifyPhoneNumber>;

const template: StoryFn<typeof VerifyPhoneNumber> = (args) => (
  <SignUpContextProvider><VerifyPhoneNumber {...args} /></SignUpContextProvider>
);

export const Primary = template.bind({});
Primary.args = {
  array: MOBILE_NUMBER_DROPDOWN,
};
