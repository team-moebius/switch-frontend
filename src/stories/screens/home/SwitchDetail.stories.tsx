import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SwitchDetailScreen } from 'src/routes/root/home/SwitchDetailScreen';

export default {
  title: 'SwitchDetail',
  component: SwitchDetailScreen,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof SwitchDetailScreen>;

const Template: ComponentStory<typeof SwitchDetailScreen> = () => (
  <SwitchDetailScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
