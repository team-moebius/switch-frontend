import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SwitchListItem } from 'src/components/molecule';

export default {
  title: 'SwitchListItem',
  component: SwitchListItem,
} as Meta<typeof SwitchListItem>;

const Template: StoryFn<typeof SwitchListItem> = (args) => (
  <SwitchListItem {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  data: {
    myItem: {
      name: '이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이이브이',
      src: 'https://cdn-gq.github.io/pokemon/133.webp',
    },
    selectedItem: {
      name: '꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기꼬부기',
      src: 'https://cdn-gq.github.io/pokemon/7.webp',
    },
  },
  onPress: () => {
    window.alert('링크 이동');
  },
  mirrorDirection: 'column',
  fontSize: 'switchList',
};
