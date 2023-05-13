import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from 'src/components/atom';

export default {
  title: 'Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  const [value, setValue] = useState<string>('');

  return <Textarea {...args} value={value} onChangeText={setValue} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  placeholder: 'placeholder test',
  style: {},
};
