import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Toggle } from 'src/components/atom';

export default {
  title: 'Toggle',
  component: Toggle,
} as Meta<typeof Toggle>;

const Template: StoryFn<typeof Toggle> = (args) => <Toggle {...args} />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  value: true,
};
