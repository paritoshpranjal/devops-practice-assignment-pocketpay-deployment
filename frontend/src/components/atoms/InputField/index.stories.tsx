import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { InputField } from ".";
import MuiIcon from "../Icon";
import EYE_CLOSE from "../../../../public/assets/icons/eyeclosed.svg";

export default {
  title: "Atoms/InputField",
  component: InputField,
  argTypes: {
    onChange: { action: "clicked" },
  },
} as Meta<typeof InputField>;

const template: StoryFn<typeof InputField> = (args) => <InputField {...args} />;

export const Email = template.bind({});
Email.args = {
  type: "text",
  label: "Email",
  style: {
    width: "516px",
  },
};

export const Password = template.bind({});
Password.args = {
  type: "password",
  label: "Password",
  value: "password",
  style: {
    width: "516px",
  },
  endAdornment: <MuiIcon src={EYE_CLOSE} />,
};
