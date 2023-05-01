import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from 'src/components/atom/Tag';
import { useSetRandomColor } from 'src/common/hooks/useSetRandomColor';
import { useSetWidth } from 'src/common/hooks/useSetWidth';

export default {
  title: 'Tag/basic',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => {
  const backgroundColor = useSetRandomColor();
  const { width, onTextLayout } = useSetWidth(10);

  const onDeleteHandler = () => {
    console.log('delete');
  };

  return (
    <Tag
      {...args}
      width={width}
      backgroundColor={backgroundColor}
      onTextLayout={onTextLayout}
      onDelete={onDeleteHandler}
    />
  );
};

export const WithTag = Template.bind({});

WithTag.storyName = 'With Tag';
WithTag.args = {
  color: '#fff',
  children: '다 좋아요',
};
