import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HistoryListItem } from 'src/components/molecule';

export default {
  title: 'HistoryListItem',
  component: HistoryListItem,
} as ComponentMeta<typeof HistoryListItem>;

const Template: ComponentStory<typeof HistoryListItem> = (args) => (
  <HistoryListItem {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  data: {
    myItem: '엘피판 노트',
    selectedItem: '국민은행 달력',
    ago: '20분전',
  },
};
