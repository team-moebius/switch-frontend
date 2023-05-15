import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'src/components/atom/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  title: '기본 버튼',
  onPress: () => {
    alert('버튼 클릭');
  },
};
