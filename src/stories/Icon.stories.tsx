import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from 'src/components/atom/Icon';

export default {
  title: 'Icon/Ionicons-expo',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const template = Template.bind({});

template.storyName = 'Basic icons in Ionicons(by Expo)';
template.args = {
  name: 'search',
  size: 24,
  color: 'red',
};
