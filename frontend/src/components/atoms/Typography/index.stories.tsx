import React from "react";
import TypographyComponent from ".";
import type { Meta, StoryFn } from "@storybook/react";
import Theme from "../../../theme";

export default {
  title: "Atoms/Typography",
  component: TypographyComponent,
} as Meta<typeof TypographyComponent>;

const template: StoryFn<typeof TypographyComponent> = (args) => <TypographyComponent {...args} />;

export const primary = template.bind({});
primary.args = {
  variant: "h1",
  color: "primary",
  text: "heading1",
};

export const body1 = template.bind({});
body1.args = {
  variant: "body3",
  text: "body1",
};

export const caption1 = template.bind({});
caption1.args = {
  variant: "caption1",
  text: "caption1",
  color: Theme.palette.text.lowemphasis,
};
