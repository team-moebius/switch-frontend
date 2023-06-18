import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TagInput } from 'src/components/molecule';

export default {
  title: 'TagInput',
  component: TagInput,
} as ComponentMeta<typeof TagInput>;

const Template: ComponentStory<typeof TagInput> = (args) => {
  const [value, setValue] = useState<string>('');
  const onChangeText = (inputValue: string) => {
    setValue(inputValue);
  };
  return <TagInput {...args} value={value} onChangeText={onChangeText} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  tags: [
    {
      children: '여성의류',
      backgroundColor: '#797979',
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '패션',
      backgroundColor: '#797979',
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '잡화',
      backgroundColor: '#797979',
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '직거래',
      backgroundColor: '#797979',
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '내고가능',
      backgroundColor: '#797979',
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '아이폰이면더좋음',
      backgroundColor: '#797979',
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
  ],
  disabled: false,
  tagsLimit: 20,
};
