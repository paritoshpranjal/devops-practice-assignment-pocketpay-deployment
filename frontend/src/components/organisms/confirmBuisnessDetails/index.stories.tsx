import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmBuisnessDetails } from ".";
import { confirmDetails } from "../../../constants";
const meta: Meta<typeof ConfirmBuisnessDetails> = {
  title: "organisms/ConfirmBuisnessDetails",
  component: ConfirmBuisnessDetails,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const ConfirmDetails: Story = {
  name: "confirmDetails",
  args: confirmDetails,
};
