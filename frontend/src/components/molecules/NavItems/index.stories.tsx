import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import home from "../../../../public/assets/icons/home.svg";
import { NavItem } from ".";
import Theme from "../../../theme";
import card from "../../../../public/assets/icons/creditCard.svg";

export default {
  title: "Molecules/NavItem",
  component: NavItem,
  argTypes: {
    text: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: ["h1", "body1", "body2", "body3", "caption1"],
      },
    },
  },
} as Meta;

const Template: StoryFn<typeof NavItem> = (args) => <NavItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  src: home,
  text: "Home",
  variant: "Caption1",
  chip: true,
  chipname: "New",
  color: Theme.palette.primary.main,
};

export const Secondary = Template.bind({});
Secondary.args = {
  src: card,
  text: "Cards",
  variant: "Caption1",
  color: Theme.palette.text.medium,
};
