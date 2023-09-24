import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SettingMainScreen } from 'src/routes/root/my-info/SettingMainScreen';

export default {
  title: 'SettingMainScreen',
  component: SettingMainScreen,
} as ComponentMeta<typeof SettingMainScreen>;

const Template: ComponentStory<typeof SettingMainScreen> = () => (
  <SettingMainScreen />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
