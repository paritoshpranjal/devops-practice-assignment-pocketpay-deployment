import type { Meta, StoryObj } from "@storybook/react";
import { HomeTransaction } from ".";
const meta: Meta<typeof HomeTransaction> = {
  title: "organisms/HomeTransaction",
  component: HomeTransaction,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Transaction: Story = {
  name: "transaction",
  args: {
    accounts: ["4656", "4252"],
    createdAt: new Date(),
    recipientAmount: 114.14,
    recipientCode: "EUR",
    sendAmount: 100,
    sendCode: "GBP",
    senderName: "Mario Gabriel",
    username: "Ross Gener",
    transferNumber: "3227627272",
  },
};
