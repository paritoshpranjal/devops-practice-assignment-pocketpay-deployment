import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SelectCountry } from '.';
import { SignUpContextProvider } from '../../../context/CountryContext';

export default {
    title: 'Organisms/SelectCountry',
    component: SelectCountry
} as Meta;

const Template: StoryFn<typeof SelectCountry> = (args) => (
    <SignUpContextProvider><SelectCountry {...args} /></SignUpContextProvider>
);

export const Default = Template.bind({});