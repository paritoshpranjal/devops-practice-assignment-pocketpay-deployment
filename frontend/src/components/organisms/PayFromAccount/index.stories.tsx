import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PayFromAccountCard } from '.';


export default {
    title: "Organisms/PayFromAccount",
    component: PayFromAccountCard,
  } as Meta<typeof PayFromAccountCard>;


const template: StoryFn<typeof PayFromAccountCard> = (args) => <PayFromAccountCard {...args} />;


export const PayFromAccount = template.bind({})
PayFromAccount.args = {
  accountType:"business",
  amount:"75.38 GBP"
}
