import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from 'src/components/atom';

export default {
  title: 'Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  checked: true,
  size: 25,
};
