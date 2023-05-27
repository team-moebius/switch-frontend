import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flexbox } from 'src/components/atom';

export default {
  title: 'Flexbox',
  component: Flexbox,
} as ComponentMeta<typeof Flexbox>;

const Template: ComponentStory<typeof Flexbox> = (args) => (
  <Flexbox {...args}>
    <Flexbox.Item flex={1} backgroundColor={'red'}>
      item 1
    </Flexbox.Item>
    <Flexbox.Item flex={2} backgroundColor={'green'}>
      item 2
    </Flexbox.Item>
    <Flexbox.Item flex={3} backgroundColor={'orange'}>
      item 3
    </Flexbox.Item>
    <Flexbox.Item flex={1} backgroundColor={'blue'}>
      item 4
    </Flexbox.Item>
  </Flexbox>
);

export const FlexBoxTemplate = Template.bind({});

FlexBoxTemplate.storyName = 'container';
FlexBoxTemplate.args = {
  flexDirection: 'row',
  backgroundColor: '#000000',
  border: '1 solid orange',
  padding: 12,
  gap: 4,
};
