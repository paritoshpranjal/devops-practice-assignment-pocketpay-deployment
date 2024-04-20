import type { Meta, StoryObj } from "@storybook/react";
import { AmountCard } from ".";
import { amountCardProps } from "../../../constants";
import { TransactionContextProvider } from "../../../context/TransactionContext";
import React from "react";
const meta: Meta<typeof AmountCard> = {
  title: "organisms/AmountCard",
  component: AmountCard,
  decorators: [
    (Story) => (
      <TransactionContextProvider>
        <Story />
      </TransactionContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const AmountCardDetails: Story = {
  name: "amount card details",
  args: amountCardProps,
};
