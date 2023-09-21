import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WithdrawFeedbackScreen } from 'src/routes/root/my-info/WithdrawFeedbackScreen';

export default {
  title: 'WithdrawFeedbackScreen',
  component: WithdrawFeedbackScreen,
} as ComponentMeta<typeof WithdrawFeedbackScreen>;

const Template: ComponentStory<typeof WithdrawFeedbackScreen> = () => (
  <WithdrawFeedbackScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
