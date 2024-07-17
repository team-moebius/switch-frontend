import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Tag } from 'src/components/atom';

export default {
  title: 'Tag',
  component: Tag,
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = (args) => {
  const onDeleteHandler = () => {
    console.log('delete');
  };

  return <Tag {...args} onPress={onDeleteHandler} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  color: '#fff',
  children: '다 좋아요',
  backgroundColor: '#797979',
};
