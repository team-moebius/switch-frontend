import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from 'src/components/atom';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return <Checkbox {...args} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  checked: true,
  type: 'warning',
  boxType: 'square',
  size: 25,
};
