import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotiListItem } from 'src/components/molecule';

export default {
  title: 'NotiListItem',
  component: NotiListItem,
} as ComponentMeta<typeof NotiListItem>;

const Template: ComponentStory<typeof NotiListItem> = (args) => (
  <NotiListItem {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  children:
    '스위치 회원이 되신 것을 환영합니다! 보관함에 첫 물품을 등록하고, 다른 회원들과 스위치 해보세요.',
  ago: '방금전',
};

// 서버에서 보내주는 값인 ago는 어떻게 상태 업데이트가 되는지? 시간이 지나면서 방금 전, 몇분 전, 몇시간 전, 몇일 전으로 어떻게 바뀌지?
