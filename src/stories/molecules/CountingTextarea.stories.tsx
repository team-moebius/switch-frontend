import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CountingTextarea } from 'src/components/molecule';

export default {
  title: 'CountingTextarea',
  component: CountingTextarea,
} as Meta<typeof CountingTextarea>;

const Template: StoryFn<typeof CountingTextarea> = (args) => {
  const [text, setText] = useState<string>('');
  const onTextHandler = (text: string) => {
    setText(text);
  };

  return <CountingTextarea {...args} onChange={onTextHandler} value={text} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  maxLength: 200,
  placeholder: '물품에 대한 설명이나 스토리를 작성해주세요.',
};
