import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TagInput } from 'src/components/molecule';
import { Tag } from 'src/components/atom';

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
  placeholder: '스위치를 희망하는 물품이나 종류를 작성해주세요.',
  itemsWrap: 'wrap',
  name: 'tagInput',
  width: 300,
  disabled: false,
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
      backgroundColor: '#7979ae',
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '잡화',
      backgroundColor: '#79ef79',
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '직거래',
      backgroundColor: '#37f3bc',
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '내고가능',
      backgroundColor: '#bfa89b',
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '아이폰이면더좋음',
      backgroundColor: '#ff480084',
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
  ],
};
