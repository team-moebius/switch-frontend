import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from 'src/components/atom/Tag';

export default {
  title: 'Tag/basic',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => {
  return <Tag {...args} />;
};

export const WithTag = Template.bind({});

WithTag.storyName = 'With Tag';
WithTag.args = {
  color: '#fff',
  children: '다 좋아요',
  backgroundColor: '#e14fa7',
  width: 100,
};

// 고민1. width를 글자 길이에 맞춰 동적으로 바뀌도록 해야겠
// 고민2. onDelete가 있는 태그와 없는 태그가 있음. Icon 없이 onDelete 받으면 누르면 삭제되도록 로직 구현
