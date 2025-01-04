import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { HistoryListItem } from 'src/components/molecule';

export default {
  title: 'HistoryListItem',
  component: HistoryListItem,
} as Meta<typeof HistoryListItem>;

const Template: StoryFn<typeof HistoryListItem> = (args) => (
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
  onPress: () => {
    alert('list click');
  },
  mirrorDirection: 'row',
};
