import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import FillRecipientDetails from ".";
import { TransactionContextProvider } from "../../../context/TransactionContext";

export default {
  title: "Organisms/FillRecipientDetails",
  component: FillRecipientDetails,
  decorators: [
    (Story) => (
      <TransactionContextProvider>
        <Story />
      </TransactionContextProvider>
    ),
  ],
} as Meta<typeof FillRecipientDetails>;

const Template: StoryFn<typeof FillRecipientDetails> = (args) => (
  <FillRecipientDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {};
