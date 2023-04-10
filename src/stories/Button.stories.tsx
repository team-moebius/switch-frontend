import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'src/components/atom/Button';

export default {
  title: 'Button/basic',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const WithButton = Template.bind({});

WithButton.storyName = 'With button';
WithButton.args = {
  title: '기본 버튼',
  onPress: () => {
    alert('버튼 클릭');
  },
};
