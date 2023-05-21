import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from 'src/components/atom/Tag';

export default {
  title: 'Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => {
  const onDeleteHandler = () => {
    console.log('delete');
  };

  return <Tag {...args} onPress={onDeleteHandler} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  width: 100,
  color: '#fff',
  children: '다 좋아요',
  backgroundColor: '#797979',
};
