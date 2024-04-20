import React from "react";
import ShareTrackingModal from ".";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Molecules/ShareTrackingModal",
  component: ShareTrackingModal,
} as Meta<typeof ShareTrackingModal>;

const template: StoryFn<typeof ShareTrackingModal> = () => (
  <ShareTrackingModal />
);
export const ShareTracking = template.bind({});
ShareTracking.args = {};
