import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Box } from "@mui/material";
import Theme from "../../../theme";
import { SIDE_NAV_ITEMS } from "../../../constants";
import SideNavBar from ".";

export default {
  title: "Organisms/SideNavBar",
  component: SideNavBar,
} as Meta;

const Template: StoryFn<typeof SideNavBar> = (args) => (
  <Box style={{ width: Theme.spacing(70), height: Theme.spacing(191) }}>
    <SideNavBar {...args} />
  </Box>
);

export const SubMenu = Template.bind({});
SubMenu.args = {
  data: SIDE_NAV_ITEMS,
  subMenuHidden: false,
};
export const HiddenSubMenu = Template.bind({});
HiddenSubMenu.args = {
  data: SIDE_NAV_ITEMS,
  subMenuHidden: true,
};
