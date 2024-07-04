import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Radio } from 'src/components/atom';

export default {
  title: 'Radio',
  component: Radio,
} as Meta<typeof Radio>;

const Template: StoryFn<typeof Radio> = (args) => <Radio {...args} />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  checked: true,
  size: 25,
};
