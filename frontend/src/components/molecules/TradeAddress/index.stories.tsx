import type { Meta, StoryObj } from "@storybook/react";
import { TradeAddressCard } from ".";
import { tradeAddressValue } from "../../../constants";
const meta: Meta<typeof TradeAddressCard> = {
  title: "molecules/tradeAddressCard",
  component: TradeAddressCard,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const TradeAddress: Story = {
  name: "tradeAddress",
  args: {
    label: "Trading Address 2",
    value: tradeAddressValue,
  },
};
