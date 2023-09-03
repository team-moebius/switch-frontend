import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { HomeMainScreen } from 'src/routes/root/home/HomeMainScreen';

export default {
  title: 'HomeMain',
  component: HomeMainScreen,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof HomeMainScreen>;

const Template: ComponentStory<typeof HomeMainScreen> = () => (
  <HomeMainScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
