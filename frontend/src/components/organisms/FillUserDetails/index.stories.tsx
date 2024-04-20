import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FillUserDetails } from ".";
import { UserBusinessDetailsContextProvider } from "../../../context/UserBusinessDetailsContext";

const meta: Meta<typeof FillUserDetails> = {
  title: "organisms/FillUserDetails",
  component: FillUserDetails,
  decorators: [
    (Story) => (
      <UserBusinessDetailsContextProvider>
        <Story />
      </UserBusinessDetailsContextProvider>    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const UserDetails: Story = {
  name: "userDetails",
  args: {},
};
