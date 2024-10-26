import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Box, Button } from 'src/components/atom';
import COLORS from 'src/assets/theme/base';

export default {
  title: 'Box',
  component: Box,
} as Meta<typeof Box>;

const Template: StoryFn<typeof Box> = (args) => (
  <Box {...args}>
    <Button
      title='테스트 버튼'
      onPress={() => {
        alert('Pressed!');
      }}
    ></Button>
  </Box>
);

export const BoxTemplate = Template.bind({});

BoxTemplate.storyName = 'default';
BoxTemplate.args = {
  backgroundColor: COLORS.neutral.black,
  border: '1 solid orange',
  padding: 12,
};
