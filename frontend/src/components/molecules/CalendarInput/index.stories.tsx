import React from "react";
import Calendar from ".";
import type { Meta, StoryObj } from "@storybook/react";
import TypographyComponent from "../../atoms/Typography";

const meta: Meta<typeof Calendar> = {
  title: "Molecules/CalendarInput",
  component: Calendar,
  argTypes: {
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultIcon: Story = {
  args: {
    label: <TypographyComponent text={"Date of birth"} variant={'body2'} />,
    autofocus: true,
    onChange: (newDate: Date | null) => {},
    textFieldHeight: "60px",
    textFieldWidth: "516px",
  },
};
