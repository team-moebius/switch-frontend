import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SecuritySettingPassword } from 'src/routes/root/my-info/security-setting/screens/SecuritySettingPassword';

export default {
  title: 'SecuritySettingPassword',
  component: SecuritySettingPassword,
} as ComponentMeta<typeof SecuritySettingPassword>;

const Template: ComponentStory<typeof SecuritySettingPassword> = () => (
  <SecuritySettingPassword />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
