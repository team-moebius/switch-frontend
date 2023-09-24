import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WithdrawInfoScreen } from 'src/routes/root/my-info/WithdrawScreen/WithdrawInfoScreen';

export default {
  title: 'WithdrawInfoScreen',
  component: WithdrawInfoScreen,
} as ComponentMeta<typeof WithdrawInfoScreen>;

const Template: ComponentStory<typeof WithdrawInfoScreen> = () => (
  <WithdrawInfoScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
