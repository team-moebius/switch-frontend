import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from 'src/components/atom';
import { HashTagInput } from 'src/components/molecule';

export default {
  title: 'HashTagInput',
  component: HashTagInput,
} as ComponentMeta<typeof HashTagInput>;

const Template: ComponentStory<typeof HashTagInput> = (args) => {
  const [value, setValue] = useState<string>('');

  const onChangeText = (inputValue: string) => {
    setValue(inputValue);
  };

  return (
    <HashTagInput
      {...args}
      value={value}
      onChangeText={onChangeText}
      children={
        <Typography color={'black'} children={`${args.hashTags.length}/20`} />
      }
    />
  );
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  placeholder: '물품에 대한 해시태그를 작성해주세요.(선택사항)',
  disabled: false,
  itemsWrap: 'wrap',
  name: 'tagInput',
  width: 350,
  hashTags: [
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
};
