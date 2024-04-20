import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { TransferDetailsCard } from ".";

export default {
  title: "Organisms/TransferDetailsCard",
  component: TransferDetailsCard,
} as Meta<typeof TransferDetailsCard>;

const template: StoryFn<typeof TransferDetailsCard> = (args) => (
  <TransferDetailsCard {...args} />
);

export const TransferDetails = template.bind({});
TransferDetails.args = {
  payState: true,
  receiverCurrencyType: "EUR",
  senderCurrencyType: "GBR",
  currencyExchangeRate: 1.14,
  amount_to_convert: 77.74,
  totalAmount: 100,
  fee: 0,
  receiverData: {
    firstName: "Mario",
    lastName: "Gabriel",
    email: "mario.gabriel@gmail.com",
    accountNo: "21363738391910",
    accountType: "Checking",
    ifsc: "scfdw",
  },
};

export const ConfirmPayment = template.bind({});
ConfirmPayment.args = {
  payState: false,
  receiverCurrencyType: "EUR",
  senderCurrencyType: "GBR",
  currencyExchangeRate: 1.14,
  amount_to_convert: 77.74,
  totalAmount: 100,
  fee: 0,
  receiverData: {
    firstName: "Mario",
    lastName: "Gabriel",
    email: "mario.gabriel@gmail.com",
    accountNo: "21363738391910",
    accountType: "Checking",
    ifsc: "scfdw",
  },
};
