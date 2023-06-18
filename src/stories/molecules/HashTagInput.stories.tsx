import React, { useState } from 'react';
import { HashTagInput } from 'src/components/molecule/HashTagInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'HashTagInput',
  component: HashTagInput,
} as ComponentMeta<typeof HashTagInput>;

const Template: ComponentStory<typeof HashTagInput> = (args) => {
  const [value, setValue] = useState<string>('');
  const onChangeText = (inputValue: string) => {
    setValue(inputValue);
  };
  return <HashTagInput {...args} value={value} onChangeText={onChangeText} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  tags: [
    {
      children: '#여성의류',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#패션',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#잡화',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#직거래',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#내고가능',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '#아이폰이면더좋음',
      backgroundColor: 'transparent',
      color: 'black',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
  ],
  disabled: false,
  tagsLimit: 20,
};
