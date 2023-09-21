import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FarewellScreen } from 'src/routes/root/my-info/WithdrawScreen/FarewellScreen';

export default {
  title: 'FarewellScreen',
  component: FarewellScreen,
} as ComponentMeta<typeof FarewellScreen>;

const Template: ComponentStory<typeof FarewellScreen> = () => (
  <FarewellScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
