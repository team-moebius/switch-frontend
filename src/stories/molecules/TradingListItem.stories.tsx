import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TradingListItem } from 'src/components/molecule';

export default {
  title: 'TradingListItem',
  component: TradingListItem,
} as Meta<typeof TradingListItem>;

const Template: StoryFn<typeof TradingListItem> = (args) => (
  <TradingListItem {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  data: {
    src: 'https://cdn-gq.github.io/pokemon/133.webp',
    title: '이브이',
    location: '대구 달서구',
  },
  onPress: () => {
    alert('list click');
  },
  childDirection: 'column',
  itemJustify: 'left',
  fontSize: 'cardList',
};
