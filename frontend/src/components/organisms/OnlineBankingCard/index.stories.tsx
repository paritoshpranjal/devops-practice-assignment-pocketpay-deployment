import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { OnlineBankingCard } from ".";

export default {
  title: "Organisms/OnlineBankingCard",
  component: OnlineBankingCard,
} as Meta<typeof OnlineBankingCard>;

const template: StoryFn<typeof OnlineBankingCard> = (args) => (
  <OnlineBankingCard {...args} />
);

export const OnlineBanking = template.bind({});
OnlineBanking.args = {
  data: {
    name: "Mario Gabriel",
    amount: "100.00 GBP",
    accountNo: "729019188810",
    sortCode: "23-12-12",
  },
};
