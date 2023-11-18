import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NotificationsScreen } from 'src/routes/root/home/NotificationsScreen';

export default {
  title: 'Notification',
  component: NotificationsScreen,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof NotificationsScreen>;

const Template: ComponentStory<typeof NotificationsScreen> = () => (
  <NotificationsScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
