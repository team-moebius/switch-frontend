import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Typography } from 'src/components/atom';

export default {
  title: 'Typography',
  component: Typography,
} as Meta<typeof Typography>;

const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const story = Template.bind({});

story.storyName = 'default';
story.args = {
  fontSize: 20,
  color: 'black',
  fontWeight: 'bold',
  children: '기본 타이포',
};
