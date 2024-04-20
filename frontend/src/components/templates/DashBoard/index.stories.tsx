import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import DashBoard from '.';
import SideNavBar from '../../organisms/SideNavBar';
import { Header } from '../../organisms/Header';
import { SIDE_NAV_ITEMS } from '../../../constants';
import ImageTypography from '../../molecules/ImageWithTypography';
import Image from '../../../../public/assets/images/Illustration.svg'

export default {
    title: 'Templates/DashBoard',
    component: DashBoard
} as Meta;

const Template: StoryFn<typeof DashBoard> = (args) => (
    <DashBoard {...args} />
);

export const Default = Template.bind({});

Default.args = { 
    navBar:<SideNavBar data={SIDE_NAV_ITEMS} subMenuHidden={true} />,
    header:<Header  username={'Ross Gener'} id={'P44561754'}/>,
    body:<ImageTypography text={'This is where you’ll see your activity and transactions. Choose how you’d like to get started.'} src={Image} />
};
