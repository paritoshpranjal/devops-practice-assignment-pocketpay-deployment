import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { VerificationCard } from ".";
import { TransactionContextProvider } from "../../../context/TransactionContext";

export default {
  title: "Organisms/VerificationCard",
  component: VerificationCard,
  decorators: [
    (Story) => (
      <TransactionContextProvider>
        <Story />
      </TransactionContextProvider>
    ),
  ],
} as Meta<typeof VerificationCard>;

const template: StoryFn<typeof VerificationCard> = () => <VerificationCard />;

export const VerificationCardDefault = template.bind({});
VerificationCardDefault.args = {};
