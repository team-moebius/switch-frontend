import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Check } from 'src/components/atom';

export default {
  title: 'Check',
  component: Check,
} as ComponentMeta<typeof Check>;

const Template: ComponentStory<typeof Check> = (args) => {
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
