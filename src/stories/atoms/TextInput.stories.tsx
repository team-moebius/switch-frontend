import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from 'src/components/atom/TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
  const [text, setText] = useState<string>('');

  const onTextHandler = (text: string) => {
    setText(text);
  };

  return (
    <TextInput
      {...args}
      name='name'
      placeholder='이름을 입력하세요'
      value={text}
      onChangeText={onTextHandler}
      width={200}
    />
  );
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  name: 'name',
  placeholder: 'name',
  value: 'Switch',
  disabled: false,
  width: 300,
};
