import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ChattingListItem } from 'src/components/molecule';

export default {
  title: 'ChattingListItem',
  component: ChattingListItem,
} as Meta<typeof ChattingListItem>;

const Template: StoryFn<typeof ChattingListItem> = (args) => (
  <ChattingListItem {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  data: {
    username: '청둥오리',
    selectedItem: '꼬부기',
    message: `The following modules couldn't be hot updated: (Full reload needed)
This is usually because the modules which have changed (and their parents) do not know how to hot reload themselves. See https://webpack.js.org/concepts/hot-module-replacement/ for more details.`,
    ago: '20분전',
    isUnread: true,
  },
  onPress: () => {
    alert('list click');
  },
  mirrorDirection: 'row',
};
