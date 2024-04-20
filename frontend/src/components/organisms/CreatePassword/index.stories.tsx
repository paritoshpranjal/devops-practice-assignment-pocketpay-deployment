import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { CreatePasswordCard } from ".";
import { SignUpContextProvider } from "../../../context/CountryContext";

export default {
  title: "Organisms/CreatePassword",
  component: CreatePasswordCard,
} as Meta<typeof CreatePasswordCard>;

const template: StoryFn<typeof CreatePasswordCard> = () => (
  <SignUpContextProvider>
    <CreatePasswordCard handleContinueButton={()=>{}} />
  </SignUpContextProvider>
);

export const NewPassword = template.bind({});
NewPassword.args = {};