import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FlexBox } from 'src/components/atom';

export default {
  title: 'FlexBox',
  component: FlexBox,
} as ComponentMeta<typeof FlexBox>;

const Template: ComponentStory<typeof FlexBox> = (args) => (
  <FlexBox {...args}>
    <FlexBox.Item flex={1} background={'red'}>
      item 1
    </FlexBox.Item>
    <FlexBox.Item flex={2} background={'green'}>
      item 2
    </FlexBox.Item>
    <FlexBox.Item flex={3} background={'orange'}>
      item 3
    </FlexBox.Item>
    <FlexBox.Item flex={1} background={'blue'}>
      item 4
    </FlexBox.Item>
  </FlexBox>
);

export const FlexBoxTemplate = Template.bind({});

FlexBoxTemplate.storyName = 'container';
FlexBoxTemplate.args = {
  flexDirection: 'row',
  background: '#000000',
  border: '1 solid orange',
  padding: 12,
  gap: 4,
};
