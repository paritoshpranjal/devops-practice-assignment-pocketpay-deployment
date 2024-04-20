import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { AccountCard } from '.';
import PERSON from "../../../../public/assets/icons/person.svg";
import SETUP from "../../../../public/assets/icons/setup.svg";
import SEND from "../../../../public/assets/icons/send.svg";
import BUSINESS from "../../../../public/assets/icons/business.svg";
import { AccountCardValues } from '../../../constants';


export default {
    title: 'Molecules/AccountCard',
    component: AccountCard,
} as Meta;



const Template: StoryFn<typeof AccountCard> = (args) => (
    <AccountCard {...args}  />
);



export const PersonalAccount = Template.bind({});
PersonalAccount.args = {
    icon: PERSON,
    headingText: AccountCardValues.personalAccount[0],
    subText:AccountCardValues.personalAccount[1],
};

export const BusinessAccount = Template.bind({});
BusinessAccount.args = {
    icon: BUSINESS,
    headingText: AccountCardValues.businessAccount[0],
    subText:AccountCardValues.businessAccount[1],
    handleCardClick:()=>{},
    clickable:true
};

export const SendMoney = Template.bind({});
SendMoney.args = {
    icon: SEND,
    headingText: AccountCardValues.sendmoney[0],
    subText:AccountCardValues.sendmoney[1],
};

export const FinishAccountSetup = Template.bind({});
FinishAccountSetup.args = {
    icon: SETUP,
    headingText: AccountCardValues.finishAccountSetup[0],
    subText: AccountCardValues.finishAccountSetup[1]
};
