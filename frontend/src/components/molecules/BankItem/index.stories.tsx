import type { Meta, StoryObj } from "@storybook/react";
import { BankItem } from ".";
import sbiIcon from "../../../../public/assets/icons/sbi.svg";
const meta: Meta<typeof BankItem> = {
  title: "molecules/bankItem",
  component: BankItem,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Bank: Story = {
  args: {
    alt: "sbiIcon",
    icon: sbiIcon,
    name: "State bank of India",
  },
};
