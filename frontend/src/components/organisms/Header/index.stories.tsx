import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Header } from '.';


export default {
    title: "Organisms/Header",
    component: Header,
  } as Meta<typeof Header>;


const template: StoryFn<typeof Header> = (args) => <Header {...args} />;


export const HeaderCard = template.bind({})
HeaderCard.args = {
  username:"Ross Gener",
  id:"P44561754",
}
