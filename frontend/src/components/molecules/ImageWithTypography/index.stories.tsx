import React from 'react';
import ImageTypography from '.';
import { StoryFn, Meta } from '@storybook/react';
import Image from '../../../../public/assets/images/Illustration.svg'

export default {
    title: 'Molecules/ImageWithTypography',
    component: ImageTypography,
} as Meta;

const Template: StoryFn<typeof ImageTypography> = (args) => (
    <ImageTypography {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    text: "This is where you’ll see your activity and transactions. Choose how you’d like to get started.",
    src: Image,
};
