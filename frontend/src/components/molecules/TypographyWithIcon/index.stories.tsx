import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import IconTypograpy, { IconTypograpyProps } from "./index";
import sbi from "../../../../public/assets/icons/sbi.svg";
import llyod from "../../../../public/assets/icons/india.svg";
import home from "../../../../public/assets/icons/home.svg";
import theme from "../../../theme";

export default {
  title: "molecules/IconWithTypography",
  component: IconTypograpy,
} as Meta;

const Template: StoryFn<IconTypograpyProps> = (args) => (
  <IconTypograpy {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: `${sbi}`,
  content: "State Bank of India",
  color: theme.palette.text.high,
  variant: "caption1",
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  icon: `${llyod}`,
  content: "LLyod",
  color: theme.palette.text.high,
  variant: "caption1",
};
export const WithCustom = Template.bind({});
WithCustom.args = {
  icon: `${home}`,
  content: "Home",
  color: theme.palette.primary.main,
  variant: "caption1",
};
