import React from "react";
import TabsComponent from ".";
import { Meta, StoryFn } from "@storybook/react";
import { CardTabs, HomeTabs } from "../../../constants";

export default {
  title: "molecules/TabsComponent",
  component: TabsComponent,
} as Meta<typeof TabsComponent>;

const Template: StoryFn<typeof TabsComponent> = (args) => (
  <TabsComponent {...args} />
);

export const Tabs = Template.bind({});
Tabs.args = {
  tabs: HomeTabs,
  height: '37px',
  indicatorWidth: '60px !important',
  indicatorLeft: "64px !important",
};

export const MuiTabs = Template.bind({});
MuiTabs.args = {
  tabs: CardTabs,
  width: '460px',
  height: '53px',
  tabsGap: '6rem',
  tabGap:true,
  indicatorWidth: '83px !important',
  indicatorLeft: "54px !important",
};
