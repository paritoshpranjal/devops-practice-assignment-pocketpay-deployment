import type { Meta, StoryObj } from "@storybook/react";
import { ReviewTransferDetails } from ".";
import { TransactionContextProvider } from "../../../context/TransactionContext";
import React from "react";

const meta: Meta<typeof ReviewTransferDetails> = {
  title: "organisms/reviewTransferDetails",
  component: ReviewTransferDetails,
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
export const Review: Story = {
  name: "review",
  args: {
    amount: 77.74,
    fee: "00.00",
    rate: 1.14,
    reciepientCountryCode: "EUR",
    sendAmount: 100,
    sendCountryCode: "GBP",
    name: "Mario Gabriel",
    email: "mario.gabriel@gmail.com",
    accountNo: "213637383919",
    accountType: "Checking",
  },
};
