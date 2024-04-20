import React from "react";
import SavedCard from ".";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Molecules/SavedCard",
  component: SavedCard,
} as Meta<typeof SavedCard>;

const template: StoryFn<typeof SavedCard> = (args) => <SavedCard {...args} />;

export const Default = template.bind({});
Default.args = {
  cardName: "EUR Visa Debit",
  lastFourDigits: "4546",
  expiryDate: "09/25",
};
