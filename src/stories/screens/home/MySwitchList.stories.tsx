import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MySwitchListScreen from 'src/routes/root/home/HomeMainScreen/MySwitchListScreen';

export default {
  title: 'MySwitchList',
  component: MySwitchListScreen,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof MySwitchListScreen>;

const Template: ComponentStory<typeof MySwitchListScreen> = () => (
  <MySwitchListScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
