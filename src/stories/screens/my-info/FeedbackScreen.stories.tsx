import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FeedbackScreen } from 'src/routes/root/my-info/FeedbackScreen';

export default {
  title: 'FeedbackScreen',
  component: FeedbackScreen,
} as ComponentMeta<typeof FeedbackScreen>;

const Template: ComponentStory<typeof FeedbackScreen> = () => (
  <FeedbackScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
