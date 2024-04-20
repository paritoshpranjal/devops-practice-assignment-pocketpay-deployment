import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ConfirmBusinessDirectors from ".";
import { TransactionContextProvider } from "../../../context/TransactionContext";

export default {
  component: ConfirmBusinessDirectors,
  title: "Organisms/ConfirmBusinessDirectors",
  decorators: [
    (Story) => (
      <TransactionContextProvider>
        <Story />
      </TransactionContextProvider>
    ),
  ],
} as Meta<typeof ConfirmBusinessDirectors>;

const Template: StoryFn<typeof ConfirmBusinessDirectors> = (args) => (
  <ConfirmBusinessDirectors {...args} />
);
export const Default = Template.bind({});
Default.args = {
  isDirectors: true,
};
