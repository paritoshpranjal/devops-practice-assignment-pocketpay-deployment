import { Meta, StoryFn } from "@storybook/react";
import Icon from ".";
import BankIcon from "../../../../public/assets/icons/bank.svg";
import CardIcon from "../../../../public/assets/icons/card.svg";
import LyodsBankIcon from "../../../../public/assets/icons/Lloydsbank.svg";
import MuiIcon from ".";

export default {
  title: "Atoms/Icon",
  component: MuiIcon,
} as Meta<typeof MuiIcon>;

const template: StoryFn<typeof MuiIcon> = (args) => <MuiIcon {...args} />;

export const DebitCard = template.bind({});
DebitCard.args = {
  src: CardIcon,
  alt: "Debit Card",
};

export const Bank = template.bind({});
Bank.args = {
  src: BankIcon,
  alt: "Bank Icon",
};

export const LyodsBank = template.bind({});
LyodsBank.args = {
  src: LyodsBankIcon,
  alt: "Lyods Bank Logo",
};
