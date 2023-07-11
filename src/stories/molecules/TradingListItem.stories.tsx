import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TradingListItem } from 'src/components/molecule';

export default {
  title: 'TradingListItem',
  component: TradingListItem,
} as ComponentMeta<typeof TradingListItem>;

const Template: ComponentStory<typeof TradingListItem> = (args) => (
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
  descDirection: 'column',
  itemJustify: 'left',
  nameFontSize: 'cardList',
};
