import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { NotiListItem } from 'src/components/molecule';

export default {
  title: 'NotiListItem',
  component: NotiListItem,
} as Meta<typeof NotiListItem>;

const Template: StoryFn<typeof NotiListItem> = (args) => (
  <NotiListItem {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  data: {
    notification:
      '스위치 회원이 되신 것을 환영합니다! 보관함에 첫 물품을 등록하고, 다른 회원들과 스위치 해보세요.',
    ago: '방금전',
    iconName: 'megaphone-outline',
    iconSize: 20,
  },
  onPress: () => {
    alert('list click');
  },
};
