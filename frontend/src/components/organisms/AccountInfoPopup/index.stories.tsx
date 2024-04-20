import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AccountInfoPopup from ".";

export default {
    title: "Organisms/AccountInfoPopup",
    component: AccountInfoPopup,
} as Meta<typeof AccountInfoPopup>;

const Template: StoryFn<typeof AccountInfoPopup> = (args) => <AccountInfoPopup {...args} />

export const Default = Template.bind({});
Default.args = {
    userName:"Ross Gener",
    id:"P44561754"
}