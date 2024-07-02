import React from 'react';
import { StoryFn } from '@storybook/react';
import { Icon } from 'src/components/atom';

export default {
  title: 'Icon',
  component: Icon,
};
const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  name: 'search',
  size: 24,
  color: 'red',
};
