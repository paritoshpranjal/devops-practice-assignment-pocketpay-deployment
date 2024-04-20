import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { LoginCard } from '.';


export default {
    title: "Organisms/LoginCard",
    component: LoginCard,
  } as Meta<typeof LoginCard>;


const template: StoryFn<typeof LoginCard> = () => <LoginCard />;


export const LogIn = template.bind({})
LogIn.args = {
}
