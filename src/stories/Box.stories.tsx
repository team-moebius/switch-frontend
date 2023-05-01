import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Button } from 'src/components/atom';

export default {
  title: 'Button/basic',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
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

BoxTemplate.storyName = '레이아웃 - Box';
BoxTemplate.args = {
  background: '#000000',
  border: '1 solid orange',
  padding: 12,
};
