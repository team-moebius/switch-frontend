import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SecuritySettingMain } from 'src/routes/root/my-info/security-setting/screens/SecuritySettingMain';

export default {
  title: 'SecuritySettingMain',
  component: SecuritySettingMain,
} as ComponentMeta<typeof SecuritySettingMain>;

const Template: ComponentStory<typeof SecuritySettingMain> = () => (
  <SecuritySettingMain navigation={{}} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
