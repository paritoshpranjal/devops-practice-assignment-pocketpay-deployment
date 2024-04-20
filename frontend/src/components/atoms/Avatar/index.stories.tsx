import React from "react";
import AvatarComponent from ".";
import { Meta, StoryFn } from "@storybook/react";
import Logo from "../../../../public/assets/images/avatar.svg";

export default {
  title: "Atoms/Avatar",
  component: AvatarComponent,
} as Meta<typeof AvatarComponent>;

const Template: StoryFn<typeof AvatarComponent> = (args: any) => (
  <AvatarComponent {...args} />
);

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
  src: Logo,
  sx: { width: "28px", height: "28px" },
};
