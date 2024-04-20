import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";
import { categories, countriesDropdownList } from "../../../constants";
const meta: Meta<typeof Dropdown> = {
  title: "molecules/Dropdown",
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DropdownStory: Story = {
  name: "dropdown",
  args: {
    label: "Category",
    placeholder: "Category",
    value: "Design, marketing or communication",
    items: categories,
  },
};
export const CountriesDropDown: Story = {
  name: "countriesDropDown",
  args: {
    label: "Country of registration",
    placeholder: "Select your country",
    value: "",
    countries: countriesDropdownList,
  },
};
