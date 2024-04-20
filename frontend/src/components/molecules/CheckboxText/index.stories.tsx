import type { Meta, StoryObj } from "@storybook/react";
import { CheckBoxText } from ".";
const meta: Meta<typeof CheckBoxText> = {
  title: "molecules/CheckBoxText",
  component: CheckBoxText,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const CheckboxLabel: Story = {
  name: "checkboxLabel",
  args: {
    label: "Remember me",
    gap: "12px",
    checked: true,
  },
};
