import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SwitchRecordsScreen } from 'src/routes/root/my-info/SwitchRecordsScreen';

export default {
  title: 'SwitchRecordsScreen',
  component: SwitchRecordsScreen,
} as ComponentMeta<typeof SwitchRecordsScreen>;

const Template: ComponentStory<typeof SwitchRecordsScreen> = () => (
  <SwitchRecordsScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
