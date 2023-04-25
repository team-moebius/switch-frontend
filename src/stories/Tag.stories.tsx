import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from 'src/components/atom/Tag';

export default {
  title: 'Tag/basic',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => {
  const onDeleteHandler = () => {
    console.log('delete');
  };

  return <Tag {...args} children='다 좋아요' onDelete={onDeleteHandler} />;
};

export const WithTag = Template.bind({});

WithTag.storyName = 'With Tag';
WithTag.args = {
  color: '#fff',
  children: '다 좋아요',
};
