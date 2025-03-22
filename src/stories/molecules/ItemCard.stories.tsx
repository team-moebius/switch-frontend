import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { ItemCard } from 'src/components/molecule/ItemCard';

export default {
  title: 'ItemCard',
  component: ItemCard,
} as Meta<typeof ItemCard>;

const Template: StoryFn<typeof ItemCard> = (args) => {
  return <ItemCard {...args} />;
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  data: {
    name: '커스텀 키보드',
    date: '2023/03/08',
    description:
      '신입 개발자 시절 일에 대한 열정을 불태워줄 수 있도록 도와줬던 키보드입니다. 이걸로 업무봤을 때 좀 더 잘 되는 것 같았어요.',
    preferredCategories: ['여성 신발', '잡화'],
    preferredLocations: ['서울 천왕동'],
    liked: false,
  },
  onLikeHandler: () => {
    window.alert('clicked');
  },
};
