import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ConfirmTradingAddress } from '.';
import { UserBusinessDetailsContextProvider } from '../../../context/UserBusinessDetailsContext';


export default {
    title: "Organisms/ConfirmTradingAddress",
    component: ConfirmTradingAddress,
  } as Meta<typeof ConfirmTradingAddress>;


const template: StoryFn<typeof ConfirmTradingAddress> = (args) => <UserBusinessDetailsContextProvider><ConfirmTradingAddress {...args} /></UserBusinessDetailsContextProvider>;


export const ConfirmTradingAddressCard = template.bind({})
ConfirmTradingAddressCard.args = {
 tradeAddress:" #2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054",
}
