import type { Meta, StoryObj } from "@storybook/react";
import Search from ".";
import { searchBuisnessPlaceholderText } from "../../../constants";
const meta: Meta<typeof Search> = {
  title: "atoms/Search",
  component: Search,
  argTypes: {
    onChange: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const SearchField: Story = {
  name: "searchField",
  args: {
    options: [
      "Zemoso technologies pvt ltd",
      "Zentech solutions pvt ltd",
      "ZedX Infotech pvt ltd",
      "Zeswe Solutions pvt ltd",
    ],
    placeholder: searchBuisnessPlaceholderText,
    value: "",
  },
};
