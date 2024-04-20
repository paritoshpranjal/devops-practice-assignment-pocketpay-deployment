import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CardType from ".";
import { CARD_ITEMS } from "../../../constants";
import { TransactionContextProvider } from "../../../context/TransactionContext";

export default {
  title: "Organisms/CardType",
  component: CardType,
} as Meta<typeof CardType>;

const template: StoryFn<typeof CardType> = () => (
  <TransactionContextProvider>
    <CardType cards={CARD_ITEMS} />
  </TransactionContextProvider>
);

export const CardTypeAccount = template.bind({});
CardTypeAccount.args = {};
