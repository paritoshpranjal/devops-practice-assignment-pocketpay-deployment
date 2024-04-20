import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { MuiModal } from ".";
import { CancelTransferPopup } from "../CancelTransferPopup";

export default {
  title: "Molecules/Modal",
  component: MuiModal,
} as Meta<typeof MuiModal>;

const template: StoryFn<typeof MuiModal> = (args) => <MuiModal {...args} />;

export const CancelTranferModal = template.bind({});
CancelTranferModal.args = {
  open: true,
  element: <CancelTransferPopup cancelTranfer={true} />,
};
export const SendTransferModal = template.bind({});
SendTransferModal.args = {
  open: true,
  element: <CancelTransferPopup cancelTranfer={false} />,
};
