import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Register from ".";
import { SignUpContextProvider } from "../../../context/CountryContext";

export default {
  title: "Organisms/Register",
  component: Register,
} as Meta;

const Template: StoryFn<typeof Register> = (args) => <SignUpContextProvider><Register {...args} /></SignUpContextProvider>;

export const Primary = Template.bind({});

Primary.args = {};
