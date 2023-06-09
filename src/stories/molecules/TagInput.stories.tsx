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
  placeholder: '스위치를 희망하는 물품이나 종류를 작성해주세요.',
  onPress: () => {
    alert('누르면 삭제가 됩니다');
  },
  tags: ['여성의류', '패션', '잡화', '직거래', '내고가능', '아이폰이면더좋음'],
  disabled: false,
};
