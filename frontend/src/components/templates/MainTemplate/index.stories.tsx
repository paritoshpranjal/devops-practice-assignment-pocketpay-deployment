import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { MainTemplate } from ".";
import { HORIZONTAL_STEPPER_VALUES } from "../../../constants";
import { FillUserDetails } from "../../organisms/FillUserDetails";
import { LoginCard } from "../../organisms/LoginCard";
import { Stack } from "@mui/material";
import { UserBusinessDetailsContextProvider } from "../../../context/UserBusinessDetailsContext";

export default {
  title: "templates/MainTemplate",
  component: MainTemplate,
} as Meta<typeof MainTemplate>;

const template: StoryFn<typeof MainTemplate> = (args) => (
  <MainTemplate {...args} />
);

export const FillUser = template.bind({});
FillUser.args = {
  showClose: true,
  showStepper: true,
  stepperValues: HORIZONTAL_STEPPER_VALUES,
  presentValue: 1,
  showBack: true,
  stepperWidth:'788px',
  children: (
    <div>
      <UserBusinessDetailsContextProvider>
        <FillUserDetails onClickContinue={() => {}} />
      </UserBusinessDetailsContextProvider>
    </div>
  ),
};
export const SignIn = template.bind({});
SignIn.args = {
  children: <Stack width={'516px'}><LoginCard /></Stack>,
};
