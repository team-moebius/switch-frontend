import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Textarea } from 'src/components/atom';

export default {
  title: 'Textarea',
  component: Textarea,
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => {
  return <Textarea {...args} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  placeholder: 'placeholder test',
  value: '',
};
