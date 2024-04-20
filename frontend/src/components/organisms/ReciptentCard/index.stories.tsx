import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { RECIPEINT_TYPE_VALUES_DATA } from "../../../constants";
import RecipientCard from ".";
export default {
  title: "Organisms/RecipientCard",
  component: RecipientCard,
  argTypes: {
    handleClick: { action: "option clicked" },
  },
} as Meta<typeof RecipientCard>;

const template: StoryFn<typeof RecipientCard> = (args) => (
  <RecipientCard {...args} />
);

export const Primary = template.bind({});
Primary.args = {
  labels: RECIPEINT_TYPE_VALUES_DATA,
  cardId: 3,
};
