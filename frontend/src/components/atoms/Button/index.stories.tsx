import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import MuiButton from ".";
import GoogleLogo from "../../../../public/assets/images/google.svg";
import theme from "../../../theme";
import TypographyComponent from "../Typography";

export default {
  title: "Atoms/Button",
  component: MuiButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof MuiButton>;

const Template: StoryFn<typeof MuiButton> = (args) => <MuiButton {...args} />;

export const Outlined = Template.bind({});
export const Text = Template.bind({});
export const Contained = Template.bind({});
export const IconButton = Template.bind({});
export const Continue = Template.bind({});

Outlined.args = {
  variant: "outlined",
  text: <TypographyComponent variant="body2" text={"outlined"} />,
};
Text.args = {
  variant: "text",
  text: <TypographyComponent variant="body2" text={"Text"} />,
  sx: {
    borderRadius: "56px",
  },
};
Contained.args = {
  variant: "contained",
  text: <TypographyComponent variant="body2" text={"Next"} />,

  sx: {
    width: "516px",
    height: "56px",
    padding: "16px 43px",
    borderRadius: "56px",
    boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  },
};
IconButton.args = {
  variant: "outlined",
  text: <img src={GoogleLogo} alt="Icon" />,
  sx: {
    width: "56px",
    height: "56px",
    borderRadius: "56px",
    border: theme.palette.borderColors.prime,
    background: theme.palette.structuralColors.white,
  },
};
Continue.args = {
  variant: "contained",
  text: <TypographyComponent variant="body2" text={"Continue"} />,
  disabled: false,
  backgroundColor: theme.palette.primary[300],
  sx: {
    width: "135px",
    height: "56px",
    padding: "16px 30px",
    borderRadius: "56px",
  },
};
