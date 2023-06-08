import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { UserSummary } from 'src/components/molecule';

export type UserSummaryData = {
  user: string;
  verified: boolean;
  countSwitch: string;
  userRate: string;
  bio: string;
};

export default {
  title: 'UserSummary',
  component: UserSummary,
} as ComponentMeta<typeof UserSummary>;

const Template: ComponentStory<typeof UserSummary> = (args) => (
  <UserSummary {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  tagColor: '#2c98c6',
  data: {
    user: '집오리',
    verified: true,
    countSwitch: '15',
    userRate: '5/5',
    bio: '제 꿈은 클립으로 집까지 바꾸는거예요 :)',
  },
};
