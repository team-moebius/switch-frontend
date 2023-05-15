import React from 'react';
import { ComponentStory } from '@storybook/react';
import Icon from 'src/components/atom/Icon';

export default {
  title: 'Icon',
  component: Icon,
};
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  name: 'search',
  size: 24,
  color: 'red',
};
