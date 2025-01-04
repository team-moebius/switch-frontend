import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { TagInput } from 'src/components/molecule';
import PALETTE from 'src/assets/theme/colors/palettes';

export default {
  title: 'TagInput',
  component: TagInput,
} as Meta<typeof TagInput>;

const Template: StoryFn<typeof TagInput> = (args) => {
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
  disabled: false,
  width: 350,
  tags: [
    {
      children: '여성의류',
      backgroundColor: PALETTE.gray[200],
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '패션',
      backgroundColor: PALETTE.purple[100],
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '잡화',
      backgroundColor: PALETTE.gray[200],
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '직거래',
      backgroundColor: PALETTE.green[100],
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '내고가능',
      backgroundColor: PALETTE.gray[300],
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
    {
      children: '아이폰이면더좋음',
      backgroundColor: PALETTE.yellow[200],
      color: 'white',
      onPress: () => {
        alert('삭제됩니다');
      },
    },
  ],
};
