import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SettingScreen } from 'src/routes/root/my-info/SettingScreen';

export default {
  title: 'SettingScreen',
  component: SettingScreen,
} as ComponentMeta<typeof SettingScreen>;

const Template: ComponentStory<typeof SettingScreen> = () => <SettingScreen />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
