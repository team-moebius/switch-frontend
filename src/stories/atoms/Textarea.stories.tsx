import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from 'src/components/atom';

export default {
  title: 'Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  return <Textarea {...args} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  placeholder: 'placeholder test',
  value: '',
};
