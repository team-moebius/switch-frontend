import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { UserSummary } from 'src/components/molecule';

export default {
  title: 'UserSummary',
  component: UserSummary,
} as Meta<typeof UserSummary>;

const Template: StoryFn<typeof UserSummary> = (args) => (
  <UserSummary {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  data: {
    nickname: '집오리',
    verified: true,
    switchCount: 15,
    score: 3,
    introduction: '제 꿈은 클립으로 집까지 바꾸는거예요 :)',
  },
};
