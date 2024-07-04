import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Check } from 'src/components/atom';

export default {
  title: 'Check',
  component: Check,
} as Meta<typeof Check>;

const Template: StoryFn<typeof Check> = (args) => {
  return <Check {...args} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  checked: true,
  type: 'warning',
  boxType: 'square',
  size: 25,
};
