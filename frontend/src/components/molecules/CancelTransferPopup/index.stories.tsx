import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CancelTransferPopup } from '.';



export default {
    title: "Molecules/CancelTransferPopUp",
    component: CancelTransferPopup,
  } as Meta<typeof CancelTransferPopup>;


const template: StoryFn<typeof CancelTransferPopup> = (args) => <CancelTransferPopup {...args} />;

  
export const CancelTranfer = template.bind({})
CancelTranfer.args = {
    cancelTranfer:  true
}
export const SendMoneyPopUp = template.bind({})
SendMoneyPopUp.args = {
    cancelTranfer:  false
}
  
