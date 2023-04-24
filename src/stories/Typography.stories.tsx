import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from 'src/components/atom/Typography';

export default {
  title: 'Typography/basic',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const WithTypography = Template.bind({});

WithTypography.storyName = 'With Typography';
WithTypography.args = {
  children: '기본 타이포',
};
