import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import VerifyAccount from ".";
import { UserBusinessDetailsContextProvider } from "../../../context/UserBusinessDetailsContext";

export default {
  title: "Organisms/VerifyAccount",
  component: VerifyAccount,
} as Meta<typeof VerifyAccount>;

const template: StoryFn<typeof VerifyAccount> = (props) => <UserBusinessDetailsContextProvider><VerifyAccount {...props} /></UserBusinessDetailsContextProvider>;

export const Primary = template.bind({});
Primary.args = {};
