import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button } from 'src/components/atom';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>안녕하세요</Button>
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  onPress: () => {
    alert('버튼 클릭');
  },
};
