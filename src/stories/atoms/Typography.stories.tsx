import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from 'src/components/atom';

export default {
  title: 'Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  fontSize: 20,
  color: 'black',
  fontWeight: 'bold',
  children: '기본 타이포',
};
